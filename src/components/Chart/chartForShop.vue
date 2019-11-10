<template>
    <div>
      <div>
        <!--        店铺信息展示区-->
        <div class="shop_name_zone clearfix">
          <span :class="{isSelected:true, isSelectedActive: selectedActive}" @click.stop="toggleSelected" ></span>
          <div class="shop_info">
            <img src="../../assets/chart/购物车店铺图标.png" alt="" class="shop_icon">
            <span class="shop_name" >{{shopName}}</span>
          </div>
          <span class="has_coupon">领优惠券</span>
        </div>
        <Chart_of_ordinary v-for="(item, index) of chartOfShop" :key="index"  :goodInfo="item"></Chart_of_ordinary>

      </div>
    </div>
</template>

<script>
    import Chart_of_ordinary from '@/components/Chart/Chart_of_ordinary.vue'

    export default {
        name: "chartForShop",
        data() {
            return {
                // 店铺名
               shopName: null,
                // 店铺码
                shopCode: null
            }
        },
        computed: {
            // 店铺选中标志
            selectedActive() {
                return this.$store.state.chartShopAllList[this.shopCode]
            }
        },
        components: {
            Chart_of_ordinary
        },
        props: {
            chartOfShop: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            toggleSelected() {
                this.$store.commit('chartShopAll', {shopCode: this.shopCode})
            }
        },
        mounted() {
            // 获取店铺名字
            for (let i in this.chartOfShop) {
                if (this.shopName === null) {
                    this.shopName = this.chartOfShop[i].gInfo.data1.data.shopName || this.chartOfShop[i].gInfo.data1.data.brandName
                }
                if (this.shopCode === null) {
                    this.shopCode = this.chartOfShop[i].gInfo.popLabel && (this.chartOfShop[i].gInfo.popLabel[0].supplierCode || '0000000000')
                }

            }
        }
    }
</script>

<style scoped>
  .clearfix:before, .clearfix:after {
    content: '';
    display: table;
  }
  .clearfix:after {
    clear: both;
  }
  /*商品名称区域*/
  .shop_name_zone {
    background-color: white;
    padding: 14px 5px;
    margin: 16px 0px;
  }
  .isSelected, .shop_info, .good_img_area {
    float: left;
  }
  .has_coupon {
    float: right;
    font-size: 14px;
    color: #ff6600;
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
  .shop_icon {
    display: block;
    width: 14px;
    height: 14px;
    float: left;
    margin: 2px 10px 0 0;
  }
</style>
