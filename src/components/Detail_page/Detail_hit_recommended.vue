<template>
  <div >
    <div class="recommended_cpn_containner" >
      <div style="margin: 12px 10px 12px 0" class="single_item" v-for="(recom,index) in recoms_block_info" :key="index" @click="toGoodsDetail(recom)">
        <img v-lazy="(recom.adSrc || recom.pictureUrl)" alt="" style="width: 110px;display: block">
        <p class="gprice" >{{recom.sugGoodsName}}</p>
        <p style="float: left; color: #ff6600">￥{{recom.price}}</p>
      </div>
    </div>
  </div>
</template>

<script>
    import RecommendedItem from '@/components/RecommendedCpn/RecommendedItem.vue'
    export default {
        name: 'Detail_hit_recommended',
        methods: {
            toGoodsDetail(recom) {
                this.$router.push({path: '/good_detail',
                    query: {
                      sugGoodsCode: recom.sugGoodsCode,
                      vendorId: recom.vendorId,
                      shopCode: recom.shopCode,
                      catGroupId: recom.catGroupId
                        }
                })
            }
        },
        props: {
            recommendedGoodsCpnStyle: {
                type:Object,
                default() {
                    return {
                        // 设置flex布局（around、between、evenly）以下为首页默认样式
                        itemsArrangeStyle:'',
                        // 设置一个商品的宽度
                        item_style: 'border-radius: 0px; width:29.3%; ',
                        // 设置是否显示店铺类型
                        doShowShopType:false,
                        // 设置文字显示宽度
                        textPrice_style: 'width: 100%;text-align:left',
                        goodThumbnailImg_style: 'width: 100%',
                        // 设置是否显示促销
                        promotionShowMark: false,
                        // RecomItemComStyle: 'margin:12px 10px 12px 0',
                        price_style: 'font-size: 14px;'
                    }
                }
            },
            recoms_block_info: {
                type:Array,
                default() {
                    return []
                }
            }
        },
        components: {
            RecommendedItem
        },
        computed: {
            promotion_show_mark() {
                return this.$route.path === '/'
            }
        }
    }
</script>

<style scoped>
  .gprice {
    float: left;
    width: 90px;
    display: inline-block;
    margin: 0 auto 4px;
    color: #333333;
    white-space: pre-wrap;
    /*多出两行的文字省略====------*/
    word-break:break-all;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /*多出两行的文字省略====------*/
  }


  .recommended_cpn_containner {
    display: flex;
    flex-flow: row nowrap;
    overflow-x: auto;

  }
  .recommended_cpn_containner::-webkit-scrollbar {
    display: none;
  }

</style>
