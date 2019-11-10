<template>
    <div class="ShopBanner_container">
      <img :src="item" alt="" class="ShopBannerImg" v-for="(item,index) in shopBannerList">
    </div>
</template>

<script>
    export default {
        name: "ShopBanner",
        props: {
            shopBannerList: {
                type: Array,
                default() {
                    return [require('@/assets/ShopUnit/shopBanner/商铺banner1.webp'),
                        require('@/assets/ShopUnit/shopBanner/商铺banner2.webp'),
                        require('@/assets/ShopUnit/shopBanner/商铺banner3.webp'),
                        require('@/assets/ShopUnit/shopBanner/商铺banner4.webp'),
                        require('@/assets/ShopUnit/shopBanner/商铺banner5.webp'),
                        require('@/assets/ShopUnit/shopBanner/商铺banner6.webp')];
                }
            }
        }
    }
</script>

<style scoped>
  .ShopBannerImg {
    width: 375px;
    display: block;
    margin: 0 auto;
  }

</style>
