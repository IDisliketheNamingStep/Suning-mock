<template>
    <div class="scroll_to_top_container">
      <div class="little_icon_area">
        <div class="totop_content" @click="scroll_to_top0"></div>
        <div class="to_homepage_content" @click="to_homepage" v-if="show_controll">
          <img src="../../assets/Scroll_watch/我的返回主页.png" alt="" class="bkgrimg">
          <span class="router_change_text">主页</span>
        </div>
        <div class="to_search_content" @click="to_search" v-if="show_controll">
          <img src="../../assets/Scroll_watch/搜索浮动图.png" alt="" class="bkgrimg">
          <span class="router_change_text">搜索</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Scroll_to_top",
        computed: {
            show_controll() {
                return this.$route.path === '/profile'
            }
        },
        methods: {
            to_homepage() {

                this.$router.replace('/')
            },
            to_search() {
                this.$router.push('/search_route_path')
            },
            scroll_to_top0() {
                this.$parent.$refs.scroll_view.scrollTop = 0
            }
        }

    }
</script>

<style scoped>
  .scroll_to_top_container {
    width: 375px;
    margin: 0 auto;
  }

  .totop_content, .to_homepage_content, .to_search_content{
    position: fixed;
    bottom: 75px;
    right: 14px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgb(91,97,103);
    z-index: 1;
  }

  .totop_content {
    background:url("../../assets/Scroll_watch/scroll_to_top.png") center no-repeat rgb(91,97,103);
    background-size: 15px 19px;
  }
  .to_search_content {
    color: white;
    left: 14px;
  }

  .to_homepage_content {
    color: white;
    left: 14px;
    bottom: 125px;
  }
  .bkgrimg {
    width: 18px;
    display: block;
    margin: 2px auto;
  }
</style>
