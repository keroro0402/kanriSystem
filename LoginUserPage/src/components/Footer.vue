<script setup lang="ts">
import { ref, reactive } from 'vue';

const copyRightInit = {
  site: 'Hiyokko',
  year: new Date().getFullYear(),
  copyRight: 'All Right Reserved',
  space: ' ',
};
const copyRight = ref(
  copyRightInit.site +
    copyRightInit.space +
    copyRightInit.year +
    copyRightInit.space +
    copyRightInit.copyRight
);
</script>
<template>
  <footer>
    <p>&copy; {{ copyRight }}</p>
  </footer>
</template>
<style scoped>
footer {
  color: rgb(255, 255, 255, 255);
  background: rgb(128, 0, 0, 255);
  padding: 1rem 0;
}
footer p {
  text-align: center;
}
</style>
