<script setup lang="ts">
import { reactive } from 'vue';
import img from '@/assets/Piyoko.png';

const HeaderTitle = reactive({
  siteTitle: 'Hiyokko',
  icon: img,
});
</script>
<template>
  <header>
    <h1><img v-bind:src="HeaderTitle.icon" />{{ HeaderTitle.siteTitle }}</h1>
  </header>
</template>
<style scoped>
header {
  color: rgb(255, 255, 255, 255);
  background: rgb(128, 0, 0, 255);
  padding: 0.5rem 0;
}
header h1 {
  text-align: center;
}
header h1 img {
  vertical-align: middle;
  width: 1em;
  padding: 0 0.5em 0 0;
}
</style>
