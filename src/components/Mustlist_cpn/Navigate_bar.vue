<template>
    <div class="mustlist_navbar_container">
      <div class="overflow_box">
        <div :class="{nav_item_box:true, nav_active_box:index === nav_active_mark}" v-for="(item,index) in mustListNavInfo" :key="index" @click="nav_active_change(item.enrollCateId,index)">
          <img :src="item.extInfo.bgImgUrl" alt="" class="nav_item_pic">
<!--          <img :src="item.pic_url" alt="" class="nav_item_pic">-->
<!--          <p>{{item.m_nav_tittle}}</p>-->
          <p>{{item.enrollCateName}}</p>
        </div>
      </div>
    </div>

</template>

<script>
    export default {
        name: "Navigate_bar",
        data() {
            return {
                nav_active_mark: 0,
            }
        },
        props: {
            mustListNavInfo: Array,
            mustlist_nav_items: {
                type: Array,
                default() {
                    return []
                    // {pic_url:require('@/assets/mustlist_nav_pic/picked.png'), m_nav_tittle:'精选', m_nav_link:'#'},
                    // {pic_url:require('@/assets/mustlist_nav_pic/家电.png'), m_nav_tittle:'家电', m_nav_link:'#'},
                    // {pic_url:require('@/assets/mustlist_nav_pic/酷机.png'), m_nav_tittle:'酷机', m_nav_link:'#'},
                    // {pic_url:require('@/assets/mustlist_nav_pic/超市.png'), m_nav_tittle:'超市', m_nav_link:'#'},
                    // {pic_url:require('@/assets/mustlist_nav_pic/穿搭.png'), m_nav_tittle:'穿搭', m_nav_link:'#'},
                    // {pic_url:require('@/assets/mustlist_nav_pic/置家.png'), m_nav_tittle:'置家', m_nav_link:'#'},
                    // {pic_url:require('@/assets/mustlist_nav_pic/育儿.png'), m_nav_tittle:'育儿', m_nav_link:'#'},
                    // {pic_url:require('@/assets/mustlist_nav_pic/办公.png'), m_nav_tittle:'办公', m_nav_link:'#'},
                    // {pic_url:require('@/assets/mustlist_nav_pic/篮球.png'), m_nav_tittle:'运动', m_nav_link:'#'},
                    // {pic_url:require('@/assets/mustlist_nav_pic/出行.png'), m_nav_tittle:'出行', m_nav_link:'#'}
                }
            }
        },

        methods: {
            nav_active_change(enrollCateId, index) {
                this.nav_active_mark = index
                this.$emit('showareainfochange', {enrollCateId,index})
            },
            // 浮动导航条与固定导航条一致性
            navsame(index) {
                if (this.nav_active_mark === index) {
                    return
                }
                this.nav_active_mark = index
            }
        }
    }
</script>

<style scoped>
  .mustlist_navbar_container {
    width: 375px;
    height: 58px;
    overflow-x: scroll;
    margin: 0 auto;
  }
  .mustlist_navbar_container::-webkit-scrollbar{
    display: none;
  }

  .overflow_box {
    width: 750px;
    height: 58px;
    display: flex;
  }

  .nav_item_box {
    width: 75px;
    height: 58px;
    background-color: rgb(255,52,45);
  }
  .nav_active_box {
    background-color: rgb(205,0,49);
  }

  .nav_item_box p{
    font-size: 15px;
    color: white;
    text-align: center;
  }

  .nav_item_pic{
    width: 25px;
    height: 25px;
    display: block;
    margin: 5px auto;
  }

</style>
