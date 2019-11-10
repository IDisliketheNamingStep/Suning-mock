<template>
  <div v-if="bannerReady" id="swiper_outer" class="swiper_outer" ref="bannerImg">
      <img :style="'left: ' + (screenWidth? screenWidth : 0) + 'px'" @load="updateLists" v-for="(item,index) in swiper_pic_list" :key="index" :src="'https://image1.suning.cn' + item.picUrl + '?format=_is_1242w_610h'" alt="" name="swiper_banner_pic" class="swiper_banner_pic" v-show="right_pic===index ||present_pic ===index">
      <ul>
        <li :class="{dot:true, active_dot:present_pic === index}" v-for="(item,index) in swiper_pic_list" :key="index"></li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'SwiperCpn',
  data () {
    return {
        // 当前图片标志
      present_pic: 0,
        // 左边图片标志
      left_pic: null,
        // 右边图片标志
      right_pic: 1,
        // 定时器名字
      intervaltimer: null,
        // 轮播图列表
      list_collection: null,
        // 初始化标志
        isInitiated: false,
        // 页面宽度
        screenWidth: null,
        // 页面宽度改变响应定时器
        iTimer: null
    }
  },
  computed: {
    list_length () {
      return this.list_collection.length
    }
  },
  props: {
    // 轮播图地址数组
    swiper_pic_list: {
      type: Array,
      default() {
        return []
      }
    },
    // 定时器时间
    swiper_time_set: {
      type: Number,
      default: 5500
    },
    // 数据准备就绪
    bannerReady:{
        type: Boolean,
        default() {
            return false
        }
    }
  },

  methods: {
    move () {
      if(this.$route.path !== '/') {
          return
      }
      this.list_collection[this.right_pic].setAttribute('style', 'left:0;')
      this.list_collection[this.present_pic].setAttribute('style', 'left:-' + this.screenWidth + 'px')
      if (this.left_pic !== null) {
        this.list_collection[this.left_pic].setAttribute('style', 'left:' + this.screenWidth + 'px')
      }
      console.log('left:0;', 'left:-' + this.screenWidth + 'px', 'left:' + this.screenWidth + 'px')
      setTimeout(() => {
        this.left_pic = this.present_pic
        this.present_pic = this.right_pic
        if (this.right_pic === (this.list_length - 1)) {
          this.right_pic = 0
        } else {
          this.right_pic++
        }
      }, 1501)
    },

    autoplay () {
      this.intervaltimer = setInterval(() => {
        this.move()
      }, this.swiper_time_set)
    },
      updateLists() {
          this.list_collection = document.getElementsByName('swiper_banner_pic')
      }
  },

  mounted () {
      if (this.screenWidth === null) {
          this.screenWidth = this.$refs.bannerImg.clientWidth
          console.log(this.screenWidth, '211')
      }
      window.onresize = ()=>{
          console.log('我是swiper啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦啦')
          clearInterval(this.intervaltimer)
          if (this.iTimer !== null) {
              clearTimeout(this.iTimer)
          }
          console.log('333333333333333')
          this.iTimer = setTimeout(()=>{
                // this.screenWidth = this.list_collection[0].clientWidth
                this.screenWidth = this.$refs.bannerImg.clientWidth
                console.log(this.screenWidth, '555', this.$refs.bannerImg.clientWidth)
              this.autoplay()
          }, 2000)
      }
    this.autoplay()
  }

}
</script>
<style scoped>
  .swiper_outer{
    position: relative;
    width: 375px;
    height:155px;
    display: flex;
    flex-flow: row wrap;
    overflow: hidden;
    margin:auto;
  }
  .swiper_banner_pic{
    width: 375px;
    height:155px;
    display: block;
    transition: all 1.8s ease;
    position: absolute;
    /*left: 375px;*/
  }
  .swiper_banner_pic:first-child {
    /*left: 0;*/
  }

  .swiper_outer ul{
    position: absolute;
    display: block;
    width: 100%;
    top: 130px;
  }
  .dot{
    display: inline-block;
    width: 6px;
    height: 4px;
    background-color: #cccccc;
    border-radius: 2px;
    margin: 0 3px;
  }
  .active_dot{
    background-color: white;
  }

</style>
