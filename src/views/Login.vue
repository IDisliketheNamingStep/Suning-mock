<template>
    <div class="login_container">
      <div class="content_box">
        <!--      右上角连接-->
        <div class="head_of_login">
          <a href="#">
            <span>联系客服</span>
          </a>|
          <a href="#">
            <span>企业注册</span>
          </a>
        </div>

        <!--      中部登录模块-->
        <div class="login_form_area">
          <p class="welcom_text">欢迎登录苏宁易购</p>
          <div class="input_area">
            <input type="tel" class="phonenumber" placeholder="请输入手机号">
            <input type="text" class="testcode" name="testcode1">
            <input type="text" class="testcode" name="testcode2">
            <input type="text" class="testcode" name="testcode3">
            <input type="text" class="testcode" name="testcode4">
            <div class="click_to_get_code">获取验证码</div>
          </div>


        </div>

<!--        <div class="login_button">登录</div>-->
        <div class="login_button">登录</div>

        <div class="change_login_type">账号密码登录</div>
        <!--      底部连接-->
              <div class="bottom_area">
                <div class="apart_line_toptext">其它登录方式</div>
                <ul class="other_login_path">
                  <li><img src="@/assets/Login_page/tencent_qq.png" alt=""></li>
                  <li><img src="@/assets/Login_page/e_pay.png" alt=""></li>
                  <li><img src="@/assets/Login_page/bank_card.png" alt=""></li>
                </ul>
                <div class="contract_agree">
                  <span class="iagree">我同意</span>
                  <a href="#" class="membership_chapter">《苏宁易购会员章程》</a>
                  <a href="#" class="e_pay_contract">《易付宝协议》</a>
                </div>
              </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
  p,a{
    color: #222222;
  }
  .content_box {
    width: 375px;
    margin: 0 auto;
  }
  .head_of_login{
    margin: 4px;
    text-align: right;

  }
  .head_of_login a{
    padding: 5px;
    text-decoration: none;
    line-height: 30px;
    margin: 0 12px;
  }

  .head_of_login a:first-child{
    margin: 0 12px 0 0;
  }

  .head_of_login a:last-child{
    margin: 0 0 0 12px;
  }

  .login_form_area {
    width: 300px;
    height: 165px;
    margin: 70px auto 0;
  }

  .welcom_text {
    font-size: 18px;
  }
  .input_area {
    width: 100%;
    display: block;
  }

  input {
    font-size: 15px;
    color: #cccccc;
    line-height: 39px;
    background-color: rgba(0,0,0,0);

  }

  .phonenumber {
    width: 100%;
    border-bottom: 1px solid rgb(221,221,221);
    margin-top: 30px;
  }

  .testcode {
    width: 30px;
    margin-top: 15px;
    margin-right: 12px;
    padding: 0 3px;
    float: left;
    border-bottom: 1px solid rgb(221,221,221);
    text-align: center;
  }
  .click_to_get_code{
    font-size: 15px;
    line-height: 39px;
    color: #FF5500;
    border: 1px solid #FF5500;
    float: right;
    padding: 0 10px;
    border-radius: 19px;
    margin-top: 15px;

  }



  .login_button {
    background-image: linear-gradient(-90deg,#f50 0,#ff8f00 100%);
    font-size: 17px;
    font-weight: bold;
    line-height: 45px;
    color: white;
    width: 300px;
    height: 45px;
    margin: 30px auto 0;
    border-radius: 22px;
  }

  .bottom_area {
    position: relative;
    bottom: -150px;
    width: 240px;
    margin: 0 auto;
    border-top: 1px solid rgb(221,221,221);
  }

  .change_login_type{
    font-size: 15px;
    margin-top: 21px;
  }
  .other_login_path {
    display: flex;
  }
  .other_login_path li {
    flex: 1;
  }


  .other_login_path img{
    width: 33px;
    height: 33px;
    margin: 20px 0 18px;
  }

  .apart_line_toptext {
    background-color: white;
    position: relative;
    top: -13px;
    display: inline-block;
    margin: 0px auto;
    padding: 4px;
    color: rgb(221,221,221);
  }
  .iagree{
    color: #999999;
  }



</style>
