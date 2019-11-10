<template>
    <div class="shopInfo_Promote_container">
      <div class="shopInfo_Promote_content">
        <!--        店铺链接-->
        <div class="shopInfo" @click="toShopHomePage">
          <div class="shopInfo_container">
<!--            <img :src="../../assets/Detail/店铺商标.jpg" alt="" class="shopLogo">-->
            <img :src="brandLogoUrl" alt="" class="shopLogo">
            <div class="shopName_reputation">
              <p class="shopname">{{shopName}}</p>
              <span>服务体验</span>
            </div>
            <span class="linkToShop">进店逛逛</span>
          </div>
          <div class="reputationDetail">
            <span class="comments">评价： <i class="ltLevel">8.40低</i></span>
            <span class="comments">物流： <i class="gtLevel">9.45高</i></span>
            <span class="comments">售后： <i class="ltLevel">8.10低</i></span>
          </div>
        </div>

        <div class="hit_goods_recommended">
          <div class="hit_goods_recommended_tittle">热销排行</div>
          <div class="hit_goods_recommended_scroll_area">
            <Detail_hit_recommended :recoms_block_info="recommends_info"></Detail_hit_recommended>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import  Detail_hit_recommended from '@/components/Detail_page/Detail_hit_recommended.vue'
    export default {
        name: "shopInfo_Promote",
        components: {
            Detail_hit_recommended
        },
        methods: {
            toShopHomePage() {
                this.$router.push('/shophomepage')
            }
        },
        props: {
            brandLogoUrl: String,
            shopName: String,
            recommends_info:{
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>

<style scoped>
  .shopInfo_Promote_container {
    width: 375px;
    margin: 10px auto 0;
    background-color: white;
  }
  .hit_goods_recommended {
    padding: 0 12px;
  }
  .hit_goods_recommended_tittle {
    text-align: left;
    padding: 10px 0;
  }
  /*店铺链接*/
  .shopInfo {
    width: 100%;
    padding: 12px 0px;
    text-align: left;
    border-bottom: 1px solid rgb(242,242,242);
  }
  .shopInfo_container {
    display: flex;
    padding: 3px;
  }
  .shopLogo {
    width: 60px;
    margin-left: 12px;
    display: block;
  }
  .shopName_reputation {
    flex: 1;
    margin: 15px 0 0 10px;
  }
  .shopname {
    font-weight: bold
  }
  .linkToShop {
    background: linear-gradient(90deg, #ff8f00, #f50);
    display: inline-block;
    width: 72px;
    height: 27px;
    border-radius: 13px;
    color: white;
    line-height: 27px;
    text-align: center;
    margin-top: 15px;
    margin-right: 12px;
  }
  .reputationDetail {
    display: flex;
    justify-content: space-evenly;
    color: #999999;
  }
  .ltLevel {
    color: green
  }
  .gtLevel {
    color: red;
  }
</style>
