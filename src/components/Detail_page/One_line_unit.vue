<template>
    <div class="One_linge_unit_contianer">
      <div class="cell_unit_container coupon_cell_unit">

        <div class="forth_cell">
          <div class="cell_name">优惠</div>

          <div class="cell_middle">
            <div class="middle_first_line">
              <div class="cell_text"><span v-if="0" :class="{coupon_score_not_oversea:true}">&nbsp;</span>还差1.00件参加满减活动</div>
              <div class="fr_text">查看</div>
            </div>

            <div class="discount_list_containner">
              <div><span class="discount_type">满减</span>满两件打7.5折</div>
              <div><span class="discount_type">云钻促销</span>普通会员立返5云钻</div>
              <div><span class="discount_type">实名领劵</span>实名认证领10元支付劵</div>
            </div>
          </div>

          <div class="arrow_for_more"></div>
        </div>


        <div class="cell_unit_container">

          <div class="forth_cell">
            <div class="cell_name">刮 劵</div>

            <div class="cell_middle">
              <div class="middle_first_line">
                <div class="cell_text "><span v-if="1" :class="{coupon_score_not_oversea:true}">&nbsp;</span>100%中奖</div>
              </div>
            </div>

            <div class="arrow_for_more"></div>
          </div>

        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "One_line_unit"
    }
</script>

<style scoped>

</style>
