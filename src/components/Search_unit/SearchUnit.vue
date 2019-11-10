<template>
  <div class="SearchUnit_container">
    <p class="tittle">{{unit_tittle}}</p>
    <div class="keywords_list_container">
<!--      <span :class="{uinit_keywords_list: true, isHit:item.isHit}" v-for="(item, index) in SearchUnit_info.uinit_keywords" :key="index">{{item.keyword}}</span>-->
      <span :class="{uinit_keywords_list: true, isHit: item.type === '2'}" v-for="(item, index) in SearchUnit_info" :key="index">{{item.word || item.keyname}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SearchUnit",
        props: {
            unit_tittle: {
                type: String,
                default() {
                    return ''
                }
            },
            SearchUnit_info: {
                type:Array,
                default() {
                    return []
                    // {
                    //     // unit_tittle:'热门搜索',
                    //     // uinit_keywords: [{keyword: '手机', isHit: false}, {keyword: '海尔箭牌联合会', isHit: true}, {keyword: '荣耀9X冰岛白', isHit: true},
                    //     //     {keyword: '冰箱', isHit: false}, {keyword: '女孩玩具', isHit: false}, {keyword: '美的空调', isHit: true},
                    //     //     {keyword: '奥克斯新品日', isHit: true}, {keyword: '飞天茅台酒', isHit: false}, {keyword: '电视', isHit: false},
                    //     //     {keyword: '笔记本', isHit: false}, {keyword: '热水器', isHit: false}, {keyword: '牛奶', isHit: false}]
                    // }
                }
            }
        }
    }
</script>

<style scoped>
  .SearchUnit_container {
   margin: 0 12px;
    border-bottom: 1px solid #DCDCDC;
    padding-bottom: 20px;
  }
  .tittle {
   margin: 20px 0 0;
    font-size: 15px;
    color: #999999;
  }
  .keywords_list_container {
   display: flex;
    flex-flow: row wrap;
  }
  .uinit_keywords_list {
    margin-right: 10px;
    display: inline-block;
    width: 100px;
    height: 30px;
    padding: 0 5px;
    line-height: 30px;
    margin-top: 10px;
    border-radius: 3px;
    font-size: 13px;
    background-color: rgb(242,242,242);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .uinit_keywords_list:nth-child(3n) {
    margin-right: 0;
  }
  .isHit {
    color: #ff6600;
  }

</style>
