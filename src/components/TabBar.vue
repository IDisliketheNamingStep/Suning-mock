<template>
  <div class="tab_bar_container">
    <div class="tab_bar">
      <div class="tab_bar_item" v-for="(item,index) in tabbar_item_info" :key="index" @click="route_to_profile(index)" v-if="isHomepage">
        <img :src="'https://image1.suning.cn' + item.picUrl + '?from=mobile'" :alt="item.elementName" style="margin: 3px auto 0; width: 28px; height: 28px;">
        <div style="">{{item.elementName}}</div>
      </div>
      <div class="tab_bar_item" v-for="(item,index) in tabbar_item_info" :key="index" @click="route_to_profile(index)" v-if="!isHomepage">
        <img :src="item.pic_url" :alt="item.elementName" style="margin: 7px auto 0; width: 30px; height: 35px;">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "TabBar",
  data() {
      return {
          // pathList: ['/', '/category', '/mustlist', '/chart', '/profile']
      }
  },
  computed: {
    isHomepage() {
        return this.$route.path === '/'
    }
  },
  props: {
      pathList: {
          type: Array,
          default() {
              return ['/', '/category', '/mustlist', '/chart', '/profile']
          }
      },
    tabbar_item_info:{
        type:Array,
        default(){
            return
            // return [[{picUrl:require("../assets/tabbaricon/homeicon.png"), tabname:'首页',path:'/'},
            //     {picUrl:require("../assets/tabbaricon/category_icon.png"), tabname:'分类',path:'/category'},
            //     {picUrl:require("../assets/tabbaricon/shopping_list_icon.png"), tabname:'必抢清单',path:'/mustlist'},
            //     {picUrl:require("../assets/tabbaricon/shopping_chart_icon.png"), tabname:'购物车',path:'/chart'},
            //     {picUrl:require("../assets/tabbaricon/profile_icon.png"), tabname:'我的易购',path:'/profile'}]]
            //     return {tabbar_type: 'pic_text',
            //     tabbar_style: {img_style: 'margin: 3px auto 0; width: 28px; height: 28px;', text_style: ''},
            //     tabbar_pic_text: [{pic_url:require("../assets/tabbaricon/homeicon.png"), tabname:'首页',path:'/'},
            //         {pic_url:require("../assets/tabbaricon/category_icon.png"), tabname:'分类',path:'/category'},
            //         {pic_url:require("../assets/tabbaricon/shopping_list_icon.png"), tabname:'必抢清单',path:'/mustlist'},
            //         {pic_url:require("../assets/tabbaricon/shopping_chart_icon.png"), tabname:'购物车',path:'/chart'},
            //         {pic_url:require("../assets/tabbaricon/profile_icon.png"), tabname:'我的易购',path:'/profile'}]}

        }
    }
  },
  methods:{
    route_to_profile(index){
        if(this.$route.path === this.pathList[index]) {
            return
        }
        this.$router.replace(this.pathList[index])
    }
  }
}
</script>

<style scoped>
  .tab_bar_container{
    width: 375px;
    margin: 0 auto;
  }
  .tab_bar{
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    position: fixed;
    bottom: 0;
    width: 375px;
    height: 48px;
    background-color: white;
    border-top: 1px solid rgb(238,238,238);
  }

  .tab_bar_item{
    flex: 1;
  }

  .tab_bar img{
    display: block;
  }
  .tab_bar div{
    font-size: 12px;
  }
</style>
