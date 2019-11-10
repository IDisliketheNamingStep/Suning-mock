<template>
    <div class="Delivery_info_cpn_container">
      <div class="cell_unit_container coupon_cell_unit">
        <div class="forth_cell">
          <div class="cell_name">送至</div>

          <div class="cell_middle">
            <div class="middle_first_line">
              <div class="cell_text"><span v-if="1" :class="{coupon_score_not_oversea:false, addr_icon:true}">&nbsp;</span>北京 东城区</div>
              <div class="fr_text"></div>
            </div>

            <div class="discount_list_containner">
              <div :class="{delivery_predict:true}"><span :class="{discount_type:false, aboutDelivery:true}">现货</span>， 23:00前下单，预计明天（9月28日）送达</div>
            </div>
          </div>

          <div class="arrow_for_more"></div>
        </div>


        <div class="cell_unit_container">

          <div class="forth_cell  pay_methods">
            <div class="cell_name">付款支持</div>

            <div class="cell_middle">
              <div class="middle_first_line">
                <div class="cell_text"><span v-if="0" :class="{coupon_score_not_oversea:true}">&nbsp;</span>易付宝 支付宝</div>
              </div>
            </div>

            <div class="arrow_for_more"></div>
          </div>

        </div>
        <!--===========================发货承诺================================-->
        <div class="cell_unit_container delivery_promises_transitcolor">

          <div class="forth_cell  pay_methods">

            <div class="cell_middle delivery_promises_depadding">
              <div class="delivery_promise"><span class="promise_given">&nbsp;</span>苏宁发货</div>
              <div class="delivery_promise"><span class="promise_given">&nbsp;</span>半日达</div>
              <div class="delivery_promise"><span class="promise_given">&nbsp;</span>运费5元,满86元免运费</div>
              <div class="delivery_promise"><span class="promise_given">&nbsp;</span>商品保管说明</div>
              <div class="delivery_promise"><span class="promise_denied">&nbsp;</span>不支持无理由退款</div>
            </div>

            <div class="arrow_for_more"></div>
          </div>

        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "Delivery_info_cpn"
    }
</script>

<style scoped>
  /*产品价格*/
  .cell_unit_container, .product_main_container{
    width: 375px;
    background-color: white;
    margin-bottom: 8px;
  }
  /*商品关键信息*/
  .product_main_content, .forth_cell{
    width: 351px;
    margin: 0 auto;
  }

  /*信息区间cell*/
  .forth_cell {
    font-size: 13px;
    padding: 10px 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
  }
  .cell_name {
    color: #999999;
  }

  .cell_middle {
    flex: 1;
    color: #333333;
    padding-left: 15px;
  }
  .cell_text {
    float: left;
    font-size: 13px;
  }
  .fr_text {
    color: #999999;
    float: right;
    margin-right: 8px;
  }
  .arrow_for_more {
    width: 20px;
    height: 20px;
    background: url("../../assets/Detail/detail_arrow.png") 0px 0px no-repeat;
    background-size: 100%;
  }
  .coupon_cell_unit .arrow_for_more {
    width: 15px;
    height: 15px;
  }

  /*优惠券分区*/
  .discount_list_containner div {
    float: left;
  }

  .discount_type {
    color: #ff6600;
    padding: 1px 5px;
    border: 1px solid #ff6600;
    border-radius: 9px;
    margin: 4px 4px 0px 0;
    display: inline-block;
  }
  /*快递信息*/
  .delivery_predict {
    color: #999999;
    font-weight: bold;
    margin-top: 3px;
  }
  .aboutDelivery {
    color: #ff6600;
  }
  .coupon_score_not_oversea {
    display: inline-block;
    width: 60px;
    height: 14px;
    background: url("../../assets/Detail/yunzun.png") 0px 0px no-repeat;
    background-size: 100%;
    margin-right: 4px;
  }
  .addr_icon {
    display: inline-block;
    width: 14px;
    height: 14px;
    background: url("../../assets/Detail/addr_icon.png") 0px 0px no-repeat;
    background-size: 100%;
  }
  .pay_methods{
    margin: 4px auto;
    border-top: 1px solid rgb(242,242,242);
  }
  .delivery_promises_transitcolor {
    background-color:  rgb(248,248,248);
  }

  .delivery_promises_depadding {
    padding: 0;
  }

  .delivery_promise {
    color: #999999;
    margin: 3px;
    float: left;
  }
  .promise_given{
    width: 13px;
    height: 13px;
    display: inline-block;
    margin-right: 3px;
    background: url("../../assets/Detail/promises_to_user.png") -127px -42px no-repeat;
    background-size: 153px 364px;
  }
  .promise_denied {
    width: 13px;
    height: 13px;
    display: inline-block;
    margin-right: 3px;
    background: url("../../assets/Detail/delivery_denied.png") 0px 0px no-repeat;
    background-size: 100%;
  }

</style>
