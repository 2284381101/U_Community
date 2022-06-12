<template>
  <div class="search-head">
    <div class="logo">U Community</div>
    <Search />
  </div>
</template>

<script setup>
import Search from './HeadContent/Search.vue'
</script>

<style scoped>
.search-head {
  display: flex;
  align-items: center;
  height: 4em;
  background: linear-gradient(to left, #e66465, #9198e5);
}
.logo {
  color: #fff;
  text-decoration: none;
  font-size: 1.75em;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-left: 25px;
  user-select: none;
}
</style>
