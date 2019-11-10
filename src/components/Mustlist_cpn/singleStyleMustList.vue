<template>
  <div class="must_pr_list_container">
    <div class="mustlist_block" v-for="(item, index) in mustlist_block_info" :key="index">
      <div class="prlist_center  clearfix">

        <!--pr_list 标题 v-if="mustlist_block_info.mustlist_type === 'prlist'-->
        <p class="pr_list_tittle">{{item.title}}</p>

        <!--商品展示-->
        <ul class="ul_for_show">
          <li class="prlist_singleitem" v-for="(goodinfo,index) in [0,1,2]" :key="index">

            <!--商品图片-->
            <div class="item_img_container">
              <img v-lazy="(item.hgContent && item.hgContent.displayJson && item.hgContent.displayJson[index].smallImageUrl)" alt="" class="pr_list_pic">
              <div class="item_img_decoration"></div>
            </div>


            <!--促销及价格展示-->
            <div class="promotion_price">
              <!--            <div class="promotion_price" v-if="mustlist_block_info.contentType === '1' || mustlist_block_info.mustlist_showprice_option">-->
<!--              <p class="gl_goods_name">{{goodinfo.sugGoodsName}}</p>-->
              <!--              <p class="prlist_promotion" v-for="(promotioninfo,promoindex) in goodinfo.mustlist_promotion" :key="promoindex" >{{promotioninfo}}</p>-->
              <p class="prlist_price">{{item.hgContent && item.hgContent.displayJson && item.hgContent.displayJson[index].text}}</p>
            </div>

          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "singleStyleMustList",
        props: {
            mustlist_block_info: {
                type: Array,
                default() {
                    return []
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
    /*content: '￥';*/
  }

</style>

