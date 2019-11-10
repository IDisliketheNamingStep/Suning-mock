<template>
  <div class="good_detail_containner" >

    <Detail_tabbar @addToChart="addToChart(good_datail_info, shopCode, sugGoodsCode)"></Detail_tabbar>

    <div class="good_detail_content" v-if="startShowMark">
      <!--        置顶返回navbar-->
      <div class="detail_page_nav">
<!--        <a href="javascript:history.back(1)" class="goback"></a>-->
        <span @click.stop="goBack" class="goback"></span>
        <div class="nav_right_getmore"></div>
      </div>
      <!--        轮播大图banner_swiper-->
      <DetailBannerSwiper  v-if="startShowMark" :swiper_pic_list="(good_datail_info && good_datail_info.data1 && good_datail_info.data1.data.mainPictureList)"></DetailBannerSwiper>
<!--      <div class="good_pic_swiper_box">-->
<!--        <img class="good_pic_swiper_img" v-for="(item, index) in (good_datail_info && good_datail_info.data1 && good_datail_info.data1.data.mainPictureList)" :key="index" :src="item.domain + item.pictureUrl" alt="">-->
<!--      </div>-->

      <!--        product_main-->
      <div class="product_main_container">
        <div class="product_main_content">
          <!--            价格区-->
          <p class="prod_price"><span class="prod_price_integer">{{intF}}</span>.{{floatB}}</p>

          <!--            会员折扣vipinfo-->
          <div class="vipinfo_container">
            <div class="inner_box clearfix">
              <div class="vip_left">
                <span class="vip_supper"></span>
                <p class="vip_discount">{{massParams && massParams.data && massParams.data.dealMsg[0] && massParams.data.dealMsg[0].accountSuperM}}</p>
              </div>
              <p class="become_vip">立即开通</p>
            </div>
          </div>
          <!--            商品tittle-->
          <div class="good_tittle_area">
            <div class="good_name">
              <span :class="{snselfmarket:false,selfRuning:true}"></span>
              {{good_datail_info && good_datail_info.data1 && good_datail_info.data1.data.itemInfoVo.itemDisplayName}}
            </div>
            <div class="following"></div>
          </div>
          <p class="product_subp">{{massParams && massParams.data && massParams.data.itemShopInfo && massParams.data.itemShopInfo.poromotionPointVo}}
            <a href="" class="product_subp_link">{{massParams && massParams.data && massParams.data.itemShopInfo && massParams.data.itemShopInfo.poromotionPointCu}}</a>
          </p>
        </div>
      </div>

      <!--        ==================================榜单=============================-->
      <div class="cell_unit_container">

        <div class="forth_cell">
          <div class="cell_name">榜单</div>

          <div class="cell_middle">
            <div class="middle_first_line">
              <div class="cell_text">此商品已入选『营养美味水饺榜』第2名</div>
            </div>
          </div>

          <div class="arrow_for_more"></div>
        </div>

      </div>
      <!--==========================================优惠券==============================-->
      <div class="cell_unit_container coupon_cell_unit">

        <div class="forth_cell">
          <div class="cell_name">优惠</div>

          <div class="cell_middle">
            <div class="middle_first_line">
              <div class="cell_text"><span v-if="0" :class="{coupon_score_not_oversea:true}">&nbsp;</span>还差1.00件参加满减活动</div>
              <div class="fr_text">查看</div>
            </div>

            <div class="discount_list_containner">
              <div><span class="discount_type">满减</span>{{massParams && massParams.data && massParams.data.salesPromotion && massParams.data.salesPromotion.activityList && massParams.data.salesPromotion.activityList[0] && massParams.data.salesPromotion.activityList[0].activityDescription}}</div>
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
      <!--        ==============================已选==============================-->
      <div class="cell_unit_container">

        <div class="forth_cell">
          <div class="cell_name">已 选</div>

          <div class="cell_middle">
            <div class="middle_first_line">
              <div class="cell_text">1件</div>
            </div>
          </div>

          <div class="arrow_for_more"></div>
        </div>

      </div>
      <!--        <One_line_unit></One_line_unit>-->

      <!--        ===============================收货及付款==============================-->
      <Delivery_info_cpn></Delivery_info_cpn>
      <!--        =======================用户评价====================-->
      <User_comments_cpn :reviewInfo="reviewInfo"></User_comments_cpn>

      <WarningTips :warningTips="psubp && psubp.comItemdetail && psubp.comItemdetail.comitemDetailsList && psubp.comItemdetail.comitemDetailsList.detailsUrl"></WarningTips>
      <!--        =======================店铺链接及推广====================-->
      <shopInfo_Promote :brandLogoUrl="massParams && massParams.data.itemShopInfo.shopInfo.logoUrl" :recommends_info="hitGoods" :shopName="massParams && massParams.data.itemShopInfo.shopInfo.shopName"></shopInfo_Promote>

      <!--        ================图文详情==规格参数==包装售后=================-->
      <Pic_Text_Detail :params_unit_info="params_unit_info" :picTextStr="picTextStr"></Pic_Text_Detail>

      <!--=========================看了又看========================-->
      <Bottom_apart_line></Bottom_apart_line>

      <RecommendedCpn :guessYouLikeSkus="seeAndSee"></RecommendedCpn>
      <Bottom_apart_line bottomWarningStr="duang 到底啦~"></Bottom_apart_line>



    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import  User_comments_cpn from '@/components/Detail_page/User_comments_cpn.vue'
  import  shopInfo_Promote from '@/components/Detail_page/shopInfo_Promote.vue'
  import  WarningTips from '@/components/Detail_page/WarningTips.vue'
  import  Detail_tabbar from '@/components/Detail_page/Detail_tabbar.vue'
  import  DetailBannerSwiper from '@/components/Detail_page/DetailBannerSwiper.vue'
  import  Delivery_info_cpn from '@/components/Detail_page/Delivery_info_cpn.vue'
  import  Pic_Text_Detail from '@/components/Detail_page/Pic_Text_Detail.vue'
  import  One_line_unit from '@/components/Detail_page/One_line_unit.vue'
  import RecommendedCpn from '@/components/RecommendedCpn/RecommendedCpn.vue'
  import Bottom_apart_line from '@/components/Commons_cpn/Bottom_apart_line.vue'
    export default {
        name: "Good_Detail",
        data() {
            return {
                // 开始展示标志
                startShowMark: false,
                // 商品码
                sugGoodsCode: null,
                // 店铺码
                vendorId: null,
                shopCode: null,
                // 分组ID
                catGroupId: null,
                // 商品名及价格
                good_datail_info: null,
                // 价格整数
                intF: null,
                // 价格小数
                floatB: null,
                // 商品描述
                psubp:null,
                // 详情页推荐
                nssnattache: null,
                // 店铺热门商品
                hitGoods: null,
                // 看了又看
                seeAndSee: null,
                // 用户评价
                reviewInfo: null,
                // 规格参数
                params_unit_info: null,
                // 杂乱参数
                massParams: null,
                // 拼接URL
                formURL: null,
                // 图文详情HTML块
                picTextStr: ''
            }
        },
        components: {
            User_comments_cpn,
            RecommendedCpn,
            Bottom_apart_line,
            Detail_tabbar,
            Pic_Text_Detail,
            Delivery_info_cpn,
            One_line_unit,
            shopInfo_Promote,
            WarningTips,
            DetailBannerSwiper
        },
        props: {
            // 猜你喜欢样式参数设置
            recommendedGoodsCpnStyle: {
                type:Object,
                default() {
                    return {
                        // 设置flex布局（around、between、evenly）
                        itemsArrangeStyle:'justify-content: space-between',
                        // 设置一个商品的宽度
                        item_style: 'width: 49%; border-radius: 0px',
                        // 设置是否显示店铺类型
                        doShowShopType:false,
                        // 设置文字显示宽度
                        textPrice_style: 'width: 29.3%',
                        // 设置商品图片宽度
                        goodThumbnailImg_style: 'width: 29.3%',
                        // 设置是否显示促销
                        promotionShowMark: false
                    }
                }
            },
            recommends_info:{
                type: Array,
                default() {
                    return []
                }
            },

        },
        methods: {
          // 时间戳
          timeStampTest() {
              return new Date().getTime()
          },
          // 获取商品信息
          getInfoCreated() {
              // 商品码sugGoodsCode: null,// 店铺码vendorId: null,// 分组IDcatGroupId: null,
              this.sugGoodsCode = this.$route.query.sugGoodsCode
              this.vendorId = this.$route.query.vendorId
              this.shopCode = this.$route.query.shopCode
              this.catGroupId = this.$route.query.catGroupId

              // 商品名及价格good_datail_info: null,// 价格整数intF: null,// 价格小数floatB: null,
              let url1 = '/gdetail/nsenitemsale_' + this.sugGoodsCode + '_' + this.vendorId + '_5_999_190_769_7690001____V0__1000061_.html?_=' +this.timeStampTest() +'&callback=wapData'
              axios.get(url1)
                  .then((res1)=>{
                      // 提取响应回来的json文件
                      this.good_datail_info = JSON.parse(res1.data.slice(8,-2))
                      this.formURL = JSON.parse(res1.data.slice(8,-2)).data
                      // 商品描述 psubp:null,
                      let url2 = '/productm/selfUniqueInfoJsonpCallbackV1_' + this.sugGoodsCode + '_' + this.vendorId + '_' + (this.catGroupId ||　this.formURL.data1.data.itemInfoVo.categoryCode) + '_Y396_0_0_01_999_itemUnique.html?callback=itemUnique'
                      axios.get(url2)
                          .then((res2)=>{
                              // 提取响应回来的json文件
                              this.psubp = JSON.parse(res2.data.slice(11,-1))
                              let ttt = (this.psubp.comItemdetail && this.psubp.comItemdetail.comitemDetailsList && this.psubp.comItemdetail.comitemDetailsList[0] && this.psubp.comItemdetail.comitemDetailsList[0].detailsUrl) || (this.psubp.itemDetail && this.psubp.itemDetail.detailUrl)
                              ttt = ttt.replace(ttt.slice(ttt.indexOf('<map name="Map">') - 1, ttt.indexOf('map>') + 4), '')
                              ttt = ttt.replace(/<img/g, '<img style="display: block;width: 100%"')
                              ttt = ttt.replace(/<p/g, '<p style="white-space: pre-wrap;"')
                              this.psubp.itemDetail.detailUrl = this.psubp.itemDetail.detailUrl.replace(/<span/g, '<span style="white-space: pre-wrap;"')
                              this.psubp.itemDetail.detailUrl = this.psubp.itemDetail.detailUrl.replace(/src2/g, 'src')
                              this.psubp.itemDetail.detailUrl = this.psubp.itemDetail.detailUrl.replace(/<img/g, '<img style="display: block;width:100%"')
                              this.picTextStr = ttt + this.psubp.itemDetail.detailUrl

                          })
                          .catch((err2)=>{console.log(err2);})

                      // let url5 = this.formURL && this.formURL.data1 &&  this.formURL.data1.data && this.formURL.prescription && this.formURL.prescription.earliestArriveDate && '/gdetail/nsendetail_' + this.sugGoodsCode + '_' + this.vendorId + '_025_0250199_5_' + (this.catGroupId ||　this.formURL.data1.data.itemInfoVo.categoryCode) + '_' + this.formURL.data1.data.groupInfoVO.catalogId + '_' + this.formURL.price.saleInfo[0].promotionPrice + '_0_100_' + this.formURL.price.saleInfo[0].salesOrg + '_' + this.formURL.price.saleInfo[0].plantCode + '_' + this.formURL.price.saleInfo[0].vendor + '_' + this.formURL.price.saleInfo[0].netPrice + '_0_' + this.sugGoodsCode + '_999_0_' + this.formURL.data1.data.itemInfoVo.brandCode + '__' + this.formURL.data1.data.itemInfoVo.brandId + '_' + this.formURL.data1.data.groupInfoVO.categoryId + '_' + this.formURL.data1.data.itemType + '_0_' + (this.formURL.prescription.earliestArriveDate || '') + '_' + this.formURL.allpowerful+ '_1000173_7194426173__' + this.formURL.data1.data.twoCategoryId + '_01________2_1_V0______.html?callback=detailCommonLogic'
                      let url5 = this.formURL && this.formURL.data1 &&  this.formURL.data1.data && '/gdetail/nsendetail_' + this.sugGoodsCode + '_' + this.vendorId + '_025_0250199_5_' + (this.catGroupId ||　this.formURL.data1.data.itemInfoVo.categoryCode) + '_' + this.formURL.data1.data.groupInfoVO.catalogId + '_' + this.formURL.price.saleInfo[0].promotionPrice + '_0_100_' + this.formURL.price.saleInfo[0].salesOrg + '_' + this.formURL.price.saleInfo[0].plantCode + '_' + this.formURL.price.saleInfo[0].vendor + '_' + this.formURL.price.saleInfo[0].netPrice + '_0_' + this.sugGoodsCode + '_999_0_' + this.formURL.data1.data.itemInfoVo.brandCode + '__' + this.formURL.data1.data.itemInfoVo.brandId + '_' + this.formURL.data1.data.groupInfoVO.categoryId + '_' + this.formURL.data1.data.itemType + '_0_' + '_' + this.formURL.allpowerful+ '_1000173_7194426173__' + this.formURL.data1.data.twoCategoryId + '_01________2_1_V0______.html?callback=detailCommonLogic'
                      axios.get(url5)
                          .then((res5)=>{
                              // 提取响应回来的json文件
                              this.massParams = JSON.parse(res5.data.slice(18,-2))
                              this.params_unit_info = this.massParams.data.itemParam.parametersElec
                          })
                          .catch((err5)=>{console.log(err5);})

                      let url6 = '/gdetail/nssnattache_' + this.sugGoodsCode + '_' +  this.vendorId + '_9017_18_18_' + (this.catGroupId ||　this.formURL.data1.data.itemInfoVo.categoryCode) + '_' + this.formURL.data1.data.groupInfoVO. categoryId + '_9017_0_5_0_' + this.sugGoodsCode + '_0_' + this.formURL.price.saleInfo[0].promotionPrice + '999_0100100_010_0_0_' + this.formURL.allpowerful + '_'  + this.formURL.price.saleInfo[0].vendor + '___' + this.formURL.data1.data.itemInfoVo.brandCode +'_' +this.formURL.data1.data.itemInfoVo.brandId + '_____156913720153348882_' + this.formURL.data1.data.twoCategoryId +'___.html?callback=attacheCommonLogic'
                      axios.get(url6)
                          .then((res3)=>{
                              // 提取响应回来的json文件
                              this.nssnattache = JSON.parse(res3.data.slice(19,-2))
                              this.hitGoods = this.nssnattache.data.sugGood[0].skus
                              if (JSON.stringify(this.hitGoods) === '{}') {
                                  this.hitGoods = []
                              }
                              this.seeAndSee = this.nssnattache.data.seeAndSee[0].skus
                              if (JSON.stringify(this.seeAndSee) === '{}') {
                                  this.seeAndSee = []
                              }
                              // console.log(typeof [1,2], '233')
                              this.reviewInfo = this.nssnattache.data.reviewInfo.reviewInfo
                          })
                          .catch((err3)=>{console.log(err3);})

                      this.good_datail_info = this.good_datail_info.data
                      this.startShowMark  = true
                      const price = this.good_datail_info.price && this.good_datail_info.price.saleInfo && this.good_datail_info.price.saleInfo[0] && this.good_datail_info.price.saleInfo[0].netPrice
                      this.intF = parseInt(price)
                      this.floatB = Math.ceil(price*100 - this.intF*100)
                  })
                  .catch((err1)=>{console.log(err1);})


          },
          // 加入购物车
          addToChart(good_datail_info, shopCode, sugGoodsCode) {
              if (isNaN(this.intF)) {
                  return
              }
              // this.$store.commit('addToChart', {good_datail_info, shopCode, sugGoodsCode})
              this.$store.commit('addToChart', {good_datail_info, shopCode, sugGoodsCode})
              // this.$store.commit('addToChart', {good_datail_info: this.good_datail_info, shopCode: this.recommended_item_info.shopCode, sugGoodsCode: this.recommended_item_info.sugGoodsCode})

          },
          // 返回首页
          goBack() {
              this.$router.push('/')
          }
        },
        created() {
            this.getInfoCreated()
        },
        watch: {
            '$route' (to, from) {
                // this.$router.go(0);
            }
        }
    }
