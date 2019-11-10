<template>
  <div class="Pic_Text_Detail_container">
    <div class="detail_desc">
      <ul >
        <li v-for="(item,index) in picdesc_params_service" :key="index" :class="{detail_desc_tittle: true, detail_desc_tittle_active: (detaildesc_mark === index)}" @click="detail_desc_type(index)">{{item.desc_info.desc_tittle}}</li>
      </ul>
      <!--          图文详情-->
      <img src="" alt="">
<!--      ===============================================================================================-->
      <div v-html="picTextStr" ref="detailImgDesc" v-show="detaildesc_mark === 0"></div>
<!--      ===============================================================================================-->
      <!--          包装售后-->
      <div class="pakages_service" v-for="(item, index) in picdesc_params_service[2].desc_info.desc_list" :key="index" v-show="detaildesc_mark === 2">
        <p class="params_tittle">{{item.desc_key}}</p>

        <div class="pack_text_area">
          <div v-if="!item.desc_value.length" class="pack_params_detail">暂无数据</div>
          <div class="pack_params_detail" v-for="(text, index) in item.desc_value" :key="index">
            {{text}}
          </div>
        </div>
      </div>

      <!--规格参数-->
      <div class="params_unit" v-show="detaildesc_mark === 1">
        <div class="params_head">商品参数</div>
        <div class="params_detail" v-for="(item, index) in params_unit_info" :key="index">
          <p class="params_detail_head">{{item.attrName}}</p>
          <div class="params_detail_content" v-for="(k_v, index) in item.parametersData" :key="index">
            <div>{{k_v.snparameterdesc}}</div>
            <div>{{k_v.snparameterVal}}</div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>
<script>
    export default {
        name: "Pic_Text_Detail",
        data() {
            return {
                detaildesc_mark: 0
            }
        },
        props: {
            picTextStr: String,
            params_unit_info: Array,
            picdesc_params_service:{
                type: Array,
                default() {
                    return [
                        {desc_info: {desc_tittle: '图文详情'}},
                        {desc_info: {desc_tittle: '规格参数'}},
                        {desc_info: {desc_tittle: '包装售后', desc_list: [
                                    {desc_key : '包装清单', desc_value: []},
                                    {desc_key : '售后服务', desc_value: []},
                                    {desc_key : '特别声明', desc_value: ['本站苏宁自营商品的商品详情信息及包装参数信息均由供应商自行设计、制作并通过苏宁向其开放的数据端口自行发布，其真实性、准确性和合法性由供应商负责。本站保证苏宁自营商品均为正品，但因生产厂家可能会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本站不能确保用户收到的货物与本站展示的图片、产地、附件说明完全一致。']},
                                    {desc_key : '价格声明', desc_value: ['划线价：商品展示的划线价，可能是品牌专柜标价、品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在苏宁易购平台或销售商门店曾经展示过的挂牌价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、销售商门店挂牌价等可能会与您购物时展示的不一致，该价格仅供您参考。',
                                            '折扣：如无特殊说明，折扣指销售商在划线价基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。',
                                            '异常问题：商品促销信息以商品详情页“促销”信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。']}]}}
                    ]
                }
            }
        },
        methods: {
            detail_desc_type(index) {
                this.detaildesc_mark = index
                this.hideWhiteImg()
            },
            hideWhiteImg() {
                if (timmer1) {
                    clearTimeout(timmer1)
                }
                let timmer1 = setTimeout(()=> {
                    for (let i = 0; i < this.$refs.detailImgDesc.getElementsByTagName("img").length; i++) {
                        if (this.$refs.detailImgDesc.getElementsByTagName("img")[i].naturalHeight === 1) {
                            this.$refs.detailImgDesc.getElementsByTagName("img")[i].setAttribute('style','display:none')
                        }
                    }
                }, 500)
            }
        },
        mounted() {
            this.hideWhiteImg()
        }
    }
</script>

<style scoped>
  /*图文===规格===包装*/
  .Pic_Text_Detail_container {
    width: 375px;
    margin: 0 auto;

  }
  .detail_desc {
    width: 100%;
  }

  /*导航条*/
  .detail_desc ul{
    background-color: white;
    margin: 10px 0;
  }

  .detail_desc_tittle {
    display: inline-block;
    margin: 0px 7px;
    padding: 10px 0 13px;
    border-bottom: 2px solid white;
    /*background-color: red;*/
  }
  .detail_desc_tittle_active {
    color: #ff6600;
    border-bottom: 2px solid #ff6600;
  }

  /*图文详情*/
  .pic_text_unit {
    width: 100%;
    display: flex;
    flex-flow: row wrap;
  }
  /*包装售后*/
  .pakages_service {
    padding: 12px 13px;
    background-color: white;
    border-bottom: 1px solid rgb(220,220,220);
    position: relative;
  }
  .pakages_service p {
    white-space: pre-wrap;
  }
  .params_tittle {
    color: #333333;
  }
  .pack_text_area {
    padding-top: 20px;
  }


  .pack_params_detail {
    color: #909090;
    text-align: left;
  }
  /*规格参数*/
  .params_unit {
    padding: 12px 13px;
    background-color: white;
  }
  .params_head {
    margin-bottom: 15px;
    color: #353d44;
    font-size: 14px;
    text-align: left;
  }
  .params_detail {
    color: #909090;
    text-align: left;
    padding-top: 10px;
    border-top: 1px dashed rgb(220,220,220);

  }
  .params_detail_content {
    display: flex;

  }
  .params_detail_head, .params_detail_content div {
    flex: 1;
    margin-bottom: 10px;
  }

</style>
