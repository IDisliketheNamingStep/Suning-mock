<template>
  <div class="ShopHeadBar_container">
    <div class="ShopHeadBar_content">
      <div class="left_area" @click="toShopHomePage"></div>
      <div class="middle_area">
        <p class="shopname">上好佳苏宁自营旗舰店</p>
        <div class="shopreputation">
          <img class="shoptype" src="../../assets/ShopUnit/self_logo.png">
          <span class="fans_of_shop">1.0万粉丝</span>
        </div>
      </div>
      <div class="right_area" >
        <span class="add_follow">关注</span>
        <span class="three_dots_for_more">&nbsp;</span>
      </div>
<!--      非商品页bottom-->
      <div class="bottom_area" v-show="shopGuide_active_mark !== 1">
        <div class="bleft" @click="routeToSearch">
          <input type="text" placeholder="搜索">
        </div>
        <div class="bright">
          <ul>
            <li class="shop_guide_path" v-for="(item, index) in shopGuideList" :key="index" @click="change_shopGuide_active_mark(index)">
              <span :class="{shopGuide_active: shopGuide_active_mark === index}" @click="changeShopRoute(item.routePath)">
                {{item.text}}
              </span>
            </li>
          </ul>
        </div>
      </div>
<!--      商品页bottom-->
      <div class="bottom_area" v-show="shopGuide_active_mark === 1">
          <input type="text" placeholder="搜索店铺内商品" class="goodsPage">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ShopHeadBar",
        props: {
            shopGuide_active_mark: {
                type: Number,
                default() {
                 return null
                }
            },
            shopGuideList: {
                type: Array,
                default() {
                    // return ['首页', '商品', '热销', '上新']
                    return [{text: '首页', routePath:'/shophomepage'},
                        {text: '商品', routePath:'/shopgoodsdisplay'},
                        {text: '热销', routePath:'/shophitgoods'},
                        {text: '上新', routePath:'/shopnew'}]
                }
            }
        },
        methods: {
            routeToSearch() {
                this.$router.replace('/search_route_path')
            },
            toShopHomePage() {
                if (this.$route.path === '/shopgoodsdisplay') {
                    this.$router.replace('/shophomepage')
                    return
                }
                this.$router.go(-1)
            },
            changeShopRoute(path) {
                this.$router.push(path)
            }
        }
    }
</script>

<style scoped>
   .ShopHeadBar_container {
     width: 375px;
     overflow: hidden;
     margin: 0 auto;
     background: url("../../assets/ShopUnit/店铺置顶背景.jpg") no-repeat;
     background-size: 100% auto;
   }
  .ShopHeadBar_content {
    height: 94px;
    width: 100%;
    padding-top: 5px;
    position: relative;
    background-color: rgba(0,0,0,0.5);
  }
  .left_area {
    width: 32px;
    height: 32px;
    margin-left: 6px;
    float: left;
    background: url("../../assets/ShopUnit/icon_list.png") -8px -428px no-repeat;
    background-size: 148% auto;
  }
  .middle_area {
    float: left;
    margin-left: 6px;
  }
  .right_area {
    float: right;
    height: 24px;
  }
  .shopname {
    color: white;
    font-weight: bold;
    text-shadow: 1px 1px 1px black;
  }
  .shopreputation {
    height: 14px;
    margin-top: 10px;
  }
  .shopreputation img {
    height: 100%;
    display: block;
    float: left;
  }
  .fans_of_shop {
    line-height: 100%;
    color: white;
    font-weight: bold;
  }
  .add_follow {
    display: inline-block;
    width: 66.5px;
    height: 22px;
    color: white;
    line-height: 24px;
    text-indent: 18px;
    border: 1px solid white;
    border-radius: 12px;
    background: url("../../assets/ShopUnit/icon_collect2.png") 12px 5px no-repeat;
    background-size: 12px 12px;
    overflow: hidden;
  }
  .three_dots_for_more {
    width: 32px;
    height: 22px;
    margin: 0 9px;
    overflow: hidden;
    display: inline-block;
    background: url("../../assets/ShopUnit/icon_list.png") -8px -465px no-repeat;
    background-size: 148% auto;
    border: 1px solid rgba(255,255,255,0);
  }
  .bottom_area {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 35px;
    display: flex;
  }
  .bleft {
    margin-left: 5px;
  }
  .bleft input {
    width: 68px;
    height: 28px;
    border-radius:14px;
    text-indent: 32px;
    font-size: 13px;
    background: url("../../assets/ShopUnit/icon_list.png") -2px -440px no-repeat rgba(255,255,255,0.4);
    background-size: 40px auto;
  }
  .goodsPage {

    width: 100%;
    margin: 0 10px;
    height: 28px;
    border-radius:14px;
    text-indent: 32px;
    font-size: 13px;
    background: url("../../assets/ShopUnit/icon_list.png") -2px -440px no-repeat rgba(255,255,255,0.4);
    background-size: 40px auto;
  }
   .goodsPage::-ms-input-placeholder {
     color: white;
   }
   .goodsPage::-webkit-input-placeholder {
     color: white;
   }
   .goodsPage:-ms-input-placeholder {
     color: white;
   }
  .bright {
    flex: 1;
  }
  .bright ul {
    text-align: left;
    padding-left: 12px;
    padding-bottom: 10px;
    border-bottom: 1px solid white;
  }
  .bright li {
    display: inline-block;
    width: 56px;
    height: 20px;
    margin-top: 4px;
  }
   .bright span {
     padding-bottom: 3px;
     font-size: 14px;
     color: white;
   }
  .shopGuide_active {
    font-weight: bold;
    border-bottom: 2px solid white;
  }


</style>
