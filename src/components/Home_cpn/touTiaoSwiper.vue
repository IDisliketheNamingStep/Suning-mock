<template>
  <div class="toutiao">
    <swiper class="hit" v-if="toutiao_info_list.length > 0" :options="swiperOption" ref="mySwiper">
      <swiper-slide  v-for="(item,index) in toutiao_info_list" :key="index">
        <img :src="'https://image1.suning.cn' + toutiao_logo" alt="" class="toutiao_logo">
        <div class="hit_desc">
          <p><span>热门</span>{{item.text_first}}</p>
          <p><span>热门</span>{{item.text_second}}</p>
        </div>
        <img :src="item.pic_url" alt="图片" class="hit_img">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "touTiaoSwiper",
        data() {
            return {
                swiperOption: {
                    autoplay: {
                        disableOnInteraction: false,
                        delay:4500
                    },
                    speed: 1000,
                    loop: true,
                    direction: 'vertical'
                }
            }
        },
        props: {
            // 头条logo地址
            toutiao_logo: String,
            // 轮播图地址
            toutiao_info_list: Array,
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
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
  .hit {
    height: 51px;
  }

  .toutiao_logo {
    width: 33px;
    height: 33px;
    margin: 9px;
    float: left;
  }

  .hit_img{
    display: block;
    width: 51px;
    height: 51px;
    float: right;
  }

  .hit_desc{
    float: left;
    /*flex: 1;*/
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
