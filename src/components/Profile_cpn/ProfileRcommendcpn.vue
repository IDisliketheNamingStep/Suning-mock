<template>
  <div >
    <img src="@/assets/demo_pic/guess_you_like.webp" alt="" class="guess_you_like_pic">
    <div class="recommended_cpn_containner">
      <ProfileRcommended v-for="(recom,index) in recoms_block_info" :key="index" :recommended_item_info="recom"></ProfileRcommended>
    </div>

  </div>

</template>

<script>
    import ProfileRcommended from './ProfileRcommended.vue'
    export default {
        name: 'ProfileRcommendcpn',
        props: {
            recoms_block_info: {
                type:Array,
                default() {
                    return []
                }
            }
        },
        components: {
            ProfileRcommended

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
