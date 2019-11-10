<template>
  <div class="enter_list" :style="enter_bg">
    <ul class="enter_wrapper">
      <li :class="{enter_list_item: true, profile_enter_list_item: fiveOrFour === 'four'}" v-for="(item,index) in enter_list" :key="index" v-if="isProfile">
        <img :src="item.pic_url? item.pic_url : ('https://image2.suning.cn' + item.tag[0].picUrl)" alt="" class="profileEnterlistImg">
        <div class="enter_text" >{{item.text? item.text : item.tag[0].elementName}}</div>
      </li>
      <li class="enter_list_item" v-for="(item,index) in enter_list" :key="index" v-if="!isProfile">
        <img :src="'https://image1.suning.cn' + item.picUrl + '?format=_is_120w_120h.webp'" alt="" class="enter_list_item_pic" >
        <div class="enter_text" >{{item.elementName}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "EnterList",
        props: {
            fiveOrFour: {
                type: String,
                default() {
                    return ''
                }
            },
            enter_list: {
                type: Array,
                default() {
                    return []
                }
            },
            enter_bg:String
        },
        computed: {
            isProfile() {
                return this.$route.path === '/profile'
            }
        }
    }
</script>

<style scoped>
  .enter_list{
    width: 375px;
    display: inline-block;
    margin: 0 auto -3px;
    padding-bottom: 20px;
  }

  .enter_wrapper{
    background-color: white;
    font-size: 14px;
  }

  .enter_list_item{
    float: left;
    width:20%;
    height: 71px;
  }
  .profile_enter_list_item{
    float: left;
    width:25%;
    height: 71px;
  }

  .enter_list_item_pic{
    margin-top: 12px;
    width: 42px;
    height: 42px;
  }
  .profileEnterlistImg {
    margin-top: 12px;
    width: 25px;
    height: 25px;
  }


</style>
