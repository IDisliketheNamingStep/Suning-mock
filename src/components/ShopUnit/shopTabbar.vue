<template>
  <div class="shopTabbar_container">
    <div class="shoptabbar_content">
      <div class="quarter_area">
        <img src="../../assets/ShopUnit/tabbar/店铺tabbar1.png" alt="" class="shopLogo">
      </div>
      <div class="quarter_area">
<!--        <img src="../../assets/ShopUnit/icon_list.png" alt="" class="routeImg">-->
        <div class="routeImg"></div>
        <p class="routeText">全部商品</p>
      </div>
      <div class="quarter_area">
<!--        <img src="../../assets/ShopUnit/icon_list.png" alt="" class="routeImg">-->
        <div class="routeImg"></div>
        <p class="routeText">店铺榴莲</p>
      </div>
      <div class="quarter_area">
<!--        <img src="../../assets/ShopUnit/icon_list.png" alt="" class="routeImg">-->
        <div class="routeImg"></div>
        <p class="routeText">商铺分类</p>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "shopTabbar"
    }
</script>

<style scoped>
  .shoptabbar_content {
    position: fixed;
    height: 49px;
    width: 375px;
    margin: 0 auto;
    bottom: 0;
    /*background-color: red;*/
    display: flex;
    flex-flow: row nowrap;

  }
  .quarter_area {
    flex: 1;
    text-align: center;
  }
  .quarter_area:first-child img {
    width: 42px;
    display: block;
    margin: 4px auto 0;
  }
  .routeImg {
    width: 28px;
    height: 28px;
    margin: 3px auto 0;
    /*display: inline-block;*/
    background: url("../../assets/ShopUnit/icon_list.png") -10px -328px no-repeat;
    background-size: 50px auto;
  }
  .quarter_area:nth-child(2) .routeImg {
    background: url("../../assets/ShopUnit/icon_list.png") -10px -386px no-repeat;
    background-size: 50px auto;
  }
  .quarter_area:nth-child(4) .routeImg {
    background: url("../../assets/ShopUnit/icon_list.png") -10px -279px no-repeat;
    background-size: 50px auto;
  }
  .routeText {
    text-align: center;
  }
</style>
