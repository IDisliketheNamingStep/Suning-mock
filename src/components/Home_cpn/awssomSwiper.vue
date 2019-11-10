<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide  v-for="(item,index) in swiper_pic_list" :key="index"><img :src="'https://image1.suning.cn' + item.picUrl + '?format=_is_1242w_610h'" alt="" class="swiper_banner_pic"></swiper-slide>
    </swiper>
  </div>
</template>

<script>
    export default {
        name: "awssomSwiper",
        data() {
            return {
                swiperOption: {
                    autoplay: {
                        disableOnInteraction: false,
                        delay:4500
                    },
                    speed: 1800,
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
        }
    }
</script>

<style scoped>
  div {
    width: 375px;
    margin: 0 auto;
  }
  .swiper_banner_pic {
    width: 100%;
    height: 155px;
    display: block;
  }

</style>
