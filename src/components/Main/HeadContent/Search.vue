<template>
  <div class="search-box">
    <input class="search-txt" type="text" placeholder="Type to search">
    <div class="search-btn">
      <i class="iconfont icon-search"></i>
    </div>
  </div>
</template>

<script setup>
import '@/assets/font_te61bfvd20r/iconfont.css'
</script>

<style scoped>
.search-box {
  margin-left: 30rem;
  background: linear-gradient(to left, #e0eafc, #cfdef3);
  height: 40px;
  border-radius: 20px;
}

.search-box:hover > .search-txt {
  width: 240px;
  padding: 0 6px;
}

.search-box:hover > .search-btn {
  background: white;
  cursor: pointer;
}

.search-btn {
  color: #e84118;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search-txt {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: white;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  margin-left: 10px;
  width: 0;
}
</style>
