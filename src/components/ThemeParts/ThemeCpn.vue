<template>
  <div class="theme_part">
    <img :src="theme_block_info.title_image" alt="" class="theme_tittle_pic">

    <Merge_big_mall v-for="(item,index) in theme_block_info.itemList" :key="index" :merge_big_small_block_info="item"></Merge_big_mall>
  </div>

</template>

<script>
import Merge_big_mall from '@/components/Home_cpn/Merge_big_small.vue'
export default {
  name: 'ThemeCpn',
  props: {
      theme_block_info: {
        type:Object,
          default() {
            return {
              theme_tittle_pic_src:require('@/assets/demo_pic/theme_tittle_demo_pic.webp'),
              theme_block_goods_info: [
                  {space_type:'big_space',
                      tittle:'新品首发', tittle_style:'',
                      desc:'万物皆可盘',desc_style:'',
                      promotion_text:'大牌新品抢先',promotion_style:'',
                      time_count_down:{hour:'01',minite:'12',seconds:'47'},time_count_down_style:'',
                      pic_src:[{pic_url:require('@/assets/demo_pic/big_space_demo_pic_1.webp'),price:1699},
                          {pic_url:require('@/assets/demo_pic/big_space_demo_pic_2.webp'),price:2099},
                          {pic_url:require('@/assets/demo_pic/big_space_demo_pic_3.jpg'),price:699}]},

                  {space_type:'small_space',
                      tittle:'苏宁数码', tittle_style:'color: #333',
                      desc:'爆款直降400',desc_style:'color: #999',
                      pic_src:require('@/assets/demo_pic/small_space_demo_pic.webp')},

                  {space_type:'small_space',
                      tittle:'苏宁数码', tittle_style:'color: #333',
                      desc:'爆款直降400',desc_style:'color: #999',
                      pic_src:require('@/assets/demo_pic/small_space_demo_pic.webp')},

                  {space_type:'small_space',
                      tittle:'苏宁数码', tittle_style:'color: #333',
                      desc:'爆款直降400',desc_style:'color: #999',
                      pic_src:require('@/assets/demo_pic/small_space_demo_pic.webp')},

                  {space_type:'small_space',
                      tittle:'苏宁数码', tittle_style:'color: #333',
                      desc:'爆款直降400',desc_style:'color: #999',
                      pic_src:require('@/assets/demo_pic/small_space_demo_pic.webp')},

                  {space_type:'big_space',
                      tittle:'新品首发', tittle_style:'',
                      desc:'万物皆可盘',desc_style:'',
                      promotion_text:'大牌新品抢先',promotion_style:'',
                      time_count_down:{hour:'01',minite:'12',seconds:'47'},time_count_down_style:'',
                      pic_src:[{pic_url:require('@/assets/demo_pic/big_space_demo_pic_1.webp'),price:1699},
                          {pic_url:require('@/assets/demo_pic/big_space_demo_pic_2.webp'),price:2099},
                          {pic_url:require('@/assets/demo_pic/big_space_demo_pic_3.jpg'),price:699}]}
              ]
            }
          }
      }
  },
  components: {
    Merge_big_mall
  }
}
</script>

<style scoped>
  .theme_part{
    width: 351px;
    margin: 0 auto;
    border-radius: 10px;
    overflow: hidden;
  }

  .theme_tittle_pic{
    width: 100%;
  }

</style>
