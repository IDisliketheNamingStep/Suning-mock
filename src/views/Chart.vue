<template>
  <div class="chart">
<!--    底部导航条-->
    <TabBar :tabbar_item_info="profile_tabbar" :pathList="pathList"></TabBar>
    <!--        底部结算区-->
    <div class="detail_tabbar_container" >
      <span :class="{isSelected:true, isSelectedActive: selectedActive}" @click.stop="toggleSelected"></span>
      <span class="isAllselected"><i v-if="selectedActive">取消</i>全选</span>
      <div class="money_freight_pay_container">
        <div class="money_freight" >
          <p class="money_total" >合计：<span class="money_style">￥{{$store.getters.totalMoney}}</span></p>
          <p class="freight" >免运费</p>
        </div>
        <span class="total_money_count" >去结算（{{$store.getters.totalCount}}）</span>
      </div>
    </div>

<!--    内容显示区-->
    <div class="contents_area">
      <!--        置顶返回navbar-->
      <div class="detail_page_nav">
        <div class="goback" @click="back_to_homepage"></div>
        <span style="font-size: 20px; line-height: 42px">购物车</span>
        <div class="nav_right_getmore"></div>
      </div>

      <chartForShop v-if="$store.state.chartList !== {}" v-for="(item, index) of $store.state.chartList" :key="index" :chartOfShop="item"></chartForShop>

      <Bottom_apart_line bottomWarningStr="您可能感兴趣的商品"></Bottom_apart_line>
      <!--      猜你喜欢-->
      <RecommendedCpn :guessYouLikeSkus="guessYouLikeSkus" :recommendedGoodsCpnStyle="recommendedGoodsCpnStyle"></RecommendedCpn>
      <Bottom_apart_line bottomWarningStr="以上根据您购物车中的商品推荐"></Bottom_apart_line>

    </div>

  </div>
</template>

<script>
import axios from 'axios'
import chartForShop from '@/components/Chart/chartForShop.vue'
import TabBar from '@/components/TabBar.vue'
import RecommendedCpn from '@/components/RecommendedCpn/RecommendedCpn.vue'
import Bottom_apart_line from '@/components/Commons_cpn/Bottom_apart_line.vue'
export default {
      name: "Chart",
      data() {
        return {
            // 猜你喜欢数据
            guessYouLikeSkus: [],
        }
      },
      computed: {
          // 全选选中标志
          selectedActive() {
              return this.$store.state.isChartAllSelected
          }
      },
      components: {
          TabBar,
          RecommendedCpn,
          Bottom_apart_line,
          chartForShop
      },
      props: {
          // 猜你喜欢样式参数设置
          recommendedGoodsCpnStyle: {
             type:Object,
             default() {
                 return {
                     // 设置flex布局（around、between、evenly）
                     itemsArrangeStyle:'justify-content: space-between',
                     // 设置一个商品的宽度
                     item_style: 'width: 49%; border-radius: 0px',
                     // 设置是否显示店铺类型
                     doShowShopType:false,
                     // 设置文字显示宽度
                     textPrice_style: 'width: 77%',
                     // 设置商品图片宽度
                     goodThumbnailImg_style: 'width: 100%',
                     // 设置是否显示促销
                     promotionShowMark: false
                 }
             }
          },
          pathList: {
              type: Array,
              default() {
                  return ['/', '/category', '/profile', '/search_route_path', '/chart']
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
          recommends_info:{
              type: Array,
              default() {
                  return []
              }
          }
      },
      methods: {
          back_to_homepage() {
              this.$router.replace('/')
          },
          toggleSelected() {
              // 购物车全选标志
              this.$store.commit('chartAllSelected')
          },
          getGuessLikeInfo() {
              // 猜你喜欢
              let url1 = '/tuijian/recommend-portal/recommend/paramsBiz.jsonp?sceneIds=18-49&count=16&u=7194426173&c=156913720153348882&cityId=9173&parameters=' + this.$store.getters.chartGuessLikeParams[0] + '&parameters=' + this.$store.getters.chartGuessLikeParams[1] + '&parameters=' + this.$store.getters.chartGuessLikeParams[2] + '&callback=jsonp3'
              axios.get(url1)
                  .then((res1)=>{
                      // 提取响应回来的json文件
                      this.guessYouLikeSkus = JSON.parse(res1.data.slice(7,-2))
                      this.guessYouLikeSkus = this.guessYouLikeSkus.sugGoods[0].skus
                  })
                  .catch((err1)=>{console.log(err1);})
          }
      },
      created() {
          this.getGuessLikeInfo()
      },
      activated() {
          this.getGuessLikeInfo()
      }
}
</script>

<style scoped>
  .chart {
    width: 375px;
    margin: 0 auto;
  }
  .contents_area{
    width: 375px;
    position: fixed;
    top: 0;
    bottom: 100px;
    background-color: rgb(242,242,242);
    overflow-y: auto;
  }
  .contents_area::-webkit-scrollbar {
    display: none;
  }
  /*顶部导航栏*/
  .detail_page_nav {
    height: 44px;
    width: 100%;
    background: url("../assets/sn_nav_demo_pic/nav-back.png") 7px 7px no-repeat white;
    background-size: 30px;
  }
  .goback {
    display: inline-block;
    width: 30px;
    height: 44px;
    margin-left: 7px;
    float: left;
  }
  .nav_right_getmore {
    width: 30px;
    height: 30px;
    float: right;
    margin:7px 7px 0 0;
    border-radius: 50%;
    background: url("../assets/sn_nav_demo_pic/nav-more.png") 0px 0px no-repeat;
    background-size: 30px;
  }



  /*底部结算区*/
  /*选中小图标*/
  .isSelected {
    float: left;

    width: 15px;
    height: 15px;
    margin: 0px 15px 0 0;
    border-radius: 50%;
    border: 1px solid rgb(220,220,220);
    background: url("../assets/chart/购物车对勾图标.png") 0px 3px no-repeat;
    background-size: 100%;
  }
  .isSelectedActive {
    background: url("../assets/chart/购物车对勾图标.png") 0px 3px no-repeat #ff6600;
    background-size: 100%;
  }
  /*选中小图标*/

  .detail_tabbar_container {
    position: fixed;
    bottom: 50px;
    height: 50px;
    width: 375px;
  }
  .detail_tabbar_container .isSelected {
    margin: 15px 0 0 15px;
  }
  .isAllselected {
    float: left;
    line-height: 50px;
    margin-left: 8px;
  }
  .total_money_count {
    display: inline-block;
    /*width: 120px;*/
    padding-left: 5px;
    line-height: 50px;
    float: right;
    background-color: rgb(255,102,0);
    font-size: 17px;
    color: white;
    text-align: center
  }
  .money_freight_pay_container {
    float: right;
  }
  .money_freight {
    float: left;
    margin-right: 10px;
  }
  .money_total {
    line-height: 25px;
    color: #ff6600;
  }
  .money_style {
    font-size: 17px;
  }
  .freight {
    line-height: 25px;
    text-align: right;
  }

</style>
