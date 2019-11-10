<template>
  <div class="recommended_item_container" @click="toGoodsDetail">

    <!--    设置商品图片宽度-->
    <img v-lazy="recommended_item_info.adSrc || (recommended_item_info.pictureUrl + '?format=_is_400w_400h.webp') || recommended_item_info.pictureUrl " alt="" class="goodd_thumbnail" :style="goodThumbnailImg_style">

    <!--    设置文字区宽度-->
    <div class="good_item_arrangement" :style="textPrice_style">
      <div class="good_text">

        <!--        设置是否显示店铺类型（自营、苏宁国际）-->
        <i :class="{self_management_shop: recommended_item_info.shopCode === '0000000000', oversea_goods: recommended_item_info.shopCode === '0070140720'}" v-if="(recommended_item_info.shopCode === '0000000000') || (recommended_item_info.shopCode === '0070140720') ">&nbsp;</i>
        {{recommended_item_info.sugGoodsName}}
      </div>
      <div class="promote_price">

        <!--        设置是否显示限时促销信息-->
        <span class="promotion_info" v-for="(promoteinfo,index) in recommended_item_info.promotionList" :key="index" v-if="promotionShowMark">{{promoteinfo.simple}}</span>
        <div class="good_price">
          <span :style="price_style">￥{{recommended_item_info.price}}</span>

          <!--          设置加入购物车图标只在购物车路由下显示-->
          <img @click.stop="addToChart" src="../../assets/chart/addCart.png" alt="" class="addChartImg" v-if="this.$route.path === '/chart'">
        </div>
      </div>
      <div class="userCommentsInfo" v-if="userCommentsInfoShowMark">
        <div class="comInfo">1.9万+评价 99%好评</div>
        <div class="chartImg" ></div>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "RecommendedItem",
        data() {
            return {
                // 商品名及价格
                good_datail_info: null
            }
        },
        props:{
            textPrice_style: {
                type:String,
                default() {
                    return 'width: 149px'
                }
            },
            goodThumbnailImg_style: {
                type: String,
                default() {
                    return 'width: 149px'
                }
            },
            doShowShopType: {
                type: Boolean,
                default() {
                    return false
                }
            },
            good_img_width: {
                type:String,

            },
            promotionShowMark: {
                type:Boolean,
                default() {
                    return true
                }
            },
            RecomItemComStyle: {
              type: String,
              default() {
                  return ''
              }
            },
            price_style: {
                type: String,
                default() {
                    return ''
                }
            },
            userCommentsInfoShowMark: {
              type:Boolean,
              default() {
                  return false
              }
            },
            detail_page_style: false,
            recommended_item_info:{
                type:Object,
                default(){
                    return {}
                }
            }
        },
        methods: {
            timeStampTest() {
                return new Date().getTime()
            },
            toGoodsDetail() {
                this.$router.push({path: '/good_detail',
                query: {sugGoodsCode: this.recommended_item_info.sugGoodsCode,
                    vendorId: this.recommended_item_info.vendorId,
                    shopCode: this.recommended_item_info.shopCode,
                    catGroupId: this.recommended_item_info.catGroupId}
                })
            },
            addToChart() {
                this.getInfoCreated()
            },
            getInfoCreated() {
                // 商品名及价格good_datail_info: null,// 价格整数intF: null,// 价格小数floatB: null,
                let url1 = '/gdetail/nsenitemsale_' + this.recommended_item_info.sugGoodsCode + '_' + this.recommended_item_info.vendorId + '_5_999_10_010_0100100______1000000_.html?_=' +this.timeStampTest() + +'&callback=wapData'
                axios.get(url1)
                    .then((res1)=>{
                        // 提取响应回来的json文件
                        this.good_datail_info = JSON.parse(res1.data.slice(8,-2))
                        this.good_datail_info = this.good_datail_info.data
                        this.$store.commit('addToChart', {good_datail_info: this.good_datail_info, shopCode: this.recommended_item_info.shopCode, sugGoodsCode: this.recommended_item_info.sugGoodsCode})
                    })
                    .catch((err1)=>{console.log(err1);})
            },
        }
    }
</script>

<style scoped>
  .addChartImg {
    display: block;
    width: 19px;
    height: 20px;
    float: right;
  }
  .recommended_item_container{
    background-color: white;
    border-radius: 10px;
    margin-bottom: 7px;
    overflow: hidden;
  }
  .good_item_arrangement {
    width: 149px;
    margin: 0 auto;
    padding: 12px;
  }
  .detail_style {
    width: 110px;
    margin: 12px 10px 12px 0;

  }

  .goodd_thumbnail{
    width: 149px;
    margin: 0 auto;
    display: block;
  }

  .good_text{
    height: 34px;
    font-size: 12px;
    line-height: 17px;
    margin: 0 auto;
    color: #333333;
    text-align: left;
    /*多出两行的文字省略====------*/
    word-break:break-all;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /*多出两行的文字省略====------*/
  }
  .oversea_goods{
    width: 78px;
    height: 15px;
    background: url("../../assets/demo_pic/purchase_from_oversea.png") 0px 0px no-repeat;
    background-size: 100% 100%;
    display: inline-block;
  }

  .self_management_shop{
    width: 32px;
    height: 15px;
    background: url("../../assets/demo_pic/self_management_icon.png") 0px 0px no-repeat;
    background-size: 100% 100%;
    display: inline-block;
  }

  .promote_price{
    margin: 8px auto;
    text-align: left;
  }
  .promotion_info{
    color: #F50;
    font-size: 12px;
    line-height: 12px;
    padding: 0 3px;
    margin: 0 2px;
    background-color: rgba(255,85,0,0.05);
    border: 1px solid #F50;
    border-radius: 8px;
  }

  .good_price{
    font-size: 16px;
    margin: 9px 0 11px;
    color: #ff4400;
  }
  .userCommentsInfo {
    margin: -11px 0 30px;
  }
  .comInfo {
    float: left;
    color: #999999;
  }
  .chartImg {
    float:right;
    width: 25px;
    height: 25px;
    background: url("../../assets/ShopUnit/icon_cart_1.png") 0px 0px no-repeat;
    background-size: 100%;
  }


</style>