</script>

<style scoped>
  /*总览*/
  .good_detail_containner {
    width: 375px;
    margin: 0 auto;
    background-color: rgb(242,242,242);
  }
  .good_detail_content {
    width: 375px;
    margin: auto;
    position: absolute;
    top: 0;
    bottom: 49px;
    background-color: rgb(242,242,242);
    overflow-y: auto;
    overflow-x: hidden;
  }
  .good_detail_content::-webkit-scrollbar {
    display: none;
  }

  /*顶部导航栏*/
  .detail_page_nav {
    position: absolute;
    height: 44px;
    width: 100%;
    background: url("../assets/sn_nav_demo_pic/nav-back.png") 7px 7px no-repeat;
    background-size: 30px;
    z-index: 3;
  }
  .goback {
    display: inline-block;
    width: 30px;
    height: 44px;
    margin-left: 7px;
    float: left;
  }
  .nav_right_getmore {
    width: 30px;
    height: 30px;
    float: right;
    margin:7px 7px 0 0;
    border-radius: 50%;
    background: url("../assets/sn_nav_demo_pic/nav-more.png") 0px 0px no-repeat;
    background-size: 30px;
  }

  /*轮播图*/
  /*.good_pic_swiper_box {*/
  /*  height: 375px;*/
  /*  background-color: white;*/
  /*  display: flex;*/
  /*  flex-flow: row nowrap;*/
  /*}*/
  /*.good_pic_swiper_img {*/
  /*  display: block;*/
  /*  width: 100%;*/
  /*}*/
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
  .prod_price {
    color: #ff6600;
    font-size: 16px;
  }
  .prod_price:before {
    content: '￥';
  }
  .prod_price_integer {
    font-size: 24px;
  }
