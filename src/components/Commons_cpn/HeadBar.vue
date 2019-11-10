<template>
    <div class="headbar_container">
      <div class="detail_page_nav" style="display: flex">
<!--        <a href="javascript:history.back(1)" class="goback"></a>-->
        <span @click="goBack" class="goback"></span>
        <span >
          <input type="text" class="search_keywords" :placeholder="searchPlaceholder" @focusin="changePlaceoldr" @focusout="setDefaultHolder">
        </span>
<!--        <div class="nav_right_getmore" style="background-color: yellowgreen"></div>-->
        <div class="right_area" style="font-size: 15px;padding-right: 14px;line-height: 44px">搜索</div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "HeadBar",
        props: {
            searchPlaceholder: {
                type: String,
                default() {
                    return ''
                }
            }
        },
        methods: {
            changePlaceoldr(s) {
                s.target.placeholder = '请输入您想找的商品'
                console.log(s.target.placeholder);
            },
            setDefaultHolder(s) {
                s.target.placeholder = this.searchPlaceholder
            },
            goBack() {
                this.$router.push('/')
            }
        }
    }
</script>

<style scoped>
  /*顶部导航栏*/
  .detail_page_nav {
    height: 44px;
    width: 100%;
    background: url("../../assets/sn_nav_demo_pic/nav-back.png") 7px 7px no-repeat white;
    background-size: 30px;
    box-shadow: 0 1px 1px #DCDCDC;
  }
  .goback {
    display: inline-block;
    width: 30px;
    height: 44px;
    margin-left: 7px;
    float: left;
  }
  span{
    font-size: 20px;
    line-height: 42px;
    flex: 1;
    display: flex
  }
  input {
    padding: 9px 0 7px;
    display: block;
    line-height: 14px;
    text-indent: 25px;
    font-size: 14px;
    margin: 7px 10px;
    flex: 1;
    border-radius: 3px;
    background: url("../../assets/demo_pic/搜索页放大镜.png") 9px 10px no-repeat rgb(238,238,238);
    background-size: 12px 12px;
  }
  .right_area {
   font-size: 15px;
    padding-right: 14px;
    line-height: 44px;
  }
  /*.nav_right_getmore {*/
  /*  width: 30px;*/
  /*  height: 30px;*/
  /*  float: right;*/
  /*  margin:7px 7px 0 0;*/
  /*  border-radius: 50%;*/
  /*  background: url("../../assets/sn_nav_demo_pic/nav-more.png") 0px 0px no-repeat;*/
  /*  background-size: 30px;*/
  /*}*/

</style>
