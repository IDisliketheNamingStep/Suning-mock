<template>
    <div class="profile_banner">
      <div class="user_info_banner">
        <div class="user_set"></div>
        <div class="userinfo_middle">
          <div class="fl_left">
            <img src="@/assets/profile_demo_pic/suning_icon.jpg" alt="" class="SN_icon">
            <div class="renzheng_link">去实名认证</div>
          </div>

          <div class="phone_upgrade">
            <div class="phone_pic">
              <span class="user_phone">{{user_info.user_phone}}</span>
              <img :src="user_info.user_code_pic" alt="" class="user_code_pic">
            </div>

            <div class="user_upgrade">升级权益></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "ProfileBanner",
        props: {
            user_info: {
                type:Object,
                default() {
                    return {}
                }
            }
        }
    }
</script>

<style scoped>
  .user_info_banner {
    position: relative;
    width: 375px;
    height: 130px;
    background-size: 375px 130px;
    background: url("../../assets/profile_demo_pic/profile_banner2.jpg") 0px 0px no-repeat;
  }
  .userinfo_middle {
    width: 347px;
    height: 65px;
    display: inline-block;
    margin:32px auto;
    position: relative;
  }
  .userinfo_middle .fl_left {
    float: left;
    width: 62px;
    height: 62px;
    border-radius: 50%;
    border: 3px solid rgb(234,170,0);
    overflow: hidden;
  }
  .fl_left img{
    width: 100%;
  }

  .renzheng_link {
    width: 62px;
    line-height: 12px;
    position: absolute;
    bottom: -5px;
    background-color: rgb(102, 102, 102);
    color: white;
    border-radius: 7px;
  }

  .phone_upgrade {
    float: left;
    width: 90px;
    height: 65px;
    margin-left: 10px;
  }
  .user_phone {
    font-size: 14px;
  }
  .user_code_pic {
    width: 13px;
    height: 13px;
    margin-left: 5px;
  }

  .phone_pic{
    margin: 15px 0 4px;
  }
  .user_upgrade {
    background-color: black;
    display: inline-block;
    border-radius: 6px;
    color: white;
    padding: 1px 2px;
    float: left;
  }
  .user_set {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 24px;
    height: 24px;
    background: url("../../assets/profile_demo_pic/profile_userr_set.png") 0px 0px no-repeat;
    background-size: 100%;
  }
</style>
