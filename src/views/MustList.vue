<template>
  <div class="must_list_container" >
    <div ref="scroll_view" class="mustlist_show_area" @scroll="nav_station_change($event)">
      <div class="mustListHeadImg" @click="back_to_homepage">
        <img src="../assets/sn_nav_demo_pic/nav-back.png" alt="" style="float: left;margin-left: 12px;">
        <img src="../assets/mustlist_nav_pic/tittle.png" alt="">
      </div>
      <Navigate_bar :mustListNavInfo="mustListNavInfo" @showareainfochange="mustListExhibit" ref="fixedtnav"></Navigate_bar>
      <Navigate_bar :mustListNavInfo="mustListNavInfo" @showareainfochange="mustListExhibit" v-show="nav_show_mark" ref="floatnav" style="position: fixed;top: 0;z-index: 1;"></Navigate_bar>
      <Merge_mustlist v-if="nav_active_mark === 0" v-for="(item,index) in mustlist_exhibit_infon[nav_active_mark]" :key="index" :gl_pr_list_info="item"></Merge_mustlist>
      <singleStyleMustList v-if="nav_active_mark !== 0 || false" :mustlist_block_info="mustlist_exhibit_infon[nav_active_mark]"></singleStyleMustList>
      <div class="mustlist_bottom"><----------------我是有底线的----------------></div>
      <Scroll_to_top v-show="nav_show_mark"></Scroll_to_top>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    import Navigate_bar from '@/components/Mustlist_cpn/Navigate_bar.vue'
    import Merge_mustlist from '@/components/Mustlist_cpn/Merge_mustlist.vue'
    import singleStyleMustList from '@/components/Mustlist_cpn/singleStyleMustList.vue'
    import Scroll_to_top from '@/components/Commons_cpn/Scroll_to_top.vue'
  export default {
      name: "MustList",
      data() {
          return {
              // 导航栏显示与隐藏标志
              nav_show_mark: 0,
              // 导航栏选中项目标志
              nav_active_mark: 0,
              // 顶部导航信息
              mustListNavInfo: null,
              // 必抢清单商品展示区信息
              mustlist_exhibit_infon: [],
              // 请求页码
              pageMark: 1,
              // 请求项目标志
              enrollCateId: null,
          }
      },
      components: {
          Navigate_bar,
          Merge_mustlist,
          singleStyleMustList,
          Scroll_to_top
      },
      // props: {
      //     mustlist_exhibit_infon: {
      //         type: Array,
      //         default() {
      //             return [{
      //                     mustlist_type:'gllist',
      //                     mustlist_tittle: '最受懒人欢迎的10款语音电视',
      //                     mustlist_showprice_option: 0,
      //                     mustlist_goods_count:10,
      //                     gllist_banner_pic: require('@/assets/must_prlist_demo_pic/gllist_banner_demo_pic.jpg'),
      //                     mustlist_items_info: [{pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049,
      //                         mustitem_link: '#', goods_name:'【升级版】布朗博士 新生儿婴儿防胀气宽口玻璃奶瓶 仿母乳触感奶嘴 150ml 配0-3个月奶嘴'},
      //                     {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049,
      //                         mustitem_link: '#', goods_name:'【升级版】布朗博士 新生儿婴儿防胀气宽口玻璃奶瓶 仿母乳触感奶嘴 150ml 配0-3个月奶嘴'},
      //                     {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049,
      //                         mustitem_link: '#', goods_name:'【升级版】布朗博士 新生儿婴儿防胀气宽口玻璃奶瓶 仿母乳触感奶嘴 150ml 配0-3个月奶嘴'}]},
      //
      //             {
      //               mustlist_type:'prlist',
      //               mustlist_tittle: '超大存储的智能手机使用更畅快',
      //               mustlist_showprice_option: 0,
      //               mustlist_items_info: [{pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'},
      //                   {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'},
      //                   {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'}]},
      //
      //                 {
      //                     mustlist_type:'prlist',
      //                     mustlist_tittle: '超大存储的智能手机使用更畅快',
      //                     mustlist_showprice_option: 1,
      //                     mustlist_items_info: [{pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'},
      //                         {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'},
      //                         {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'}]},
      //                 {
      //                     mustlist_type:'gllist',
      //                     mustlist_tittle: '最受懒人欢迎的10款语音电视',
      //                     mustlist_showprice_option: 0,
      //                     mustlist_goods_count:10,
      //                     gllist_banner_pic: require('@/assets/must_prlist_demo_pic/gllist_banner_demo_pic.jpg'),
      //                     mustlist_items_info: [{pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049,
      //                         mustitem_link: '#', goods_name:'【升级版】布朗博士 新生儿婴儿防胀气宽口玻璃奶瓶 仿母乳触感奶嘴 150ml 配0-3个月奶嘴'},
      //                         {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049,
      //                             mustitem_link: '#', goods_name:'【升级版】布朗博士 新生儿婴儿防胀气宽口玻璃奶瓶 仿母乳触感奶嘴 150ml 配0-3个月奶嘴'},
      //                         {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049,
      //                             mustitem_link: '#', goods_name:'【升级版】布朗博士 新生儿婴儿防胀气宽口玻璃奶瓶 仿母乳触感奶嘴 150ml 配0-3个月奶嘴'}]},
      //
      //                 {
      //                     mustlist_type:'prlist',
      //                     mustlist_tittle: '超大存储的智能手机使用更畅快',
      //                     mustlist_showprice_option: 0,
      //                     mustlist_items_info: [{pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'},
      //                         {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'},
      //                         {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'}]},
      //
      //                 {
      //                     mustlist_type:'prlist',
      //                     mustlist_tittle: '超大存储的智能手机使用更畅快',
      //                     mustlist_showprice_option: 1,
      //                     mustlist_items_info: [{pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'},
      //                         {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'},
      //                         {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'}]},
      //                 {
      //                     mustlist_type:'gllist',
      //                     mustlist_tittle: '最受懒人欢迎的10款语音电视',
      //                     mustlist_showprice_option: 0,
      //                     mustlist_goods_count:10,
      //                     gllist_banner_pic: require('@/assets/must_prlist_demo_pic/gllist_banner_demo_pic.jpg'),
      //                     mustlist_items_info: [{pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049,
      //                         mustitem_link: '#', goods_name:'【升级版】布朗博士 新生儿婴儿防胀气宽口玻璃奶瓶 仿母乳触感奶嘴 150ml 配0-3个月奶嘴'},
      //                         {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049,
      //                             mustitem_link: '#', goods_name:'【升级版】布朗博士 新生儿婴儿防胀气宽口玻璃奶瓶 仿母乳触感奶嘴 150ml 配0-3个月奶嘴'},
      //                         {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049,
      //                             mustitem_link: '#', goods_name:'【升级版】布朗博士 新生儿婴儿防胀气宽口玻璃奶瓶 仿母乳触感奶嘴 150ml 配0-3个月奶嘴'}]},
      //
      //                 {
      //                     mustlist_type:'prlist',
      //                     mustlist_tittle: '超大存储的智能手机使用更畅快',
      //                     mustlist_showprice_option: 0,
      //                     mustlist_items_info: [{pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'},
      //                         {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'},
      //                         {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'}]},
      //
      //                 {
      //                     mustlist_type:'prlist',
      //                     mustlist_tittle: '超大存储的智能手机使用更畅快',
      //                     mustlist_showprice_option: 1,
      //                     mustlist_items_info: [{pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'},
      //                         {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'},
      //                         {pic_url: require('@/assets/must_prlist_demo_pic/must_pr_list_demo_pic1.webp'), mustlist_promotion:['领劵5元'], mustlist_price:4049, mustitem_link: '#'}]}
      //
      //
      //             ]
      //         }
      //     }
      // },
      methods: {
        // 接受保存子组件顶部导航条传出来的信息
        mustListExhibit(context) {
            if (this.nav_active_mark === context.index) {
                return
            }
            // 用户选择了新项目，页码设置为1
            this.pageMark = 1
            this.nav_active_mark = context.index
            this.enrollCateId = context.enrollCateId
            if (!this.mustlist_exhibit_infon[this.nav_active_mark]) {
                this.getDisplayInfo()
            }
            this.$refs.floatnav.navsame(context.index)
            this.$refs.fixedtnav.navsame(context.index)
        },
        // 获取信息方法总成
        getDisplayInfo() {
            // 设置精选URL
            let url1 = '/mzfsmzis/biQiang5.do?custNum=7194426173&c=156913720153348882&cityId=025&sceneIds=22-12&page=' + this.pageMark + '&size=10&ids=bq-jx-head-lb,bq-jx-head-fk&id=undefined&_=' + this.timeStampTest() + '&callback=Zepto' + this.timeStampTest()
            if(this.nav_active_mark !== 0) {
                url1 = '/showM/higou/enroll/jsonpNew/listEnrollNew_' + this.enrollCateId + '_' + this.pageMark + '_10_' + this.timeStampTest() + '_cateCallback.html?_=' + this.timeStampTest() + '&callback=cateCallback'
                axios.get(url1)
                    .then((res1)=>{
                        let resData = (JSON.parse(res1.data.slice(13,-1)))
                        resData = resData.data.list
                        resData.map((resItem)=>{
                            if (resItem && resItem.hgContent && resItem.hgContent.displayJson) {
                                resItem.hgContent.displayJson = JSON.parse(resItem.hgContent.displayJson)
                            }
                        })
                        if (!this.mustlist_exhibit_infon[this.nav_active_mark]) {
                            this.$set(this.mustlist_exhibit_infon, this.nav_active_mark, resData)

                        }
                        else {
                            this.mustlist_exhibit_infon[this.nav_active_mark].push(...resData)
                        }
                        this.pageMark++
                    })
                    .catch((err4)=>{console.log(err4);})
                return


            }
            axios.get(url1)
                .then((res1)=>{
                    // 提取响应回来的json文件
                    let resData = (JSON.parse(res1.data.slice(19,-2)))
                    resData = resData.recData.sugGoods[0].skus
                    if (!this.mustlist_exhibit_infon[this.nav_active_mark]) {
                        this.$set(this.mustlist_exhibit_infon, this.nav_active_mark, resData)
                    }
                    else {
                        this.mustlist_exhibit_infon[this.nav_active_mark].push(...resData)
                    }
                    this.pageMark++

                })
                .catch((err4)=>{console.log(err4);})
        },
        // 监听页面滚动
        nav_station_change(event) {
            // =================滚动到底部请求数据=================================
            //变量scrollTop是滚动条滚动时，距离顶部的距离
            var scrollTop = event.target.scrollTop;
            //变量windowHeight是可视区的高度
            var windowHeight = event.target.clientHeight;
            //变量scrollHeight是滚动条的总高度
            var scrollHeight = event.target.scrollHeight;
            //滚动条到底部的条件
            if ((scrollTop + windowHeight) === scrollHeight) {
                if(this.nav_active_mark !== 0) {
                    this.getDisplayInfo()
                }
                else {
                    this.getDisplayInfo()
                    }
            }

            // =================导航条隐藏与显示=================================
            // console.log('导航条隐藏与显示')
            let scrtop = event.target.scrollTop

            if((scrtop < 880 && this.nav_show_mark === 0) || (scrtop > 880 && this.nav_show_mark ===1)) {
                return
            }
            if(scrtop < 880 && this.nav_show_mark === 1) {
                this.nav_show_mark = 0
            }

            if(scrtop > 880 && this.nav_show_mark === 0) {
                this.nav_show_mark = 1
            }

        },
        // 回到首页
        back_to_homepage() {
            this.$router.replace('/')
        },
        // 时间戳
        timeStampTest() {
            let timeStamp = new Date().getTime()
            return timeStamp
        },
        // 顶部导航信息 mustListNavInfo: null,
        getMustListNavInfo() {
          let url2 = '/mzfsmzis/bqqdTab.do?ids=bq-jx-zt&_=' + this.timeStampTest() + '&callback=Zepto' + this.timeStampTest()
          axios.get(url2)
            .then((res2)=>{
              // 提取响应回来的json文件
              this.mustListNavInfo = JSON.parse(res2.data.slice(19,-2))
              this.mustListNavInfo = this.mustListNavInfo.tab.data
            })
            .catch((err4)=>{console.log(err4);})
        }
      },
      created() {
          // 必抢清单精选商品展示区信息 mustlist_exhibit_infon: [],
          this.getDisplayInfo()

          // 顶部导航信息 nustListNavInfo: null,
          this.getMustListNavInfo()
      }
  }
</script>
<style scoped>
  .must_list_container{
    width: 375px;
    margin: 0 auto;
  }
  .mustlist_show_area {
    background-color: rgb(242,242,242);
    width: 375px;
    position: fixed;
    top: 0;
    bottom: 0;
    overflow-y: auto;
  }
  .mustListHeadImg {
    width: 375px;
    height: 44px;
    background-color: white;
    border-bottom: 1px solid rgb(220,220,220);
  }
  .mustListHeadImg img{
    height: 24px;
    display: inline-block;
    margin: 10px auto 0;
  }

  .mustlist_show_area::-webkit-scrollbar {
    display: none;
  }
  .mustlist_bottom {
    padding: 6px;
    font-size: 12px;
    color: #999999;
  }

</style>
