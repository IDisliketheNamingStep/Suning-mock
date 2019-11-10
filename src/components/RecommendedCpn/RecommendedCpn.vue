<template>
<!--  <div >-->
<!--    <img src="@/assets/demo_pic/guess_you_like.webp" alt="" class="guess_you_like_pic" v-if="promotion_show_mark">-->
<!--    <div class="recommended_cpn_containner" :style="recommendedGoodsCpnStyle.itemsArrangeStyle">-->
<!--      <RecommendedItem v-for="(recom,index) in recoms_block_info" :key="index" :style="recommendedGoodsCpnStyle.item_style" :recommended_item_info="recom" :textPrice_style="recommendedGoodsCpnStyle.textPrice_style" :goodThumbnailImg_style="recommendedGoodsCpnStyle.goodThumbnailImg_style" :doShowShopType="recommendedGoodsCpnStyle.doShowShopType" :promotionShowMark="recommendedGoodsCpnStyle.promotionShowMark" :userCommentsInfoShowMark="recommendedGoodsCpnStyle.userCommentsInfoShowMark"></RecommendedItem>-->
<!--    </div>-->

<!--  </div>-->
  <div >
<!--    https://image3.suning.cn/uimg/cms/img/154518371251022769.png?from=mobile-->
    <img :src="'https://image3.suning.cn' + recoms_block_info + '?from=mobile'" alt="" class="guess_you_like_pic" v-if="promotion_show_mark">
    <div class="recommended_cpn_containner" :style="recommendedGoodsCpnStyle.itemsArrangeStyle">
      <RecommendedItem v-for="(recom,index) in guessYouLikeSkus" :key="index" :style="recommendedGoodsCpnStyle.item_style" :recommended_item_info="recom" :textPrice_style="recommendedGoodsCpnStyle.textPrice_style" :goodThumbnailImg_style="recommendedGoodsCpnStyle.goodThumbnailImg_style" :doShowShopType="recommendedGoodsCpnStyle.doShowShopType" :promotionShowMark="recommendedGoodsCpnStyle.promotionShowMark" :userCommentsInfoShowMark="recommendedGoodsCpnStyle.userCommentsInfoShowMark"></RecommendedItem>
    </div>

  </div>

</template>

<script>
    import RecommendedItem from '@/components/RecommendedCpn/RecommendedItem.vue'
    export default {
        name: 'RecommendedCpn',
        computed: {
            promotion_show_mark() {
                return this.$route.path === '/'
            }
        },
        props: {
            // item_style: {
            //     type: String,
            //     default() {
            //         return 'width: 184px;border-radius: 0'
            //     }
            // },
            // textPrice_style: {
            //     type:String,
            //     default() {
            //         return 'width: 142px'
            //     }
            // },
            // goodThumbnailImg_style: {
            //     type: String,
            //     default() {
            //         return 'width: 100%'
            //     }
            // },
            recommendedGoodsCpnStyle: {
                type:Object,
                default() {
                    return {
                        // 设置flex布局（around、between、evenly）以下为首页默认样式
                        itemsArrangeStyle:'justify-content: space-evenly',
                        // 设置一个商品的宽度
                        item_style: 'border-radius: 10px; width:46%',
                        // 设置是否显示店铺类型
                        doShowShopType:true,
                        // 设置文字显示宽度
                        textPrice_style: 'width: 86%;',
                        // 设置商品图片宽度
                        goodThumbnailImg_style: 'width: 86%;',
                        // 设置是否显示促销
                        promotionShowMark: true,
                        RecomItemComStyle: '',
                        // 设置是否展示用户评价汇总
                        userCommentsInfoShowMark: false
                    }
                }
            },

            recoms_block_info: {
                type: String,
                default() {
                    return null
                }
            },
            guessYouLikeSkus: {
                type:Array,
                default() {
                    return []
                }
            }
        },
        components: {
            RecommendedItem
        }
    }
</script>

<style scoped>
  .guess_you_like_pic {
    width: 375px;
    margin: 0 auto;
  }
  .recommended_cpn_containner {
    width: 375px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

</style>
