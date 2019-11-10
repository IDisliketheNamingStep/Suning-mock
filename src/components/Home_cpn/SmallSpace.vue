<template>
  <div class="merge_big_small">
    <div class="small_space">
      <div class="ss_text_area">
        <p>
          <span class="ss_tittle" :style="small_block_info.tittle_style">{{small_block_info.elementName}}</span>
        </p>
        <p>
          <span class="ss_desc" :style="small_block_info.desc_style">{{small_block_info.elementDesc}}</span>
        </p>
      </div>
      <div class="ss_pic_area">
        <img v-lazy="'https://image1.suning.cn' + (small_block_info.imgUrl || small_block_info.picUrl) + '?from=mobile'" alt="">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SmallSpace",
        props:{
            small_block_info:{
                type:Object,
                default(){
                    return {
                        space_type:'big_space',
                        tittle:'新品首发', tittle_style:'',
                        desc:'万物皆可盘',desc_style:'',
                        promotion_text:'大牌新品抢先',promotion_style:'',
                        time_count_down:{hour:'01',minite:'12',seconds:'47'},time_count_down_style:'',
                        pic_src: []
                    }
                }
            }
        }
    }
</script>

<style scoped>

  .small_space{
    position: relative;
    float: left;
    width: 86px;
    height: 124px;
    text-indent: 6px;
    background-color: white;
    border-right: 1px solid rgb(242,242,242);
    border-bottom: 1px solid rgb(242,242,242);
  }

  .ss_text_area{
    width: 75px;
    margin: 0 auto;
  }

  .ss_tittle{
    font-size: 16px;
    line-height: 20px;
  }
  .ss_desc{
    font-size: 12px;
    line-height: 15px;
    margin: 2px 0 12px;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .ss_pic_area{
    margin:6px auto;
    width: 70px;
    height: 70px;
  }

  .ss_pic_area img{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
</style>

