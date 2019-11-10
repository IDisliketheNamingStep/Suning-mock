<template>
<!--  <div class="good_pic_swiper_box">-->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide  v-for="(item,index) in swiper_pic_list" :key="index">
        <img class="good_pic_swiper_img" :src="item.domain + item.pictureUrl" alt="">
      </swiper-slide>
    </swiper>
<!--    <img class="good_pic_swiper_img" v-for="(item, index) in (good_datail_info && good_datail_info.data1 && good_datail_info.data1.data.mainPictureList)" :key="index" :src="item.domain + item.pictureUrl" alt="">-->
<!--  </div>-->
<!--  <div>-->
<!--    <swiper :options="swiperOption" ref="mySwiper">-->
<!--      <swiper-slide  v-for="(item,index) in swiper_pic_list" :key="index"><img :src="'https://image1.suning.cn' + item.picUrl + '?format=_is_1242w_610h'" alt="" class="swiper_banner_pic"></swiper-slide>-->
<!--    </swiper>-->
<!--  </div>-->
</template>

<script>
    export default {
        name: "DetailBannerSwiper",
        data() {
            return {
                swiperOption: {
                    autoplay: false,
                    speed: 800,
                    loop: true
                }
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
        },
        computed: {
            swiper() {
                return (this.$refs.mySwiper && this.$refs.mySwiper.swiper)
            }
        },
        mounted() {
            setTimeout(()=>{
                // this.swiper.slideTo(1, 1000, false)
            }, 1000)
        }
    }
</script>

<style scoped>
  /*div {*/
  /*  width: 375px;*/
  /*  margin: 0 auto;*/
  /*}*/
  /*.swiper_banner_pic {*/
  /*  width: 100%;*/
  /*  height: 155px;*/
  /*  display: block;*/
  /*}*/
  /*.good_pic_swiper_box {*/
  /*  height: 375px;*/
  /*  background-color: white;*/
  /*  display: flex;*/
  /*  flex-flow: row nowrap;*/
  /*}*/
  .good_pic_swiper_img {
    display: block;
    width: 375px;
    height: 375px;
  }

</style>

