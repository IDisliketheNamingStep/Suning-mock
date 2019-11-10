<template>
  <div >
    <img src="@/assets/demo_pic/guess_you_like.webp" alt="" class="guess_you_like_pic" v-if="promotion_show_mark">
    <div class="recommended_cpn_containner">
      <RecommendedItem v-for="(recom,index) in recoms_block_info" :key="index" :recommended_item_info="recom"></RecommendedItem>
    </div>

  </div>

</template>

<script>
    import RecommendedItem from './RecommendedItem.vue'
    export default {
        name: 'rcpncp',
        computed: {
            promotion_show_mark() {
                return this.$route.path === '/'
            }
        },
        props: {
            recoms_block_info: {
                type:Array,
                default() {
                    return []
                }
            }
        },
        components: {
            RecommendedItem
        },
        mounted() {
            console.log(this.$route.path,'+')
        }
    }
</script>

<style scoped>
  .guess_you_like_pic {
    width: 375px;
  }
  .recommended_cpn_containner {
    width: 375px;
    margin: 0 auto;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
  }

</style>
