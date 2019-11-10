<template>
    <div class="suning_money_container">
      <div class="sn_item_container" v-for="(item,index) of sn_money_info" :key="index">
        <p class="sn_item_count" v-if="!item.pic_url">{{item.count}}</p>
        <img :src="item.pic_url" alt="" class="mywallet_pic">
        <p class="sn_item_tittle">{{item.tittle}}</p>
        <p class="sn_item_notify">{{item.notify_info}}</p>
      </div>
    </div>
</template>
<!--{tittle:'我的钱包', pic_url: require('@/assets/profile_demo_pic/suning_money_icon.png'), notify_info:''}-->
<script>
    export default {
        name: "SuningMoney",
        props: {
            sn_money_info: {
                type:Array,
                default() {
                    return [{tittle:'优惠券', count:0, notify_info:''},
                            {tittle:'领云钻', count:0, notify_info:''},
                            {tittle:'任性付', count:0, notify_info:'未开通'},
                            {tittle:'零钱宝', count:0, notify_info:'立即转入'},
                            {tittle:'我的钱包', pic_url: require('@/assets/profile_demo_pic/sn_money_icon.png'), notify_info:''}]
                }
            }
        }
    }
</script>

<style scoped>
  .suning_money_container {
    width: 100%;
    display: flex;
    background: url("../../assets/profile_demo_pic/suning_money_icon.png") 298px 0px no-repeat white;
    background-size: 4px 60px;
  }

  .sn_item_container {
    flex: 1;
    padding-top: 15px;
  }
  .sn_item_container p {
    text-align: center;
  }
  .sn_item_tittle {
    line-height: 18px;
  }
  .sn_item_count {
    font-size: 14px;
    line-height: 21px;
  }
  .sn_item_notify {
    color: #ff6600;
    margin-bottom:3px;
    line-height: 18px;
  }

  .mywallet_pic {
    display: block;
    width: 23px;
    margin: 0 auto;
  }

</style>
