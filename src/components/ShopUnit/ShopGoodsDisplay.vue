<template>
  <div class="shopHomePage_container" >
    <shopTabbar></shopTabbar>
    <!--    @scroll="FlowingHead($event)"-->
    <div class="content" >
      <ShopHeadBar ref="ShopHeadBar" id="ShopHeadBar" :shopGuide_active_mark="1" class="ShopHeadBar"></ShopHeadBar>
      <div class="recomGoodContainer" :style="recomGoodContainerTopPos">
        <RecommendedCpn :recoms_block_info="recommends_info" :recommendedGoodsCpnStyle="recommendedGoodsCpnStyle"></RecommendedCpn>
      </div>
    </div>
  </div>
</template>

<script>
    import ShopHeadBar from '@/components/ShopUnit/ShopHeadBar.vue'
    import ShopFlowingHeadBar from '@/components/ShopUnit/ShopFlowingHeadBar.vue'
    import ShopBanner from '@/components/ShopUnit/ShopBanner.vue'
    import RecommendedCpn from '@/components/RecommendedCpn/RecommendedCpn.vue'
    import shopTabbar from '@/components/ShopUnit/shopTabbar.vue'
    export default {
        name: "ShopGoodsDisplay",
        data() {
            return {
                ShopHeadBar_pos: null,
                ShopFlowingHeadBar_mark: false,
                shopGuide_active_mark: 0
            }
        },
        computed: {
            recomGoodContainerTopPos() {
                return 'top:' + (this.ShopHeadBar_pos + 35 + 15) + 'px'
            }
        },
        props: {
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
                        promotionShowMark: true,
                        // 设置是否展示用户评价汇总
                        userCommentsInfoShowMark: true
                    }
                }
            },
            recommends_info:{
                type: Array,
                default() {
                    return [
                        // {pic_url:require('@/assets/demo_pic/oversea_demo_pic.webp'),
                        //     shop_type:'oversea_goods',
                        //     goods_name:'【元气早餐搭档】德运（Devondale）全脂高钙成人奶粉 1000g/袋 进口全脂成人奶粉 学生奶粉 澳大利亚进口',
                        //     gooods_price:269,
                        //     promotion:['拼购','领劵5-5']},
                        //
                        // { pic_url:require('@/assets/demo_pic/self_management_demo_pic.webp'),
                        //     shop_type:'self_management_shop',
                        //     goods_name:'苏泊尔(SUPOR) 挂烫机GT13VP-20 家用熨烫机蒸汽小型立式挂烫机 铝材质手持电熨斗 10档调温 除钙功能',
                        //     gooods_price:49.9,
                        //     promotion:['抢']},
                        // {pic_url:require('@/assets/demo_pic/oversea_demo_pic.webp'),
                        //     shop_type:'oversea_goods',
                        //     goods_name:'【元气早餐搭档】德运（Devondale）全脂高钙成人奶粉 1000g/袋 进口全脂成人奶粉 学生奶粉 澳大利亚进口',
                        //     gooods_price:269,
                        //     promotion:['拼购','领劵5-5']},
                        //
                        // { pic_url:require('@/assets/demo_pic/self_management_demo_pic.webp'),
                        //     shop_type:'self_management_shop',
                        //     goods_name:'苏泊尔(SUPOR) 挂烫机GT13VP-20 家用熨烫机蒸汽小型立式挂烫机 铝材质手持电熨斗 10档调温 除钙功能',
                        //     gooods_price:49.9,
                        //     promotion:['抢']}
                    ]
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
        components: {
            ShopHeadBar,ShopFlowingHeadBar,ShopBanner,RecommendedCpn,shopTabbar
        },
        // methods: {
        //     FlowingHead(e) {
        //         let shopUnitPosTop = e.target.scrollTop;
        //         if(((this.ShopHeadBar_pos <= shopUnitPosTop) && (this.ShopFlowingHeadBar_mark = true)) || ((this.ShopHeadBar_pos > shopUnitPosTop) && (this.ShopFlowingHeadBar_mark = false))) {
        //             return
        //         }
        //         if (this.ShopHeadBar_pos <= shopUnitPosTop) {
        //             this.ShopFlowingHeadBar_mark = true
        //         }
        //         if (this.ShopHeadBar_pos > shopUnitPosTop) {
        //             this.ShopFlowingHeadBar_mark = false
        //         }
        //
        //     }
        // },
        mounted() {
            this.ShopHeadBar_pos = document.getElementById('ShopHeadBar').offsetTop + document.getElementById('ShopHeadBar').offsetHeight - 35
        }
    }
</script>

<style scoped>
  .shopHomePage_container {
    width: 375px;
    margin: 0 auto;
    background-color: rgb(242,242,242);
  }
  .content {
    position: fixed;
    top: 0;
    bottom: 49px;
    background-color: rgb(242,242,242);
  }
  .ShopHeadBar {
    margin-bottom: 40px;
  }
  .recomGoodContainer {
    /*margin-top: 10px;*/
    position: fixed;
    /*top: 110px;*/
    bottom: 49px;
    overflow-y: auto;
    overflow-x: hidden;

    background-color: rgb(242,242,242);
  }
  .recomGoodContainer::-webkit-scrollbar {
    display: none;
  }

</style>
