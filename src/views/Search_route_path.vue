<template>
    <div class="Search_route_path">
      <div class="Search_route_path_container">
        <HeadBar :searchPlaceholder="searchDefaultWord"></HeadBar>
        <SearchUnit class="search_unit" unit_tittle="热门搜索" :SearchUnit_info="hitSearch"></SearchUnit>
        <SearchUnit class="search_unit" unit_tittle="历史记录" :SearchUnit_info="searchHistory"></SearchUnit>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import HeadBar from '@/components/Commons_cpn/HeadBar.vue'
  import SearchUnit from '@/components/Search_unit/SearchUnit.vue'
    export default {
        name: "Search_route_path",
        data() {
            return {
                // 搜索热词
                hitSearch: null,
                // 用户搜索历史
                searchHistory: null,
                // 搜索框placeholder
                searchDefaultWord: null
            }
        },
        components: {
            HeadBar,SearchUnit
        },
        props: {
            info_for_search_unit: {
                type:Array,
                default() {
                    return [
                        {info_name: 'hit_keywords_info',
                        unit_tittle:'热门搜索',
                        uinit_keywords: [{keyword: '手机', isHit: false}, {keyword: '海尔箭牌联合会', isHit: true}, {keyword: '荣耀9X冰岛白', isHit: true},
                            {keyword: '冰箱', isHit: false}, {keyword: '女孩玩具', isHit: false}, {keyword: '美的空调', isHit: true},
                            {keyword: '奥克斯新品日', isHit: true}, {keyword: '飞天茅台酒', isHit: false}, {keyword: '电视', isHit: false},
                            {keyword: '笔记本', isHit: false}, {keyword: '热水器', isHit: false}, {keyword: '牛奶', isHit: false}]
                            },

                        {info_name: 'Search_history_info',
                            unit_tittle:'历史记录',
                            uinit_keywords: [{keyword: '儿童玩具', isHit: false}]
                        }]
                }
            }
        },
      methods: {
          //获取搜索热词与搜索框占位符
        getGuessLikeInfo() {
          let url1 = '/aaa1/ds//his/terminal/personalizedWordNew/7194426173-99999998-wap-156913720153348882-025-getHotWord.jsonp'
          axios.get(url1)
            .then((res1)=>{
              // 提取响应回来的json文件
              this.hitSearch = JSON.parse(res1.data.slice(11,-2))
              this.searchDefaultWord = JSON.parse(res1.data.slice(11,-2))
              this.hitSearch = this.hitSearch.rs.hotWord
              if (this.searchDefaultWord.rs.defaultWord.length < 1) {
                this.searchDefaultWord = ''
              } else {
                this.searchDefaultWord = this.searchDefaultWord.rs.defaultWord[0].word
              }
            })
            .catch((err1)=>{console.log(err1);})
        },
        //获取搜索历史
        getSearchHistory() {
          // https://ds.suning.com/ds/his/7194426173--0-hisautoComplateCallback_b27eb46e5b19d267d40bcc80e1c48d91.jsonp
          let url2 = '/aaa1/ds/his/7194426173--0-hisautoComplateCallback_b27eb46e5b19d267d40bcc80e1c48d91.jsonp'
          axios.get(url2)
            .then((res2)=>{
              // 提取响应回来的json文件
              this.searchHistory = JSON.parse(res2.data.slice(57,-2))
              this.searchHistory = this.searchHistory.words
            })
            .catch((err1)=>{console.log(err1);})
        }

      },
        created() {
            // 获取搜索热词与搜索历史
          this.getGuessLikeInfo()
          //获取搜索历史
          this.getSearchHistory()
        }
    }
</script>

<style scoped>
  .Search_route_path {
    width: 375px;
    margin: 0 auto;
  }
  .search_unit:last-child {
    border: none;
  }

</style>
