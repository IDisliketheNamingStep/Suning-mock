<template>
  <div class="category_container">

<!--    ====================顶部搜索=========================-->
    <HeadBar>
      <span slot="left" @click="back_to_homepage"><</span>
      <span slot="right" @click="back_to_homepage"></span>
    </HeadBar>

<!--    ===================右侧展示====================-->
    <div class="category_content_area">
      <div class="cat_left"></div>
      <div class="cat_right">
        <div class="align_center" >
          <CatShowGoods :cat_cascad2_info="cat_cascad2_info_array[active_mark]"></CatShowGoods>
        </div>
      </div>

<!--      ===============左侧导航===================-->
      <div class="cat_tittle">
          <div v-for="(item, index) in category_kind_ads" :key="index" :class="{kindads_item: true, active_style:active_mark  === index}" @click="cascade1_click(index)">
            {{item}}
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadBar from '@/components/Home_cpn/HeadBar.vue'
import CatShowGoods from '@/components/Category_cpn/CatShowGoods.vue'
export default {
    name: "Category",
    data () {
        return {
            active_mark: 0
        }
    },
    components: {
        HeadBar, CatShowGoods
    },
    props: {
        category_kind_ads:{
            type: Array,
            default() {
                return ['热门推荐', '手机数码', '大家电', '电脑办公', '厨卫家电', '生活家电', '食品酒水', '苏宁国际', '珠宝首饰',
                    '家居家纺', '居家生活', '品质男装', '运动户外', '家装建材', '厨具水具', '二手优品', '苏宁生鲜', '奶粉尿裤',
                    '中央空调', '智能数码', '钟表眼镜', '品质男鞋', '流行女装', '精品女鞋', '汽车生活', '人群偏爱', '美妆护肤',
                    '个人护理', '童装玩具', '皮具箱包', '内衣配饰', '图书音像', '苏宁极物', '礼品乐器', '艺术陶瓷', '医药馆', '特色馆',
                    '苏宁服务', '苏宁金融', '苏宁有房']
            }
        },
        // ==================假数据======================
        cat_cascad2_info_array:{
            type: Array,
            default() {
                return [
                    {cate_casd2_bottom_pic: require('@/assets/demo_pic/cate_casd2_bottom_pic.jpg'),
                        cate_casd2_block_info:[
                        {c1_name:'热门推荐',
                        cascade2_tittle:'电脑整机',
                        cascade2_tittle_style:'',
                        cascade2_goods_list: [{pic_url:require('@/assets/demo_pic/cat_demo_pic.jpg'), item_name:'游戏本',enter_link:'#'},
                          {pic_url:require('@/assets/demo_pic/cat_demo_pic2.jpg'), item_name:'笔记本',enter_link:'#'},
                          {pic_url:require('@/assets/demo_pic/cat_demo_pic3.jpg'), item_name:'轻薄本',enter_link:'#'},
                          {pic_url:require('@/assets/demo_pic/cat_demo_pic4.jpg'), item_name:'台式机',enter_link:'#'},
                          {pic_url:require('@/assets/demo_pic/cat_demo_pic5.jpg'), item_name:'一体机',enter_link:'#'},
                          {pic_url:require('@/assets/demo_pic/cat_demo_pic6.jpg'), item_name:'商用台式机',enter_link:'#'},
                          {pic_url:require('@/assets/demo_pic/cat_demo_pic7.jpg'), item_name:'创意设计PC',enter_link:'#'},
                          {pic_url:require('@/assets/demo_pic/cat_demo_pic8.jpg'), item_name:'组装机',enter_link:'#'},
                          {pic_url:require('@/assets/demo_pic/cat_demo_pic9.jpg'), item_name:'精选好店',enter_link:'#'}]},

                        {cascade2_tittle:'电脑整机',
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
                        },

                        {c1_name:'热门推荐',
                            cascade2_tittle:'电脑整机',
                            cascade2_tittle_style:'',
                            cascade2_goods_list: [{pic_url:require('@/assets/demo_pic/cat_demo_pic.jpg'), item_name:'游戏本',enter_link:'#'},
                                {pic_url:require('@/assets/demo_pic/cat_demo_pic2.jpg'), item_name:'笔记本',enter_link:'#'},
                                {pic_url:require('@/assets/demo_pic/cat_demo_pic3.jpg'), item_name:'轻薄本',enter_link:'#'},
                                {pic_url:require('@/assets/demo_pic/cat_demo_pic4.jpg'), item_name:'台式机',enter_link:'#'},
                                {pic_url:require('@/assets/demo_pic/cat_demo_pic5.jpg'), item_name:'一体机',enter_link:'#'},
                                {pic_url:require('@/assets/demo_pic/cat_demo_pic6.jpg'), item_name:'商用台式机',enter_link:'#'},
                                {pic_url:require('@/assets/demo_pic/cat_demo_pic7.jpg'), item_name:'创意设计PC',enter_link:'#'},
                                {pic_url:require('@/assets/demo_pic/cat_demo_pic8.jpg'), item_name:'组装机',enter_link:'#'},
                                {pic_url:require('@/assets/demo_pic/cat_demo_pic9.jpg'), item_name:'精选好店',enter_link:'#'}]}
                    ]},

                    {cate_casd2_bottom_pic: require('@/assets/demo_pic/cate_casd2_bottom_pic.jpg'),
                        cate_casd2_block_info: [
                        {c1_name:'热门推荐',
                        cascade2_tittle:'电脑整机',
                        cascade2_tittle_style:'',
                        cascade2_goods_list: [{pic_url:require('@/assets/demo_pic/cat_demo_pic.jpg'), item_name:'游戏本',enter_link:'#'},
                            {pic_url:require('@/assets/demo_pic/cat_demo_pic2.jpg'), item_name:'笔记本',enter_link:'#'},
                            {pic_url:require('@/assets/demo_pic/cat_demo_pic3.jpg'), item_name:'轻薄本',enter_link:'#'},
                            {pic_url:require('@/assets/demo_pic/cat_demo_pic4.jpg'), item_name:'台式机',enter_link:'#'},
                            {pic_url:require('@/assets/demo_pic/cat_demo_pic5.jpg'), item_name:'一体机',enter_link:'#'},
                            {pic_url:require('@/assets/demo_pic/cat_demo_pic6.jpg'), item_name:'商用台式机',enter_link:'#'},
                            {pic_url:require('@/assets/demo_pic/cat_demo_pic7.jpg'), item_name:'创意设计PC',enter_link:'#'},
                            {pic_url:require('@/assets/demo_pic/cat_demo_pic8.jpg'), item_name:'组装机',enter_link:'#'},
                            {pic_url:require('@/assets/demo_pic/cat_demo_pic9.jpg'), item_name:'精选好店',enter_link:'#'}]}]}
                ]
            }
        }
    },
    methods: {
        cascade1_click(index) {
            this.active_mark = index;
        },
        back_to_homepage() {
            this.$router.replace('/')
        }
    }
}
</script>

