<template>
    <div class="user_comments_cpn_container">
      <div class="comments_content">
        <div class="comments_statistics">
          <span class="total_comments">评价（{{reviewInfo && reviewInfo.newReviewCount}}）</span>
          <span class="good_comments_rate">好评率{{reviewInfo && reviewInfo.goodRate}}%</span>
        </div>

        <div class="user_comments_block" v-for="(item, index) in (reviewInfo && reviewInfo.reviewList)" :key="index">
          <div class="user_info">
            <span class="username">{{item.nickName}}<i class="isVIP" v-if="item.userInfo.isVip"></i></span>
            <img src="../../assets/Detail/good_comments_stars.png" alt="" class="stars_for_goods">
          </div>
          <div class="comment_text">{{item.content}}</div>
          <p class="evaluate_tips"></p>
          <div class="comment_pic_area">
            <div class="comment_pic_container">
              <img v-for="(pic, index) in (item && item.picVideInfo && item.picVideInfo.imageInfo)" v-lazy="'https://image3.suning.cn/uimg/ZR/share_order/' + pic.url + '_100x100.jpg'" alt="">
            </div>
          </div>
        </div>

        <div>
          <span class="link_to_view_all_comments">查看全部评价</span>
        </div>
        <div class="ask">问问已购用户</div>
        <div class="ask_others">
          <div>想知道商品好不好，问问买过的人便知道~</div>
          <div class="ask_now">立即提问</div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "User_comments_cpn",
        props: {
            reviewInfo: Object
        }
    }
</script>

<style scoped>
  .user_comments_cpn_container {
    width: 375px;
    margin: 0 auto;
    background-color: rgb(244,244,244);
  }
  .comments_content {
    padding: 0 10px;
    background-color: white;
  }
  .user_comments_block {
    overflow: hidden;
    padding: 12px 0;
    border-bottom: 1px solid rgb(244,244,244);
  }
  .comments_statistics, .user_info {
    display: inline-block;
    width: 100%;
  }
  .comments_statistics {
    padding: 10px 0;
  }
  .total_comments, .username {
    float: left;
  }
  .good_comments_rate, .stars_for_goods {
    float: right;
  }
  .isVIP {
    display: inline-block;
    width: 39px;
    height: 10px;
    margin-left: 4px;
    background: url("../../assets/Detail/VIPcomments_icon.gif") 0px 0px no-repeat;
    background-size: 100%;
  }
  .stars_for_goods {
    width: 72px;
    height: 12px;
    display: block;
  }
  .comment_text {
    text-align: left;
    font-size: 13px;
    color: #222222;
    padding-top: 5px;
  }
  .evaluate_tips {
    color: #999999;
    font-size: 12px;
    padding: 5px 0;
  }
  .comment_pic_area {
    padding: 10px 0 0;
  }
  .comment_pic_container {
    display: flex;
    flex-flow: row nowrap;
    border-radius: 5px;
    overflow-y: hidden;
    overflow-x: auto;
  }
  .comment_pic_container::-webkit-scrollbar {
    display: none;
  }

  .comment_pic_area img{
    display: block;
    height: 100px;
    padding-right: 6px;
  }
  .comment_pic_area img:last-child{
    padding: 0;
  }

  .link_to_view_all_comments, .ask_now {
    border: 1px solid rgb(151,151,151);
    padding: 3px 10px;
    border-radius: 4px;
    font-size: 14px;
    margin-top: 10px;
    display: inline-block;
  }
  .ask_others {
    padding: 20px 0;
  }
  .ask{
    text-align: left;
    padding: 10px 0;
  }
  .ask_now {
    border: 1px solid rgb(204,204,204);
    padding: 5px 36px;
    border-radius: 13px;
    font-size: 14px;
    margin-top: 10px;
    display: inline-block;
  }

</style>
