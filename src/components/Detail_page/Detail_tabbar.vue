<template>
    <div class="Detail_tabbar_container">
      <div class="detailpage_tabbar">
        <img src="../../assets/Detail/详情页客服.png" alt="">
        <img src="../../assets/Detail/详情页购物车.png" alt="" @click="route_to_chart">
        <div>
          <span class="buy_now">立即购买</span>
          <span class="add_to_chart" @click="addToChart">加入购物车</span>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "Detail_tabbar",
        methods: {
            route_to_chart() {
                this.$router.push('/chart')
            },
            addToChart() {
                this.$emit('addToChart')
            }
        }
    }
</script>

<style scoped>
  /*底部tabbar*/
  .detailpage_tabbar {
    position: absolute;
    bottom: 0;
    height: 48px;
    border-top: 1px solid rgb(242,242,242);
    width: 375px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
  }
  .detailpage_tabbar img {
    width: 51px;
    height: 50px;
    display: block;
  }
  .buy_now, .add_to_chart {
    font-size: 14px;
    color: white;
    font-weight: bold;
    display: inline-block;
    width: 95px;
    height: 36px;
    line-height: 36px;
    margin-top: 6px;
  }
  .buy_now {
    background: linear-gradient(90deg,#ffd000,#ff9200);
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-right: 3px;
  }
  .add_to_chart {
    background: linear-gradient(90deg,#ff8e00,#f50 97%);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

</style>
