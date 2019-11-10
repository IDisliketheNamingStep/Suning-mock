<template>
  <div class="ShopHeadBar_container">
    <div class="ShopHeadBar_content">
      <div class="bottom_area">
        <div class="bleft" @click="routeToSearch">
          <div class="arrowIcon"></div>
          <div class="searchIcon"></div>
        </div>
        <div class="bright">
          <ul>
            <li class="shop_guide_path" v-for="(item, index) in shopGuideList" :key="index" @click="change_shopGuide_active_mark(index)">
              <span :class="{shopGuide_active: shopGuide_active_mark === index}">
                {{item}}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "ShopFlowingHeadBar",
        data() {
            return {
                shopGuide_active_mark: 0
            }
        },
        props: {
            shopGuideList: {
                type: Array,
                default() {
                    return ['首页', '商品', '热销', '上新']
                }
            }
        },
        methods: {
            routeToSearch() {
                this.$router.replace('/search_route_path')
            },
            change_shopGuide_active_mark (index) {
                this.shopGuide_active_mark = index
            }
        }
    }
</script>

<style scoped>
  .ShopHeadBar_container {
    width: 375px;
    overflow: hidden;
    margin: 0 auto;
  }
  .ShopHeadBar_content {
    height: 36px;
    width: 100%;
    color: #333333;
    position: fixed;
    top: 0;
    background-color: white;
  }
  .bottom_area {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .bleft {
    margin-left: 5px;
  }
  .arrowIcon, .searchIcon {
    width: 32px;
    height: 32px;
    background: url("../../assets/ShopUnit/icon_list.png") -9px -415px no-repeat;
    background-size: 50px auto;
    float: left;
    margin: 2px 5px 0;
  }
  .searchIcon {
    background: url("../../assets/ShopUnit/icon_list.png") -9px -174px no-repeat;
    background-size: 50px auto;
  }
  .bright {
    flex: 1;
  }
  .bright ul {
    text-align: left;
    padding-left: 12px;
    padding-bottom: 10px;
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
  }
  .shopGuide_active {
    font-weight: bold;
    color: #ff6600;
    border-bottom: 2px solid #ff6600;
  }


</style>
