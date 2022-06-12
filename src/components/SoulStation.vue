<template>
  <div class="main-frame">
    <MainHead />
    <MainTitle />
  </div>
</template>

<script setup>
import MainHead from './Main/MainHead.vue'
import MainTitle from './Main/MainTitle.vue'
</script>

<style>
.main-frame {
  display: flex;
  flex-direction: column;
  background-color: rgb(232, 227, 245);
  min-height: 100vh;
}
</style>
