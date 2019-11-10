<template>
    <div class="WarningTips_container">
      <div class="content">
        <div class="tittleLine">
          <span class="tittle">温馨提示</span>
          <span class="arrowForMore">查看全部</span>
        </div>
        <span class="text">国家药监局提示您：请正确认识化妆品功效，化妆品不能替代药品，不能治疗皮肤病等疾病。</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "WarningTips"
    }
</script>

<style scoped>
  .WarningTips_container {
    width: 100%;
    background-color: white;
  }
  .content {
    text-align: left;
    margin: 10px 12px;
  }
  .tittleLine {
  }
  .tittle {
    font-weight: bold;
    margin: 10px 0;
    display: inline-block;
  }
  .arrowForMore {
    margin-top: 10px;
    float: right;
    color: #999999;
    padding-right: 15px;
    background: url("../../assets/Detail/查看全部左箭头.png") 50px 0px no-repeat;
    background-size: 15px;
  }
  .text {
    display: inline-block;
    line-height: 18px;
    font-size: 13px;
    padding-bottom: 15px;
  }

</style>
