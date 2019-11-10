<template>
    <div class="head_bar">
      <div class="hhbar_container">
        <div class="hh_left">
          <slot name="left">
          <a :href="head_bar_info.left.llink"><img :src="head_bar_info.left.bg_img" alt="" width="100%" height="100%"></a>
          </slot>
        </div>

        <div class="hh_center">
          <slot name="center">
          <input type="text" placeholder="商品/店铺">
          </slot>
        </div>

        <div class="hh_right">
          <slot name="right">
            登录
          </slot>
        </div>

      </div>
    </div>
</template>

<script>
    export default {
        name: "HeadBar",
        props:{
            head_bar_info:{
                type:Object,
                default(){
                    return {
                        left:{bg_img:require('@/assets/demo_pic/homepage_category.png'),llink:'#'},
                        center:{bg_img:require('@/assets/demo_pic/homepage_category.png'),clink:'#'},
                        right:{rlink:'#'}
                    }
                }
            }
        }

    }
</script>

<style scoped>

  .head_bar{
    width: 375px;
    height: 44px;
    margin: 0 auto;
  }

  .hhbar_container{
    display: flex;
    flex-flow: row nowrap;
    position: fixed;
    top: 0;
    width: 375px;
    height: 44px;
    background-color: rgba(255,189,0,0.5);
  }
  .hh_left{
    width: 22px;
    height: 35px;
    margin: 5px 13px 4px 12px;
  }


  .hh_center{
    flex: 1;
  }

  input{
    width: 100%;
    height: 30px;
    border: none;
    background-color: rgba(255,255,255,0.8);
    border-radius: 15px;
    margin-top: 7px;
    text-indent: 30px;
    outline: none;
    background-image: url("../../assets/demo_pic/hh_search.png");
    background-repeat: no-repeat;
    background-position: 6px 6px;
    background-size: 18px;
  }

  .hh_right{
    width: 37.5px;
    height: 35px;
    margin: 16px 5px 0;
    font-size: 12px;
    color: white;
  }

</style>