/*vip信息*/
  .vipinfo_container {
    height: 49px;
    background-color: rgb(246,246,246);
    border-radius: 10px;
    margin-bottom: 10px;
  }
  .vipinfo_container .inner_box {
    margin: 0px 12px 0;
    height: 38px;
    padding: 5px 0 0 ;
    display: flex;
    flex-flow: row nowrap;

  }
  .vip_left {
    width: 261px;
    height: 100%;
    float: left;
    display: flex;
    border-right: 1px solid rgb(233,233,233);
  }
  .vip_supper {
    width: 40px;
    height: 20px;
    background: url("../assets/Detail/vip_super.gif") 0px 0px no-repeat;
    background-size: 40px 20px;
    margin-top: 8px;
  }
  .vip_discount {
    flex: 1;
    padding: 10px 10px 0 5px;
    font-size: 14px;
  }
  .become_vip {
    font-size: 13px;
    width: 65px;
    height: 100%;
    float: right;
    line-height: 40px;
    padding-left: 12px;
  }
  /*产品tittle */
  .good_tittle_area {
    width: 100%;
    background-color: white;
    display: flex;
    flex-flow: row nowrap;
  }
  .good_name {
    flex: 1;
    font-size: 16px;
    color: #222222;
    text-align: left;
    font-weight: bold;
    float: left;
    margin-bottom: 8px;
    padding-right: 10px;
  }

  /*加关注*/
  .following {
    width: 30px;
    height: 30px;
    background: url("../assets/Detail/favrite.png") 0px 0px no-repeat;
    background-size: 100%;
    float: right;
  }
  /*商品类型区别样式*/
  .snselfmarket {
    display: inline-block;
    width: 83px;
    height: 14px;
    background: url("../assets/Detail/sn_self_market.png") 0px 0px no-repeat;
    background-size: 100%;
  }
  .selfRuning {
    color: white;
    display: inline-block;
    padding: 0 5px;
    margin-right: 3px;
    background-color: #ff5500;
    border-radius: 2px;
    font-size: 12px;
  }
  .selfRuning:before {
    content: '自营';
  }

  .product_subp {
    color: #999999;
    font-size: 13px;
    line-height: 24px;
  }
  .product_subp_link {
    margin-left: 10px;
    color: #ff6600;
    white-space: pre-wrap;
  }
  /*榜单 */

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
    background: url("../assets/Detail/detail_arrow.png") 0px 0px no-repeat;
    background-size: 100%;
  }
  .coupon_cell_unit .arrow_for_more {
    width: 15px;
    height: 15px;
  }

/*优惠券分区*/
  .discount_list_containner {
    float: left;
    text-align: left;
  }

  .discount_type {
    color: #ff6600;
    padding: 1px 5px;
    border: 1px solid #ff6600;
    border-radius: 9px;
    margin: 4px 4px 0px 0;
    display: inline-block;
  }
</style>
