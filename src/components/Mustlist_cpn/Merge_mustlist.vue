<template>
    <div class="merge_mustlist_container">
      <Must_pr_list :mustlist_block_info="gl_pr_list_info"></Must_pr_list>
    </div>
</template>

<script>
  import Must_pr_list from '@/components/Mustlist_cpn/Must_pr_list.vue'
    export default {
        name: "Merge_mustlist",
        components: {
            Must_pr_list
        },
        props: {
            gl_pr_list_info: {
                type: Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>

</style>
