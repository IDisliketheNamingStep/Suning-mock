<template>
  <div class="theme_part">
    <!--    https://image2.suning.cn/uimg/cms/img/154416478781252783.png-->
    <img :src="'https://image2.suning.cn' + theme_block_info.title_image" alt="" class="theme_tittle_pic">
    <div class="container">
      <div class="content" v-for="(item, index) in theme_block_info.itemList" :key="index">
        <div v-for="(value, key) of item">

          <!--      两个bigSpace============================================================-->
          <div v-if="key === 'img2big_kw'">
            <BigSpace :big_space_block_info="value.tag[0]"></BigSpace>
            <BigSpace :big_space_block_info="value.tag[1]"></BigSpace>
          </div>

          <!--      一个bigSpace & 两个smallSpace===============================================-->
          <div v-if="key === 'l1r2_kw'">
            <BigSpace :big_space_block_info="value.tag[0]"></BigSpace>
            <SmallSpace :small_block_info="value.tag[1]"></SmallSpace>
            <SmallSpace :small_block_info="value.tag[2]"></SmallSpace>
          </div>

          <!--      一个mask & 一个bigSpace=========================================================-->
          <div v-if="key === 'left_img_floor'">
            <BigSpace :big_space_block_info="value.tag[0]" :goods_or_mask="goods_or_mask"></BigSpace>
            <BigSpace :big_space_block_info="value.tag[1]"></BigSpace>
          </div>

          <!--      四个smallSpace================================================================-->
          <div v-if="key === 's4_kw'">
            <smallSpace v-for="(sGoodArr, index) in value.tag" :key="index" :small_block_info="sGoodArr"></smallSpace>
          </div>

        </div>

      </div>
    </div>
  </div>

</template>

<script>
    import BigSpace from '@/components/Home_cpn/BigSpace.vue'
    import SmallSpace from '@/components/Home_cpn/SmallSpace.vue'
    export default {
        name: 'ThemeBlock',
        data() {
            return {
                goods_or_mask:false
            }
        },
        props: {
            theme_block_info: {
                type:Object,
                default() {
                    return {}
                }
            }
        },
        components: {
            BigSpace, SmallSpace
        }
    }
</script>

<style scoped>
  .theme_part{
    width: 351px;
    margin: 10px auto 0;
  }
  .container {
   border-radius: 10px;
    overflow: hidden;
  }

  .theme_tittle_pic{
    width: 100%;
  }

</style>

