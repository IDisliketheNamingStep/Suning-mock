<template>
  <div class="home" >
<!--    底部Tabbar-->
    <TabBar :tabbar_item_info="tabbar_item_info"></TabBar>
    <div class="scroll_view" ref="scroll_view" @scroll="toTop_station_change($event)">
<!--      轮播图-->
      <awssomSwiper :swiper_pic_list="banner_im"></awssomSwiper>
<!--      <SwiperCpn class="top" :bannerReady="bannerReady" :swiper_pic_list="banner_im"></SwiperCpn>-->
<!--      进入列表-->

      <EnterList :enter_list="enter_list" :enter_bg="enter_bg"></EnterList>
<!--      大促-->
      <div v-if="dc_htimg">
        <TemporPromotion :img_zdy="dc_htimg && dc_htimg[0] && dc_htimg[0].dc_htimg.tag"></TemporPromotion>
      </div>
<!--      苏宁头条-->
      <touTiaoSwiper v-if="toutiao_info_list.length > 0" :toutiao_logo="toutiao_logo" :toutiao_info_list="toutiao_info_list"></touTiaoSwiper>
      <!--      每天临时促销-->
      <div v-if="dc_htimg">
        <TemporPromotion :img_zdy="dc_htimg && dc_htimg[0] && dc_htimg[1].dc_htimg.tag"></TemporPromotion>
      </div>
      <TemporPromotion :img_zdy="img_zdy"></TemporPromotion>
      <!--      主题区-->
      <ThemeBlock v-for="(theme,index) in themes_info_arr" :key="index" :theme_block_info="theme"></ThemeBlock>
<!--      猜你喜欢-->
      <RecommendedCpn :recoms_block_info="recommends_info" :guessYouLikeSkus="guessYouLikeSkus"></RecommendedCpn>
<!--      回到顶部-->
      <Scroll_to_top v-show="to_top_show_mark"></Scroll_to_top>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import SwiperCpn from '@/components/SwiperCpn.vue'
import awssomSwiper from '@/components/Home_cpn/awssomSwiper.vue'
import touTiaoSwiper from '@/components/Home_cpn/touTiaoSwiper.vue'
import TabBar from '@/components/TabBar.vue'
import RecommendedCpn from '@/components/RecommendedCpn/RecommendedCpn.vue'
import Scroll_to_top from '@/components/Commons_cpn/Scroll_to_top.vue'
import EnterList from '@/components/Home_cpn/EnterList.vue'
import ThemeBlock from '@/components/Home_cpn/ThemeBlock.vue'
import TemporPromotion from '@/components/Home_cpn/TemporPromotion.vue'
import ToutiaoSuNing from '@/components/Home_cpn/ToutiaoSuNing.vue'
import HeadBar from '@/components/Home_cpn/HeadBar.vue'
import Merge_big_small from '@/components/Home_cpn/Merge_big_small.vue'

