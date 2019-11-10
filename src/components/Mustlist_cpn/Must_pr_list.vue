<template>
  <div class="must_pr_list_container">
    <div class="mustlist_block">
      <div class="prlist_center  clearfix">

        <!--gl_list banner大图 v-if="mustlist_block_info.mustlist_type === 'gllist'"-->
        <div class="gllist_banner_area" v-if="mustlist_block_info.contentType === '1'">

          <!--大图-->
          <img v-lazy="mustlist_block_info.imageUrl" alt="" class="gllist_banner_pic">

          <!-- 蒙版-->
          <div class="gl_banner_mask">

            <!--banner 标题-->
            <div class="gllist_tittle">{{mustlist_block_info.title}}</div>
          </div>
          <!--右上角标-->
          <div class="gl_tag">{{mustlist_block_info.displayJson.productCnt}}</div>
        </div>

        <!--pr_list 标题 v-if="mustlist_block_info.mustlist_type === 'prlist'-->
        <p class="pr_list_tittle" v-if="mustlist_block_info.contentType === '2'">{{mustlist_block_info.title}}</p>

        <!--商品展示-->
        <ul class="ul_for_show">
          <li class="prlist_singleitem" v-for="(goodinfo,index) in mustlist_block_info.gds" :key="index">

            <!--商品图片-->
            <div class="item_img_container">
              <img v-lazy="(goodinfo.pictureUrl || goodinfo.sugGoodsPicUrl)" alt="" class="pr_list_pic">
              <div class="item_img_decoration"></div>

            </div>
<!--            <img :src="(goodinfo.pictureUrl || goodinfo.sugGoodsPicUrl)" alt="" class="pr_list_pic">-->


            <!--促销及价格展示-->
            <div class="promotion_price" v-if="mustlist_block_info.contentType === '1' || true">
<!--            <div class="promotion_price" v-if="mustlist_block_info.contentType === '1' || mustlist_block_info.mustlist_showprice_option">-->
              <p class="gl_goods_name">{{goodinfo.sugGoodsName}}</p>
<!--              <p class="prlist_promotion" v-for="(promotioninfo,promoindex) in goodinfo.mustlist_promotion" :key="promoindex" >{{promotioninfo}}</p>-->
              <p class="prlist_price">{{goodinfo.price}}</p>
            </div>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Must_pr_list",
        props: {
            mustlist_block_info: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
  .mustlist_block {
    width: 355px;
    display: inline-block;
    margin: 10px auto 0px;
    background-color: white;
  }
  .prlist_center {
    width: 343px;
    margin: 0 auto;
  }

  .pr_list_tittle {
    font-size: 16px;
    color: #333333;
    font-weight: bold;
    margin-bottom: 5px;
    padding-top: 10px;
  }

  .ul_for_show {
   display: flex;
    justify-content: space-around;
  }

  .prlist_singleitem {
    width: 110px;
    float: left;
    text-align: center;
    padding: 10px 0 10px;
  }
  .item_img_container {
   position: relative;
  }
  .item_img_decoration {
   background-color: rgba(0,0,0,0.03);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .pr_list_pic {
    width: 110px;
    height: 110px;
    display: block;
  }

  .prlist_promotion{
    font-size: 12px;
    color: #fe053a;
    display: inline-block;
    padding: 0 1px;
    background-color: #ffedef;
    border: 1px solid #ff2a57;
    margin-top: 10px;
  }
  .prlist_price {
    font-size: 12px;
    font-weight: bold;
    color: #A5A5A5;
    text-align: center;
  }
  .prlist_price:before {
    content: '￥';
  }

  /*=========================gllist banner样式===========================*/

  .gllist_banner_area {
    position: relative;
  }

  .gllist_banner_pic {
    width: 345px;
    height: 169px;
    background-color: red;
    display: block;
    margin: 6px auto;
  }

  .gl_banner_mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.2);
  }

  .gllist_tittle {
    position: absolute;
    top: 125px;
    font-size: 20px;
    color: white;
    width: 325px;
  }

  .gl_tag{
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 14px;
    font-weight: bold;
    color: white;
    border: 1px solid white;
    border-radius: 4px;
    padding: 2px 0px;
  }
  .gl_tag:after {
    content: ' 商品';
  }

  .gl_goods_name {
    color: #666666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 95px;
    margin: 0 auto;
  }
</style>
