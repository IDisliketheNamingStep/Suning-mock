<template>
    <div class="cate_cascade2_container">

      <div class="cascade3_block" v-for="(item, C1_index) in cat_cascad2_info.cate_casd2_block_info" :key="C1_index">
        <div class="shadow_line"></div>
        <div class="cascade2_tittle" :style="cat_cascad2_info.cascade2_tittle_style">{{item.cascade2_tittle}}</div>
        <p class="cascade2_tittle_space"></p>
        <div class="display_zone">
          <div class="cat_show_good_block" v-for="(goodinfo, C2_index) in item.cascade2_goods_list" :key="C2_index">
            <img :src="goodinfo.pic_url" alt="" class="cate_pic">
            <div>{{goodinfo.item_name}}</div>
          </div>
        </div>
      </div>

      <img :src="cat_cascad2_info.cate_casd2_bottom_pic" alt="" class="cate_cascad2_bottom">

    </div>
</template>

<script>
    export default {
        name: "CatShowGoods",
        props: {
            cat_cascad2_info: {
                type:Object,
                default() {
                    return {cate_casd2_bottom_pic: require('@/assets/demo_pic/cate_casd2_bottom_pic.jpg'),
                        cate_casd2_block_info:[{
                        cascade2_tittle:'电脑整机',
                        cascade2_tittle_style:'',
                        cascade2_goods_list: [{pic_url:require('@/assets/demo_pic/cat_demo_pic9.jpg'), item_name:'游戏本',enter_link:'#'},
                            {pic_url:require('@/assets/demo_pic/cat_demo_pic8.jpg'), item_name:'笔记本',enter_link:'#'},
                            {pic_url:require('@/assets/demo_pic/cat_demo_pic7.jpg'), item_name:'轻薄本',enter_link:'#'},
                            {pic_url:require('@/assets/demo_pic/cat_demo_pic6.jpg'), item_name:'台式机',enter_link:'#'},
                            {pic_url:require('@/assets/demo_pic/cat_demo_pic5.jpg'), item_name:'一体机',enter_link:'#'},
                            {pic_url:require('@/assets/demo_pic/cat_demo_pic4.jpg'), item_name:'商用台式机',enter_link:'#'},
                            {pic_url:require('@/assets/demo_pic/cat_demo_pic3.jpg'), item_name:'创意设计PC',enter_link:'#'},
                            {pic_url:require('@/assets/demo_pic/cat_demo_pic2.jpg'), item_name:'组装机',enter_link:'#'},
                            {pic_url:require('@/assets/demo_pic/cat_demo_pic.jpg'), item_name:'精选好店',enter_link:'#'}]
                    }]}
                }
            }
        }
    }
</script>

<style scoped>
  .cate_cascade2_container {
    position: fixed;
    top: 44px;
    bottom: 0;
    overflow-y: auto;
    overflow-x: hidden;
    width: 270px;
  }
  /*====================隐藏滑动条==========================*/
  .cate_cascade2_container::-webkit-scrollbar{
    display: none;
  }
  .cascade3_block{
    position: relative;
    width: 100%;
    margin: 0 auto;
  }

  /*================分割线样式====================*/
  .shadow_line{
    position: absolute;
    width: 100%;
    height: 8px;
    border-bottom: 1px solid rgb(242,242,242);
  }
  .cascade2_tittle_space {
    margin: 30px 0 20px;
  }
  .cascade2_tittle {
    color: #ff6600;
    font-size: 12px;
    position: absolute;
    background-color: white;
    padding:0 3px;
  }

  .display_zone {
    display: flex;
    flex-flow: row wrap;
  }

  /*=============展示小区间样式====================*/
  .cat_show_good_block{
    width: 90px;
    height: 85px;
    background-color: white;
    text-align: center;
    color: #666666;
    font-size: 12px;
  }

  /*================展示图片样式=============================*/
  .cate_pic{
    display: block;
    width: 60px;
    height: 60px;
    margin: 0 auto 5px;
  }


  /*====================底部进入分区图片============================*/
  .cate_cascad2_bottom{
    width: 100%;
    height: 35px;
    margin: 20px auto 10px;

  }


</style>
