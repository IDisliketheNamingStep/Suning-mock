<template>
  <div class="big_space show_goods">
    <div class="click_area" v-if="goods_or_mask">
      <p>
        <span class="bs_tittle" :style="big_space_block_info.tittle_style">{{big_space_block_info.tittle}}</span>
        <em class="bs_promotion" :style="big_space_block_info.promotion_style">{{big_space_block_info.promotion_text}}</em>
      </p>
      <p>
        <span class="bs_desc" :style="big_space_block_info.desc_style">{{big_space_block_info.desc}}</span>
        <em v-html></em>
      </p>
      <div class="bs_pic_area">
        <div class="img_container" v-for="(item,index) in big_space_block_info.pic_src" :key="index">
          <img :src="item.pic_url" alt="">
          <p class="bs_good_price">{{item.price}}</p>
        </div>
      </div>
    </div>

    <div class="big_space black_cover" v-else>
      <img v-for="(item,index) in big_space_block_info.pic_src" :key="index" :src="item.pic_url" alt="" class="mask_pic">
      <div class="mask_tittle"><p>{{big_space_block_info.tittle}}</p></div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "BigSpace",
        computed:{
            goods_or_mask(){
                return this.big_space_block_info.pic_src.length > 1;
            }
        },
        props:{
            // big_space_block_info:{
            //     type:Object,
            //     default(){
            //         return {tittle:'科技礼物，父母也该享受一番', tittle_style:'',
            //             pic_src:[{pic_url:require('@/assets/demo_pic/big_space_mask_demo_pic.jpg'),price:1699}]
            //            }
            //     }
            //
            // }
            big_space_block_info:{
                type:Object,
                default(){
                    return {tittle:'新品首发', tittle_style:'',
                        desc:'万物皆可盘',desc_style:'',
                        promotion_text:'大牌新品抢先',promotion_style:'',
                        time_count_down:{hour:'01',minite:'12',seconds:'47'},time_count_down_style:'',
                        pic_src:[{pic_url:require('@/assets/demo_pic/big_space_demo_pic_1.webp'),price:1699},
                            {pic_url:require('@/assets/demo_pic/big_space_demo_pic_2.webp'),price:2099},
                            {pic_url:require('@/assets/demo_pic/big_space_demo_pic_3.jpg'),price:699}]
                    }
                }
            }
        }

    }
</script>

<style scoped>
  .big_space{
    position: relative;
    float: left;
    width: 174px;
    height: 124px;
    text-indent: 10px;
    background-color:white;
    border-right: 1px solid rgb(242,242,242);
    border-bottom: 1px solid rgb(242,242,242);
  }
  .bs_tittle{
    font-size: 16px;
    color: #FF4950;
  }

  .bs_promotion{
    margin-left: 5px;
    border-radius: 7.5px;
    line-height: 15px;
    font-size: 12px;
    padding: 0 6px;
    color: rgba(255,255,255,0.8);
    background-image: linear-gradient(-90deg,#fa3b26 3%,#ff4d8a 96%)
  }
  .bs_promotion:before{
    content: '●';
    color: rgba(255,165,195,0.8);
  }

  .bs_desc{
    font-size: 12px;
    margin: 2px 0 12px;
    color: #999;
  }

  .bs_pic_area{
    display: flex;
    margin-top: 5px;
  }

  .img_container{
    flex: 1;
  }

  .img_container img{
    display: flex;
    margin: 0 auto;
    width: 86.23%;
  }
  .bs_good_price{
    font-size: 13px;
    color: #F40;
  }
  .bs_good_price:before{
    content: '￥';
  }

  .black_cover{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .black_cover img{
    width: 100%;
  }

  .mask_tittle{
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 15px;
    text-indent: 0;
    color: white;
    background-image: linear-gradient(0,transparent 0,rgba(0,0,0,0.4) 100%);
  }

  .mask_tittle p{
    white-space: normal;
    margin: 5px 16px;
  }


</style>
