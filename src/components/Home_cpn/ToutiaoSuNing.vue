<template>
  <div ref="toutiao" class="toutiao" v-if="touTiaoDataReady">

    <div class="hit" v-for="(item,index) in toutiao_info_list" :key="index" name="toutiao_item" v-show="lower_item === index || present_item === index">
      <img :src="'https://image1.suning.cn' + toutiao_logo" alt="" class="toutiao_logo">
      <div class="hit_desc">
        <p><span>热门</span>{{item.text_first}}</p>
        <p><span>热门</span>{{item.text_second}}</p>
      </div>
      <img :src="item.pic_url" alt="图片" class="hit_img">
    </div>

  </div>
</template>

<script>
export default {
  name: 'ToutiaoSuNing',
  data() {
    return {
        // 当前图片标志
      present_item: 0,
        // 头条上部图片标志
      upper_item: null,
        // 头条下部图片标志
      lower_item: 1,
        // 滚动定时器
      intervaltimer: null,
      // 轮播图列表
      list_collection: null,
      // 初始化标志
      isInitiated: false,
        // 元素高度
        eHight: 51,
        // 页面高度改变响应定时器
        iTimer: null,
        // 滚动启动标志
        animateActive: true
    }
  },
  props: {
      // 头条logo地址
      toutiao_logo: String,
      // 轮播图地址
    toutiao_info_list: Array,
      // 定时器时间
    swiper_time_set: {
      type: Number,
      default:5500
    },
      // 头条数据准备标志
      touTiaoDataReady: {
          type: Boolean,
          default() {
              return false
          }
      }
  },
  computed: {
    list_length() {
      return this.list_collection.length
    }
  },
  methods:{
    move() {
      if(this.$route.path !== '/') {
          return
      }
      this.list_collection[this.lower_item].setAttribute('style', 'top:0px');
      this.list_collection[this.present_item].setAttribute('style', 'top:-' + this.eHight + 'px');
      if (this.upper_item !== null) {
        this.list_collection[this.upper_item].setAttribute('style', 'top:' + this.eHight + 'px');
      }
      setTimeout(() => {
        this.upper_item = this.present_item;
        this.present_item = this.lower_item;
        if (this.lower_item === (this.list_length-1)) {
          this.lower_item = 0;
        }
        else {
          this.lower_item++;
        }
      },1150)

        if (!this.animateActive) {
            clearInterval(this.intervaltimer)
        }
    },
    autoplay(){
    this.intervaltimer = setInterval(() => {
      this.move();
    },this.swiper_time_set)
  },
    updateLists() {
      this.list_collection = document.getElementsByClassName('hit')
  }
  },
  mounted() {

      window.onresize = ()=>{
          this.animateActive = false
          if (this.iTimer !== null) {
              clearTimeout(this.iTimer)
          }
          this.iTimer = setTimeout(()=>{
              if (this.$refs.toutiao.clientHeight !== undefined) {
                  this.eHight = this.$refs.toutiao.clientHeight
                  console.log(this.eHight,'233')
                  this.animateActive = true
                  this.autoplay()
              }
          }, 2000)
      }
      this.updateLists()
    this.autoplay();
  }
}
</script>

<style scoped>
  .toutiao{
    width: 351px;
    height: 51px;
    margin: 2.5px auto;
    border-radius: 10px;
    background-color: white;
    overflow: hidden;
    position: relative;
  }
  .toutiao_logo {
    width: 33px;
    height: 33px;
    margin: 9px;
    float: left;
  }

  .hit{
    position: absolute;
    width: 100%;
    top: 51px;
    transition: all 1s ease;
    display: flex;
    flex-flow: row nowrap;
  }
  .hit:first-child {
    top: 0;
  }

  .hit_img{
    display: block;
    width: 51px;
    height: 51px;
    float: right;
  }

  .hit_desc{
    flex: 1;
    font-size: 12px;
    width: 220px;
    margin-right: 20px;
    line-height: 14px;
    padding-top: 10px;
  }

  .hit_desc span{

    margin-right:4px;
    margin-bottom: 6px;
    display: inline-block;
    width: 34px;
    height: 12px;
    background-color: rgb(255,121,13);
    text-align: center;
    line-height: 14px;
    border-radius:7px;
    color: white;
  }

</style>
