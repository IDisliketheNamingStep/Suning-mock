<template>
    <div class="ShopUnit_container">
      <shopTabbar></shopTabbar>
<!--      @scroll="FlowingHead($event)"-->
      <div class="ShopUnit_content" ref="ShopUnit_content">
<!--        <div>-->
<!--          副科级第三方回款合计 <br>-->
<!--          甲方的时间 <br>-->
<!--          地方会计师会计分录 <br>-->
<!--          快递费是咖啡机 <br>-->
<!--          东方时空及付款 <br>-->
<!--          离开的弗兰克 <br>-->
<!--          快点放假了设计费 <br>-->
<!--        </div>-->
<!--        <ShopHeadBar ref="ShopHeadBar" id="ShopHeadBar" @changeParentShowActiveMark="changeShowActiveMark"></ShopHeadBar>-->
<!--        <ShopFlowingHeadBar v-show="ShopFlowingHeadBar_mark"></ShopFlowingHeadBar>-->
<!--        <div v-show="shopGuide_active_mark === 0">-->
<!--          <ShopBanner ></ShopBanner>-->
<!--          <div class="recomGoodContainer">-->
<!--            <RecommendedCpn :recoms_block_info="recommends_info" :recommendedGoodsCpnStyle="recommendedGoodsCpnStyle"></RecommendedCpn>-->
<!--          </div>-->
<!--        </div>-->
        <shopHomePage></shopHomePage>
<!--        <div v-show="shopGuide_active_mark === 2">-->
<!--&lt;!&ndash;          <ShopBanner ></ShopBanner>&ndash;&gt;-->
<!--          <div class="recomGoodContainer">-->
<!--            <RecommendedCpn :recoms_block_info="recommends_info" :recommendedGoodsCpnStyle="recommendedGoodsCpnStyle"></RecommendedCpn>-->
<!--          </div>-->
<!--        </div>-->

      </div>
    </div>
</template>

<script>
  import shopHomePage from '@/components/ShopUnit/shopHomePage.vue'
  // import ShopHeadBar from '@/components/ShopUnit/ShopHeadBar.vue'
  // import ShopFlowingHeadBar from '@/components/ShopUnit/ShopFlowingHeadBar.vue'
  // import ShopBanner from '@/components/ShopUnit/ShopBanner.vue'
  import shopTabbar from '@/components/ShopUnit/shopTabbar.vue'
  // import RecommendedCpn from '@/components/RecommendedCpn/RecommendedCpn.vue'


  export default {
      name: "ShopUnit",
      data() {
          return {
              // ShopHeadBar_pos: null,
              // ShopFlowingHeadBar_mark: false,
              // shopGuide_active_mark: 0
          }
      },
      components: {
          shopHomePage,shopTabbar
          // ShopHeadBar,ShopBanner,RecommendedCpn,shopTabbar,ShopFlowingHeadBar
      },
      props: {
          // 猜你喜欢样式参数设置
          recommendedGoodsCpnStyle: {
              type:Object,
              default() {
                  return {
                      // 设置flex布局（around、between、evenly）
                      itemsArrangeStyle:'justify-content: space-evenly',
                      // 设置一个商品的宽度
                      item_style: 'width: 45.8%; border-radius: 10px',
                      // 设置是否显示店铺类型
                      doShowShopType:false,
                      // 设置文字显示宽度
                      textPrice_style: 'width: 90.6%',
                      // 设置商品图片宽度
                      goodThumbnailImg_style: 'width: 100%',
                      // 设置是否显示促销
                      promotionShowMark: false
                  }
              }
          },
          recommends_info:{
              type: Array,
              default() {
                  return []
                  // return [
                  //     {pic_url:require('@/assets/demo_pic/oversea_demo_pic.webp'),
                  //         shop_type:'oversea_goods',
                  //         goods_name:'【元气早餐搭档】德运（Devondale）全脂高钙成人奶粉 1000g/袋 进口全脂成人奶粉 学生奶粉 澳大利亚进口',
                  //         gooods_price:269,
                  //         promotion:['拼购','领劵5-5']},
                  //
                  //     { pic_url:require('@/assets/demo_pic/self_management_demo_pic.webp'),
                  //         shop_type:'self_management_shop',
                  //         goods_name:'苏泊尔(SUPOR) 挂烫机GT13VP-20 家用熨烫机蒸汽小型立式挂烫机 铝材质手持电熨斗 10档调温 除钙功能',
                  //         gooods_price:49.9,
                  //         promotion:['抢']},
                  //     {pic_url:require('@/assets/demo_pic/oversea_demo_pic.webp'),
                  //         shop_type:'oversea_goods',
                  //         goods_name:'【元气早餐搭档】德运（Devondale）全脂高钙成人奶粉 1000g/袋 进口全脂成人奶粉 学生奶粉 澳大利亚进口',
                  //         gooods_price:269,
                  //         promotion:['拼购','领劵5-5']},
                  //
                  //     { pic_url:require('@/assets/demo_pic/self_management_demo_pic.webp'),
                  //         shop_type:'self_management_shop',
                  //         goods_name:'苏泊尔(SUPOR) 挂烫机GT13VP-20 家用熨烫机蒸汽小型立式挂烫机 铝材质手持电熨斗 10档调温 除钙功能',
                  //         gooods_price:49.9,
                  //         promotion:['抢']}
                  // ]
              }
          },
          tabbar_item_info:{
              type:Object,
              default(){
                  return {
                      tabbar_type: 'pic_text',
                      tabbar_style: {img_style: 'margin: 3px auto 0; width: 28px; height: 28px;', text_style: ''},
                      tabbar_pic_text: [{pic_url:require("@/assets/ShopUnit/tabbar/店铺tabbar1.png"), tabname:'',path:'/'},
                          {pic_url:require("@/assets/ShopUnit/icon_list.png"), tabname:'全部商品',path:'/category'},
                          {pic_url:require("@/assets/ShopUnit/icon_list.png"), tabname:'店铺榴莲',path:'/mustlist'},
                          {pic_url:require("@/assets/ShopUnit/icon_list.png"), tabname:'商铺分类',path:'/chart'}]
                  }
              }
          }
      },
      methods: {
          FlowingHead(e) {
              let shopUnitPosTop = e.target.scrollTop;
              if(((this.ShopHeadBar_pos <= shopUnitPosTop) && (this.ShopFlowingHeadBar_mark = true)) || ((this.ShopHeadBar_pos > shopUnitPosTop) && (this.ShopFlowingHeadBar_mark = false))) {
                  return
              }
              if (this.ShopHeadBar_pos <= shopUnitPosTop) {
                  this.ShopFlowingHeadBar_mark = true
              }
              if (this.ShopHeadBar_pos > shopUnitPosTop) {
                  this.ShopFlowingHeadBar_mark = false
              }

          },
          changeShowActiveMark(index) {
              this.shopGuide_active_mark = index
          }
      },
      mounted() {
          this.ShopHeadBar_pos = document.getElementById('ShopHeadBar').offsetTop + document.getElementById('ShopHeadBar').offsetHeight - 35
      }

  }
</script>

<style scoped>
  .ShopUnit_container {
    width: 375px;
    margin: 0 auto;
  }
  .ShopUnit_content {
    width: 375px;
    position: fixed;
    top: 0;
    bottom: 49px;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: rgb(242,242,242);
  }
  .ShopUnit_content::-webkit-scrollbar {
    display: none;
  }
</style>
