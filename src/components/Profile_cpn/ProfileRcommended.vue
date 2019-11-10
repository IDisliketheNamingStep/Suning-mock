<template>
  <div class="recommended_item_container">
    <div class="good_item_arrangement" >
      <img :src="recommended_item_info.pic_url" alt="" class="goodd_thumbnail">
      <div class="good_text">
        {{recommended_item_info.goods_name}}
      </div>
      <div class="promote_price">
        <div class="good_price">{{recommended_item_info.gooods_price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ProfileRcommended",
        props:{
            recommended_item_info:{
                type:Object,
                default(){
                    return {
                        // pic_url:require('@/assets/demo_pic/self_management_demo_pic.webp'),
                        // shop_type:'self_management_shop',
                        // goods_name:'苏泊尔(SUPOR) 挂烫机GT13VP-20 家用熨烫机蒸汽小型立式挂烫机 铝材质手持电熨斗 10档调温 除钙功能',
                        // gooods_price:49.9,
                        // promotion:['抢']
                    }
                }
            }
        }
    }
</script>

<style scoped>
  .recommended_item_container{
    width: 187px;
    height: 280px;
    background-color: white;
    margin-bottom: 1px;
    border-right: 1px;
  }

  .goodd_thumbnail{
    width: 100%;
    margin-top: 12px;
  }

  .good_text{
    width: 90%;
    font-size: 12px;
    line-height: 17px;
    margin: 0 auto;
    color: #333333;
    /*多出两行的文字省略====------*/
    word-break:break-all;
    overflow: hidden;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    /*多出两行的文字省略====------*/
  }

  .promote_price{
    width: 90%;
    margin: 8px auto;
    text-align: left;
  }

  .good_price{
    font-size: 16px;
    margin: 9px 0 11.25px;
    color: #ff4400;
  }
  .good_price:before{
    content: '￥';
  }



</style>
