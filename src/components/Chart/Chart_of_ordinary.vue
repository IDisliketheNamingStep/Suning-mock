<template>
  <div class="Chart_of_ordinary">
    <div class="show_area">

      <!--        单个商品展示区-->
      <div class="one_good">
        <!--        促销信息-->
<!--        <div class="promotion_ads clearfix" >-->
<!--          <span class="promotion_type">满减</span>-->
<!--          <span class="promotion_desc" >满3件打7折，最多可减600元</span>-->
<!--          <span class="promotion_link" >去凑单</span>-->
<!--        </div>-->
        <!--        商品展示区-->
        <div class="goods_display_area" @click="toGoodsDetail">
          <span :class="{isSelected:true, isSelectedActive: selectedActive}" @click.stop="toggleSelected"></span>
          <div class="good_img_area">
            <img :src="goodInfo.gInfo.data1.data.mainPictureList[0].domain + goodInfo.gInfo.data1.data.mainPictureList[0].pictureUrl" alt="" class="good_img">
            <img src="" alt="" class="pop_img">
          </div>
          <div class="goods_desc_area">
            <p class="good_name">{{goodInfo.gInfo.data1.data.itemInfoVo.itemDisplayName}}</p>
<!--            <p class="good_attr">眼影盘:摩登时刻#橄榄盘</p>-->
            <div class="price_count">
              <p class="good_price">{{goodInfo.gInfo.price.saleInfo[0].promotionPrice}}</p>
              <div class="good_count">
                <span :class="{countLtOne: goodInfo.count === 1}" @click.stop="dcre_good_count">－</span>
                <input @click.stop="" type="text" v-model="goodInfo.count" @change="input_change_good_count($event)">
                <span @click.stop="add_good_count">＋</span>
              </div>
            </div>
          </div>
        </div>
        <!--额外服务及礼券-->
<!--        <div class="additional_service_container" >-->
<!--          <span class="additional_service_link">购买服务</span>-->
<!--          <p>-->
<!--            <span style="">赠品</span>-->
<!--            <span class="coupon_info" >【礼劵】蟹霸仙 大闸蟹券 2888型 公：4.0两 母：3.0两 4对装 螃蟹劵 海鲜水产</span>-->
<!--            <span class="coupon_count_info">×2</span>-->
<!--          </p>-->
<!--        </div>-->

      </div>

    </div>

  </div>
</template>

<script>
    export default {
        name: "Chart_of_ordinary",
        data(){
            return {
                good_count: 1,
            }
        },
        computed: {
            selectedActive() {
                return this.$store.state.chartActiveList[this.goodInfo.sugGoodsCode]
            }
        },
        props: {
            goodInfo: Object
        },
        methods: {
            input_change_good_count(event) {
                if (event.target.value < 1) {
                    this.$store.commit('inputChangeGoodCount', {shopCode: (this.goodInfo.gInfo.popLabel[0].supplierCode || '0000000000'), sugGoodsCode:this.goodInfo.sugGoodsCode, count: 1})
                    return
                }
                this.$store.commit('inputChangeGoodCount', {shopCode: (this.goodInfo.gInfo.popLabel[0].supplierCode || '0000000000'), sugGoodsCode:this.goodInfo.sugGoodsCode, count: event.target.value})
            },
            dcre_good_count() {
                if (this.goodInfo.count === 1) {
                    return
                }
                this.$store.commit('decFromChart', {sugGoodsCode:this.goodInfo.sugGoodsCode, shopCode: (this.goodInfo.gInfo.popLabel[0].supplierCode || '0000000000')})
                if (this.$store.state.chartActiveList[this.goodInfo.sugGoodsCode]) {
                    this.$store.commit('addChartActiveList', {sugGoodsCode: this.goodInfo.sugGoodsCode, count: -1})
                }
            },
            add_good_count() {
                this.$store.commit('addToChart', {good_datail_info:this.goodInfo.gInfo, shopCode: (this.goodInfo.gInfo.popLabel[0].supplierCode || '0000000000'), sugGoodsCode:this.goodInfo.sugGoodsCode})
                if (this.$store.state.chartActiveList[this.goodInfo.sugGoodsCode]) {
                    this.$store.commit('addChartActiveList', {sugGoodsCode: this.goodInfo.sugGoodsCode, count: 1})
                }
            },
            toggleSelected() {
                if (this.$store.state.chartActiveList[this.goodInfo.sugGoodsCode]) {
                    this.$store.commit('removeFromChartActiveList', {sugGoodsCode: this.goodInfo.sugGoodsCode, shopCode: this.goodInfo.gInfo.popLabel && (this.goodInfo.gInfo.popLabel[0].supplierCode || '0000000000')})
                }
                else {
                    this.$store.commit('addChartActiveList', {sugGoodsCode: this.goodInfo.sugGoodsCode, count: this.goodInfo.count, price: this.goodInfo.gInfo.price.saleInfo[0].promotionPrice, shopCode: this.goodInfo.gInfo.popLabel && (this.goodInfo.gInfo.popLabel[0].supplierCode || '0000000000')})
                }
            },
            toGoodsDetail() {
                this.$router.push({path: '/good_detail',
                    query: {
                        sugGoodsCode: this.goodInfo.sugGoodsCode,
                        vendorId: this.goodInfo.gInfo.price.saleInfo[0].vendorCode,
                        shopCode: this.goodInfo.gInfo.popLabel && (this.goodInfo.gInfo.popLabel[0].supplierCode || '0000000000'),
                        catGroupId: this.goodInfo.gInfo.data1.data.itemInfoVo.categoryCode,
                    }
                })
            }
        }
    }