export default {
  name: 'home',
  data() {
      return {
          wapindex7_cmsJsonpApi: null,
          // 轮播图
          banner_im: [],
          // 底部tabbar信息
          tabbar_item_info:[],
          // 进入列表信息
          enter_list: [],
          // 进入列表背景图
          enter_bg: '',
          // 大促
          dc_htimg: [],
          // 临时推广
          img_zdy: [],
          // 头条logo
          toutiao_logo: '',
          // 头条展示信息
          toutiao_list: [],
          toutiao_info_list:[],
          Zepto666: {},
          // 主题信息
          themes_info_arr: [],
          // 猜你喜欢分隔图
          recommends_info: null,
          // 猜你喜欢信息列表
          guessYouLikeSkus:[],
          // 头条数据准备好了
          touTiaoDataReady: false,
          // 轮播图准备就绪
          bannerReady: false,
          // 回到顶部显示与隐藏标志
          to_top_show_mark: false
      }
  },
  components: {
    TabBar,
    SwiperCpn,
    EnterList,
    TemporPromotion,
    ToutiaoSuNing,
    RecommendedCpn,
    HeadBar,
    Merge_big_small,
    Scroll_to_top,
    ThemeBlock,
    awssomSwiper,
    touTiaoSwiper
  },
    methods: {
      // 时间戳
      test() {
          return new Date().getTime()
      },
      // 回到顶部显示与隐藏
      toTop_station_change(event) {
          // =================回顶部隐藏与显示=================================
          let scrtop = event.target.scrollTop
          if((scrtop < 880 && this.to_top_show_mark === false) || (scrtop > 880 && this.to_top_show_mark === true)) {
              return
          }
          if(scrtop < 880 && this.to_top_show_mark === true) {
              this.to_top_show_mark = false
              return;
          }
          if(scrtop > 880 && this.to_top_show_mark === false) {
              this.to_top_show_mark = true
          }

      },
      // 获取轮播图及主题区信息
      getSwiperAndThemePartInfo() {
        let url1 = '/lib/api/jsonp/cb/wapindex7-cmsJsonpApi.jsonp?_=' + this.test() +'&callback=cmsJsonpApi'
        axios.get(url1)
          .then((res1)=>{
            // 提取响应回来的json文件
            this.wapindex7_cmsJsonpApi = JSON.parse(res1.data.slice(12,-3))
            // banner图
            this.banner_im = this.wapindex7_cmsJsonpApi.filter((b)=>{
              return b.banner_im
            })
            this.banner_im = this.banner_im[0].banner_im.tag
            // 轮播图准备就绪
            this.bannerReady = true

            // 底部tabbar
            this.tabbar_item_info = this.wapindex7_cmsJsonpApi.filter((s)=>{
              return s.botton_btn
            })
            this.tabbar_item_info = this.tabbar_item_info['0'].botton_btn.tag
            // 猜你喜欢
            this.recommends_info = this.wapindex7_cmsJsonpApi.filter((r)=>{
              return r.v7_guess_title
            })
            this.recommends_info = this.recommends_info['0'].v7_guess_title.tag[0].picUrl
            // enterlist
            this.enter_list = this.wapindex7_cmsJsonpApi.filter((t)=>{
              return t.enter_list
            })
            // 进入列表背景图地址
            this.enter_bg = 'background: url("' + 'https://image2.suning.cn' + this.enter_list[0].enter_bg.tag[0].picUrl +  '") no-repeat; background-size:100% 100%;'
            this.enter_list = this.enter_list['0'].enter_list.tag
            // 大促
            this.dc_htimg = this.wapindex7_cmsJsonpApi.filter((w)=>{
              // return w.dc_htimg
            })
            // this.dc_htimg = this.dc_htimg[0] && this.dc_htimg[0].dc_htimg && this.dc_htimg[0].dc_htimg.tag
            // 临时促销
            this.img_zdy = this.wapindex7_cmsJsonpApi.filter((w)=>{
              return w.img_zdy
            })
            this.img_zdy = this.img_zdy[0] && this.img_zdy[0].img_zdy && this.img_zdy[0].img_zdy.tag

            // 头条logo
            this.toutiao_logo = this.wapindex7_cmsJsonpApi.filter((f)=>{
              return f.toutiao_logo
            })
            this.toutiao_logo = this.toutiao_logo[0].toutiao_logo && this.toutiao_logo[0].toutiao_logo.tag[0].picUrl

            // 每日一逛
            let ttt = []
            let yyy = null
            // console.log(this.wapindex7_cmsJsonpApi,' 666')
            this.wapindex7_cmsJsonpApi.forEach((s,index)=>{
              if (yyy === null && s.title_image) {
                yyy = index
              }
              if (s.big_blank) {
                ttt.push(index)
              }
            })
            let k = 0
            for (let i = 0; i < ttt.length; i++) {
              if (ttt[i] < yyy) {
                continue
              }
              this.themes_info_arr[k] = {title_image: null, itemList: []}
              for (let j = yyy; j < ttt[i]; j++) {
                if (this.wapindex7_cmsJsonpApi[j].title_image) {
                  this.themes_info_arr[k].title_image = this.wapindex7_cmsJsonpApi[j].title_image.tag[0].picUrl
                  continue
                }
                if (this.wapindex7_cmsJsonpApi[j].px_space) {
                  continue
                }
                if (this.themes_info_arr[k].title_image === null) {
                  k--
                  if (i === ttt.length-1) {
                    this.themes_info_arr.pop()
                  }
                  break
                }

                this.themes_info_arr[k].itemList.push(this.wapindex7_cmsJsonpApi[j])
              }
              k++
              yyy = ttt[i] + 1
            }
            console.log(this.themes_info_arr, '233')
          })
          .catch((err1)=>{console.log(err1);})
      },
      // 获取猜你喜欢信息
      getGuessLikeInfo() {
        // 猜你喜欢
        // https://f.m.suning.com/api/getWapIndexProTag.do?u=7194426173&c=156913720153348882&cityCode=010&sceneIds=11-37&count=100&flag=1&channel=322&sceneIds2=11-37&count2=20&terminal=wap&callback=Zepto1570410027455
        let url2 = '/homeRecom/getWapIndexProTag.do?u=7194426173&c=156913720153348882&cityCode=010&sceneIds=11-37&count=100&flag=1&channel=322&sceneIds2=11-37&count2=20&terminal=wap&callback=Zepto' + this.test()
        axios.get(url2)
          .then((res2)=>{
            // 提取响应回来的json文件
            this.Zepto666 = JSON.parse(res2.data.slice(19,-2))
            this.guessYouLikeSkus = this.Zepto666.data.sugGoods[0].skus
          })
          .catch((err2)=>{console.log(err2);})
      },
      // 获取头条信息
      getToutiaoInfo() {
        // 头条
        let url3 = '/toutiao/getShjcsh.do?u=7194426173&c=156913720153348882&cityId=010&sceneIds1=10-61&sceneIds2=10-62&sceneIds3=10-69&sceneIds4=10-56&sceneIds5=10-57' +
          '&sceneIds6=15-35&sceneIds7=19-16&sceneIds8=12-62&sceneIds9=19-28&sceneIds10=19-38&sceneIds11=19-15&sceneIds13=9-63' +
          '&sceneIds14=13-50&sceneIds15=13-47&sceneIds16=13-71&sceneIds18=25-74&districtCode=0100100&scount=2&count=6&num10=3&date=1&_='+this.test() + '&callback=recPd'
        axios.get(url3)
          .then((res3)=>{
            // 提取响应回来的json文件
            this.toutiao_list = JSON.parse(res3.data.slice(6,-2))
            this.toutiao_list = this.toutiao_list.data8.sugGoods[0].skus
            for (let i = 0; i < (this.toutiao_list.length/2); i++) {
              this.toutiao_info_list[i] = {text_first: null, text_second: null, pic_url: null}
              this.toutiao_info_list[i].text_first = this.toutiao_list[2*i].title
              this.toutiao_info_list[i].pic_url = this.toutiao_list[2*i].imageUrl
              this.toutiao_info_list[i].text_second = this.toutiao_list[2*i+1].title
            }
            this.touTiaoDataReady = true
          })
          .catch((err3)=>{console.log(err3);})
      }
    },
    created() {
      // 获取轮播图及主题区信息
      this.getSwiperAndThemePartInfo()
      // 获取猜你喜欢信息
      this.getGuessLikeInfo()
      // 获取头条信息
      this.getToutiaoInfo()
    }

}
</script>
<style scoped>
  .scroll_view{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    bottom: 49px;
    background-color:rgb(242,242,242);
    overflow-y: auto;
  }
</style>
