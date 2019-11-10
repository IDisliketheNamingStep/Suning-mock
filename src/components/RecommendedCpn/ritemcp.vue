<template>
  <div class="recommended_item_container">
    <div :class="{good_item_arrangement:!detail_page_style, detail_style:detail_page_style}" >
      <img :src="recommended_item_info.pic_url" alt="" class="goodd_thumbnail" >
      <div class="good_text">
        <i :class="recommended_item_info.shop_type">&nbsp;</i>
        {{recommended_item_info.goods_name}}
      </div>
      <div class="promote_price">
        <span class="promotion_info" v-for="(promoteinfo,index) in recommended_item_info.promotion" :key="index" v-if="promotion_show_mark">{{promoteinfo}}</span>
        <div class="good_price">{{recommended_item_info.gooods_price}}</div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ritemcp",
        computed: {
            promotion_show_mark() {
                return this.$route.path === '/'
            }
            // detail_page_style() {
            //     return this.$route.path === '/good_detail'
            // }
        },
        props:{
            detail_page_style: false,
            // recommended_item_info:{
            //     type:Object,
            //     default(){
            //         return {
            //             pic_url:require('@/assets/demo_pic/oversea_demo_pic.webp'),
            //             shop_type:'oversea_goods',
            //             goods_name:'【元气早餐搭档】德运（Devondale）全脂高钙成人奶粉 1000g/袋 进口全脂成人奶粉 学生奶粉 澳大利亚进口',
            //             gooods_price:269,
            //             promotion:['拼购','领劵5-5']
            //         }
            //     }
            // }

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
    background-color: white;
    border-radius: 10px;
    margin-bottom: 7px;
  }
  .good_item_arrangement {
    width: 149px;
    margin: 0 12px;
  }
  .detail_style {
    width: 110px;
    margin: 12px 10px 12px 0;

  }

  .goodd_thumbnail{
    width: 100%;
    margin: 0 auto;
    display: block;
  }

  .good_text{
    height: 34px;
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
  .oversea_goods{
    width: 78px;
    height: 15px;
    background: url("../../assets/demo_pic/purchase_from_oversea.png") 0px 0px no-repeat;
    background-size: 100% 100%;
    display: inline-block;
  }

  .self_management_shop{
    width: 32px;
    height: 15px;
    background: url("../../assets/demo_pic/self_management_icon.png") 0px 0px no-repeat;
    background-size: 100% 100%;
    display: inline-block;
  }

  .promote_price{
    margin: 8px auto;
    text-align: left;
  }
  .promotion_info{
    font-size: 12px;
    padding: 0 5px;
    margin: 0 2.5px;
    background-color: rgba(255,85,0,0.05);
    border: 1px solid #F50;
    border-radius: 8px;
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
