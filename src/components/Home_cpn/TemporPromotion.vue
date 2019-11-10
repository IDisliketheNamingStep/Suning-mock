<template>
  <div class="tempor_promotion">
    <div class="content">
      <div class="imgbox" v-for="(item,index) in img_zdy" :key="index">
        <img  :src="'https://image1.suning.cn' + item.picUrl" alt="" style="display: block">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TemporPromotion",
        props: {
            img_zdy: {
                type:Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
  .tempor_promotion {
    width: 375px;
    margin: 0 auto;
  }
  .content {
    width: 375px;
    display: flex;
    flex-flow: row nowrap;
  }
  .imgbox {
    flex: 1;
  }
  .imgbox img{
    width: 100%;
  }

</style>
