<template>
  <div class="login-body">
    <div class="login-box">
      <h1>登陆</h1>
      <div class="input-box">
        <div class="input-text">
          <span class="iconfont icon-me"></span>
          <input type="text" placeholder="用户名" />
        </div>
        <div class="input-text">
          <span class="iconfont icon-lock"></span>
          <input type="password" placeholder="密码" />
        </div>
        <div class="input-btn">登陆</div>
        <div class="sign-up">还没账户？<a href="#">立即注册</a></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import '../theme/css/login_css/index.css'
import '../assets/font_te61bfvd20r/iconfont.css'
</script>

<style scoped></style>
