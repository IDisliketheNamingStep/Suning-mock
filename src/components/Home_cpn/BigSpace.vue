<template>
    <div class="big_space show_goods">
      <div class="click_area" v-if="goods_or_mask">
        <p>
          <span class="bs_tittle">{{big_space_block_info.elementName}}</span>
          <em class="bs_promotion big_space_promotion" v-if="proShowMark">{{big_space_block_info.extMap.md}}</em>
        </p>
        <p>
          <span class="bs_desc" :style="big_space_block_info.desc_style">{{big_space_block_info.elementDesc}}</span>
<!--          <em v-html></em>-->
        </p>
        <div class="bs_pic_area">
          <div class="img_container">
            <!--          <p class="bs_good_price">{{item.price}}</p>-->
            <img v-lazy="'https://image1.suning.cn' + big_space_block_info.picUrl + '?format=_is_1242w_100h.webp'" alt="">
            <img v-lazy="'https://image1.suning.cn' + big_space_block_info.imgUrl + '?format=_is_200w_200h.webp'" alt="">
          </div>
        </div>
      </div>

      <div class="big_space black_cover" v-else>
        <!--        https://image2.suning.cn/uimg/MFS/show/154238025457325334.jpg_0-0-1280-853a%7C_540w_360h_2e-->
        <img v-lazy="'https://image2.suning.cn' + big_space_block_info.picUrl + '_0-0-1280-853a%7C_540w_360h_2e'" alt="" class="mask_pic">
        <div class="mask_tittle"><p>{{big_space_block_info.elementName}}</p></div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "BigSpace",
        computed:{
            // 促销信息展示标志
            proShowMark() {
                if (this.big_space_block_info.extMap !== undefined) {
                    if (this.big_space_block_info.extMap.md !== undefined) {
                        return true
                    }
                }
                return false
            }
        },
        props:{
            goods_or_mask: {
                type: Boolean,
                default() {
                    return true
                }
            },
            big_space_block_info:{
                type:Object,
                default(){
                    return {}
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

  .big_space_promotion{
    margin-left: 3px;
    border-radius: 7px;
    line-height: 14px;
    font-size: 12px;
    padding: 0 3px;
    color: rgba(255,255,255,0.8);
    background-image: linear-gradient(-90deg,#fa3b26 3%,#ff4d8a 96%)
  }
  .big_space_promotion:before{
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
    display: flex;
    flex-flow: row nowrap;
  }

  .img_container img{
    display: inline-block;
    margin: 0 auto;
    width: 40.25%;
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
