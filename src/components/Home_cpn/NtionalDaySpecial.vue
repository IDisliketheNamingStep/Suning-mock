<template>
    <div class="NtionalDaySpecial">
      <img src="../../assets/NtionalDaySpecial/nds_h1.png" alt="" width="100%" class="fl">
      <img src="../../assets/NtionalDaySpecial/nds_m1.webp" alt="" width="50%" class="fl">
      <img src="../../assets/NtionalDaySpecial/nds_m2.webp" alt="" width="50%" class="fl">
      <img src="../../assets/NtionalDaySpecial/nds_l1.webp" alt="" width="25%" height="150px" class="fl">
      <img src="../../assets/NtionalDaySpecial/nds_l2.webp" alt="" width="25%" height="150px" class="fl">
      <img src="../../assets/NtionalDaySpecial/nds_l3.webp" alt="" width="25%" height="150px" class="fl">
      <img src="../../assets/NtionalDaySpecial/nds_l4.webp" alt="" width="25%" height="150px" class="fl">
      <img src="../../assets/NtionalDaySpecial/nds_ll1.webp" alt="" width="100%" class="fl">
      <div class="l4_items">
        <div class="l4_item">
          <img src="../../assets/NtionalDaySpecial/nds_l1_go.webp" alt="">
          <p>手机通讯</p>
          <span>爆款五折起</span>
        </div>
        <div class="l4_item">
          <img src="../../assets/NtionalDaySpecial/nds_l2_go.webp" alt="">
          <p>家纺鞋包</p>
          <span>满200减20</span>
        </div>
        <div class="l4_item">
          <img src="../../assets/NtionalDaySpecial/nds_l3_go.webp" alt="">
          <p>休闲零食</p>
          <span>满199减120</span>
        </div>
        <div class="l4_item">
          <img src="../../assets/NtionalDaySpecial/nds_l4_go.webp" alt="">
          <p>空调家装节</p>
          <span>套购省1300</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "NtionalDaySpecial"




    }
</script>

<style scoped>
  .NtionalDaySpecial{
    position: relative;
    width: 375px;
  }
  .l4_items{
    position: absolute;
    top: 115px;
    left: 0;
    width: 100%;
    color: white;
    display: flex;
    justify-content: center;
    /*margin-top: 5px;*/
  }
  .l4_item{
    width: 25%;
    height: 150px;
    flex: 1;
    float: left;
  }

  .l4_item p{
    font-size: 13px;
    text-align: center;
  }
  .l4_item span{
    font-size: 12px;
    text-align: center;
  }

  .l4_item img{
    display: block;
    margin: 0 auto 20px;
    width: 70px;
    height: 70px;
  }

</style>
