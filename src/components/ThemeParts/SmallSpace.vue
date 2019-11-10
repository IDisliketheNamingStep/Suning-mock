<template>
    <div class="small_space">
      <p>
        <span class="ss_tittle" :style="small_space_block_info.tittle_style">{{small_space_block_info.tittle}}</span>
        <em class="ss_promotion" :style="small_space_block_info.promotion_style">{{small_space_block_info.promotion_text}}</em>
      </p>
      <p>
        <span class="ss_desc" :style="small_space_block_info.desc_style">{{small_space_block_info.desc}}</span>
      </p>
      <div class="ss_pic_area">
        <img :src="small_space_block_info.pic_src" alt="">
      </div>
    </div>
</template>

<script>
    export default {
        name: "SmallSpace",
        props:{
            small_space_block_info:{
                type:Object,
                default(){
                    return {tittle:'苏宁数码', tittle_style:'color: #333',
                        desc:'爆款直降400',desc_style:'color: #999',
                        pic_src:require('@/assets/demo_pic/small_space_demo_pic.webp')
                            }
                        }}
                }

            }

</script>

<style scoped>
  .small_space{
    position: relative;
    float: left;
    width: 86px;
    height: 124px;
    text-indent: 10px;
    background-color: white;
    border-right: 1px solid rgb(242,242,242);
    border-bottom: 1px solid rgb(242,242,242);
  }

  .ss_tittle{
    font-size: 16px;
  }
  .ss_desc{
    font-size: 12px;
    margin: 2px 0 12px;
  }

  .ss_pic_area{
    margin:6px auto;
    width: 70px;
    height: 70px;
    background-color: #2c3e50;
  }

  .ss_pic_area img{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

</style>
