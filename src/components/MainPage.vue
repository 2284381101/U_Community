<template>
  <div class="subject">
    <header>
      <a href="#" id="logo">U Community</a>
      <ul>
        <li><a href="#" class="active">Home</a></li>
        <li>
          <router-link to="/soulstation">Soul Station</router-link>
        </li>
        <li>
          <router-link to="/login">Sign in/Register</router-link>
        </li>
      </ul>
    </header>
    <section>
      <!-- <img src="../theme/images/main_images/stars.png" alt="" id="stars" /> -->
      <img src="../theme/images/main_images/moon.png" alt="" id="moon" />
      <img src="../theme//images/main_images/mountains_behind.png" alt="" id="mountain_behind" />
      <!-- <div id="text">Moon Light</div> -->
      <!-- <a href="#" id="btn">explore</a> -->
      <img src="../theme//images/main_images/mountains_front.png" alt="" id="mountain_front" />
    </section>
    <div class="sec">
      <h2>说明</h2>
      <p>
        南邮寂寞人士聚集地
        <br /><br />
      </p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
// 辅助函数
const getId = id => {
  return document.getElementById(id)
}

onMounted(() => {
  //获取到一些关键元素
  // let stars = getId('stars')
  let moon = getId('moon')
  let mountain_behind = getId('mountain_behind')
  const OnScroll = () => {
    let value = window.scrollY
    // stars.style.left = value * 0.25 + 'px'
    moon.style.top = value * 1.2 + 'px'
    mountain_behind.style.top = value * 0.5 + 'px'
  }
  window.addEventListener('scroll', OnScroll)
})
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.subject {
  background: linear-gradient(#ffafbd, #7597de);
  min-height: 100vh;

  overflow-x: hidden;
  scroll-behavior: smooth;
}
header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 30px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}
header #logo {
  color: #fff;
  text-decoration: none;
  font-size: 2em;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
}
header ul {
  display: flex;
  justify-content: center;
  align-items: center;
}
header ul li {
  list-style: none;
  margin-left: 20px;
}
header ul li a {
  text-decoration: none;
  color: #fff;
  padding: 6px 25px;
  border-radius: 20px;
}
header ul li a:hover,
header ul li a.active {
  background-color: #fff;
  color: #2b1065;
}
section {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
section::before {
  content: '';
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  background: linear-gradient(to top, #1c0522, transparent);
  z-index: 1000;
}
section img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
}
section img#moon {
  mix-blend-mode: screen; /*设置背景融合方式*/
}
section img#mountain_front {
  z-index: 15;
}
section #text {
  position: absolute;
  color: #fff;
  font-size: 7.5vw;
  white-space: nowrap;
  z-index: 10;
  transform: translateY(100px);
  right: -350px;
}
section #btn {
  text-decoration: none;
  color: #2b1055;
  padding: 8px 30px;
  border-radius: 20px;
  background-color: #fff;
  font-size: 1.5em;
  z-index: 10;
  display: inline-block;
}
.sec {
  position: relative;
  padding: 100px;
  background-color: #1c0522;
  z-index: 200px;
}
.sec h2 {
  font-size: 3.5em;
  color: #fff;
  margin-bottom: 10px;
}
.sec p {
  color: #fff;
  font-size: 1.2em;
}
</style>
