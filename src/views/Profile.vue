<template>
    <div class="profile_container" >
      <div class="profile_content" ref="scroll_view">
        <Scroll_to_top></Scroll_to_top>
        <div class="pro_head" @click="back_to_homepage">
          <img src="../assets/sn_nav_demo_pic/nav-back.png" alt="" style="float: left;margin : 7px 0 0 12px;height: 30px;">
          我的易购
        </div>
        <ProfileBanner :user_info="user_info"></ProfileBanner>
        <SuningMoney></SuningMoney>
        <div class="sn_order">
          <div class="order_tittle">
            <div class="order_tittle_left">我的订单</div>
            <div class="order_tittle_right">查看全部订单&gt;</div>
          </div>

          <div class="order_list">
            <EnterList :enter_list="profile_order_list"></EnterList>
          </div>
        </div>
        <div class="sn_service_container">
          <EnterList :enter_list="snSever" :fiveOrFour="'four'"></EnterList>
        </div>
        <TabBar :tabbar_item_info="profile_tabbar" :pathList="pathList"></TabBar>
        <img src="../assets/demo_pic/profile猜你喜欢.png" alt="" style="width: 120px;margin: 10px 0">
        <RecommendedCpn :guessYouLikeSkus="guessCallb" :recommendedGoodsCpnStyle="recommendedGoodsCpnStyle"></RecommendedCpn>
        <Bottom_apart_line bottomWarningStr="DUANG~daodil"></Bottom_apart_line>
      </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Scroll_to_top from '@/components/Commons_cpn/Scroll_to_top.vue'
    import Bottom_apart_line from '@/components/Commons_cpn/Bottom_apart_line.vue'

    import HeadBar from '@/components/Home_cpn/HeadBar.vue'
    import ProfileBanner from '@/components/Profile_cpn/ProfileBanner.vue'
    import EnterList from '@/components/Home_cpn/EnterList.vue'
    import RecommendedCpn from '@/components/RecommendedCpn/RecommendedCpn.vue'
    import ProfileRcommendcpn from '@/components/Profile_cpn/ProfileRcommendcpn.vue'
    import TabBar from '@/components/TabBar.vue'
    import SuningMoney from '@/components/Profile_cpn/SuningMoney.vue'
    export default {
        name: "Profile",
        data() {
            return {
                // 猜你喜欢
                guessCallb: null,
                // 苏宁服务
                snSever: null
            }
        },
        components: {
            HeadBar, ProfileBanner, EnterList,ProfileRcommendcpn,TabBar,SuningMoney,Scroll_to_top,RecommendedCpn,Bottom_apart_line
        },
        methods: {
            back_to_homepage() {
                this.$router.replace('/')
            },
            scroll_to_top0() {
                this.$refs.scroll_view.scrollTop=0
            },
            to_homepage() {

                this.$router.replace('/')
            },
            timeStampTest() {
                // let timeStamp = new Date().getTime()
                return new Date().getTime()
            }
        },
        props: {
            pathList: {
                type: Array,
                default() {
                    return ['/', '/category', '/profile', '/search_route_path', '/chart']
                }
            },
            recommendedGoodsCpnStyle: {
                type:Object,
                default() {
                    return {
                        // 设置flex布局（around、between、evenly）以下为首页默认样式
                        itemsArrangeStyle:'justify-content: space-evenly',
                        // 设置一个商品的宽度
                        item_style: 'border-radius: 0px; width:49%; border: 1px solid rgb(252,252,252); margin-bottom:0',
                        // 设置是否显示店铺类型
                        doShowShopType:true,
                        // 设置文字显示宽度
                        textPrice_style: 'width: 88.5%;',
                        // 设置商品图片宽度
                        goodThumbnailImg_style: 'width: 100%;',
                        // 设置是否显示促销
                        promotionShowMark: true
                    }
                }
            },
            profile_order_list: {
                type:Array,
                default() {
                    return [{pic_url: require('@/assets/profile_demo_pic/profile_order/待支付.png'), text: '待支付'},
                        {pic_url: require('@/assets/profile_demo_pic/profile_order/待收货.png'), text: '待收货'},
                        {pic_url: require('@/assets/profile_demo_pic/profile_order/评价有礼.png'), text: '评价有礼'},
                        {pic_url: require('@/assets/profile_demo_pic/profile_order/退换售后.png'), text: '退换/售后'},
                        {pic_url: require('@/assets/profile_demo_pic/profile_order/常购清单.png'), text: '常购清单'}]
                }
            },
            profile_more_service: {
                type:Array,
                default() {
                    return []
                }
            },
            user_info: {
                type:Object,
                default() {
                    return {
                        user_avatus:'',
                        user_phone: '188******82',
                        user_code_pic: require('@/assets/profile_demo_pic/profile二维码.png')
                    }
                }
            },
            recommends_info:{
                type: Array,
                default() {
                    return []
                }
            },
            profile_tabbar: {
                type:Array,
                default() {
                    return  [{pic_url:require("@/assets/profile_demo_pic/profile_tabbar/1首页.png"), tabname:'',path:'/'},
                        {pic_url:require("@/assets/profile_demo_pic/profile_tabbar/2分类.png"), tabname:'',path:'/category'},
                        {pic_url:require("@/assets/profile_demo_pic/profile_tabbar/3我的.png"), tabname:'',path:'/profile'},
                        {pic_url:require("@/assets/profile_demo_pic/profile_tabbar/4搜索.png"), tabname:'',path:'/chart'},
                        {pic_url:require("@/assets/profile_demo_pic/profile_tabbar/5购物车.png"), tabname:'',path:'/chart'}]
                }
            },
        },
        created() {
            //https://msinode.suning.com/proxy/newTuijian/msiGuessLike?terminal=wap&u=7194426173&c=156913720153348882&cityId=025&sceneIds=18-54&count=50&_=1570841114032&callback=guessCallb
            let url1 = '/msinode/proxy/newTuijian/msiGuessLike?terminal=wap&u=7194426173&c=156913720153348882&cityId=025&sceneIds=18-54&count=50&_=1570841114032&callback=guessCallb'
             axios.get(url1)
                .then((res1)=>{
                    // 提取响应回来的json文件
                    // 猜你喜欢
                    this.guessCallb = JSON.parse(res1.data.slice(11,-1))
                    this.guessCallb = this.guessCallb.sugGoods[0].skus
                })
                .catch((err1)=>{console.log(err1);})

            //https://lib.suning.com/api/jsonp/cb/Myyigou5.0-cmsCallback.jsonp?_=1570841113949&callback=cmsCallback
            let url2 = '/api/Myyigou5.0-cmsCallback.jsonp?_=' + this.timeStampTest + '&callback=cmsCallback'
             axios.get(url2)
                .then((res2)=>{
                    // 提取响应回来的json文件
                    this.snSever = JSON.parse(res2.data.slice(12,-3))
                    // 苏宁服务
                    let r1 = Object.values(this.snSever[1])
                    this.snSever = Object.values(this.snSever[1])
                    this.snSever.splice(1,3)
                    this.snSever.splice(2,1)
                })
                .catch((err2)=>{console.log(err2);})
        }
    }
</script>

<style scoped>
  .profile_container {
    width: 375px;
    margin: 0 auto;
  }
  .profile_content {
    position: fixed;
    top: 0;
    bottom: 49px;
    background-color: rgb(242,242,242);
    overflow-y: scroll;
    z-index: 9;
  }
  .profile_content::-webkit-scrollbar {
    display: none;
  }
  .pro_head {
    font-size: 15px;
    height: 44px;
    line-height: 44px;
    border-bottom: 2px solid rgb(220,220,220);
    background-color: white;
  }
  .sn_order {
    margin-top: 10px;
    background-color: white;
  }
  .order_tittle {
    width: 345px;
    height: 32px;
    padding: 0 15px;
    color: #222222;
    line-height: 32px;
    border-bottom: 1px solid rgb(242,242,242);
  }
  .order_tittle_left {
    float: left;
    font-size: 15px;
  }
  .order_tittle_right {
    float: right;
  }
  .order_list{
    display: inline-block;
    background-color: white;
    width: 100%;
  }
  .sn_service_container {
    margin-top: 10px;
    display: inline-block;
    background-color: white;
  }
</style>