<style scoped>
  .category_container {

    width: 375px;
    margin: 0 auto;
    overflow: hidden;
  }

  .category_content_area {

    width: 100%;
    height: 100%;
    position: fixed;
    top:  44px;
    bottom: 49px;
    display: flex;
  }


  .cat_left {
    top: 44px;
    width: 87px;
  }

  .cat_right {
    width: 288px;
    top: 44px;
  }

  .align_center{
    width: 270px;
    margin: 0 auto;
  }

  .cat_tittle {
    position: fixed;
    width: 87px;
    bottom: 0px;
    top: 44px;
    overflow-y: auto;
    overflow-x: hidden;
  }

  /*====================隐藏滑动条==========================*/
  .cat_tittle::-webkit-scrollbar{
    display: none;
  }

  /*===================左侧导航普通样式=======================*/
  .kindads_item {
    font-size: 13px;
    line-height: 45px;
    text-align: center;
    width: 85px;
    height: 45px;
    border-right: 2px solid rgb(234,234,234);
    border-bottom: 2px solid rgb(234,234,234);
    color: #666666;
    background-color: #F4F4F4;
  }


  /*===================左侧导航Active样式=======================*/
  .active_style {
    font-size: 14px;
    width: 77px;
    border-left: 5px solid #ff6600;
    border-right: 5px solid white;
    background-color: white;
    color: #ff6600;
  }

</style>