</script>

<style scoped>
  .additional_service_container {
   margin: 0 10px 16px;
    text-align: left;
  }
  .additional_service_link {
    padding: 3px 24px;
    border: 1px solid #999999;
    margin-bottom: 10px;
    display: inline-block;
    border-radius: 3px;
  }
  .coupon_info {
    color: #999999;
    width: 270px;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .coupon_count_info {
   float: right;
  }

  span {
    vertical-align: top;
  }
  .Chart_of_ordinary {
    background-color: rgb(248,248,248);
  }


  /*商品名称区域*/
  .isSelected, .shop_info, .good_img_area {
    float: left;
  }

  .isSelected {
    width: 15px;
    height: 15px;
    margin: 0px 15px 0 0;
    border-radius: 50%;
    border: 1px solid rgb(220,220,220);
    background: url("../../assets/chart/购物车对勾图标.png") 0px 3px no-repeat;
    background-size: 100%;
  }
  .isSelectedActive {
    background: url("../../assets/chart/购物车对勾图标.png") 0px 3px no-repeat #ff6600;
    background-size: 100%;
  }

  /*单个商品区间*/
  .one_good {
    border-bottom: 2px solid rgb(240,240,240);
    margin-top: 10px;
  }
  /*商品展示区域*/
  .goods_display_area {
    padding: 0 5px 0px;
    background-color: rgb(248,248,248);
    display: flex;
    margin-bottom: 12px
  }
/*商品图*/
  .good_img_area {
    width: 110px;
    height: 112px;
    border: 1px solid rgb(216,216,216);
    margin-right: 10px;
    position: relative;
  }
  .good_img {
    width: 100%;
  }
  .pop_img {
    position: absolute;
    top: 0;
    right: 0;
    width: 33px;
    height: 33px;
  }
  /*商品描述*/
  .goods_desc_area {
    height: 148px;
    width: 220px;
    display: block;
    position: relative;
  }
  .good_name, .good_attr {
    font-size: 13px;
    color: #333333;
    padding-right: 10px;
    white-space: pre-wrap;
    line-height: 19px;

    /*多出两行的文字省略====------*/
    word-break:break-all;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /*多出两行的文字省略====------*/
  }
  .good_attr {
    color: #999999;
    line-height: 15px;
  }
/*商品价格*/
  .price_count {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  .good_price {
    font-size: 13px;
    color: #ff6600;
    float: left;
  }
  .good_price:before{
    content: '￥';
  }

  /*加入购物车数量*/
  .good_count {
    float: right;

  }
  .good_count *{
    font-size: 12px;
  }
  .good_count span {
    display: inline-block;
    width: 28px;
    height: 18px;
    border: 1px solid rgb(216,216,216);
    background-color: rgb(245,245,245);
  }
  .countLtOne {
    color: rgb(220,220,220);
  }
  .good_count input {
    width: 40px;
    height: 18px;
    border: 1px solid rgb(216,216,216);
    text-align: center;
  }
/*促销信息*/
  .promotion_ads {
    margin: 0 5px 10px 35px;
  }
  .promotion_type, .promotion_desc {
    float: left;
  }
  .promotion_type, .promotion_desc, .promotion_link{
    line-height: 12px;
    padding: 2px 3px;
  }
  .promotion_type {
    color: white;
    background-color: #ff6600;
    margin-right: 8px;
    border-radius: 3px;
  }
  .promotion_desc {
    color: #909090;
  }
  .promotion_link {
    color: #ff6600;
    float: right;
  }


</style>
