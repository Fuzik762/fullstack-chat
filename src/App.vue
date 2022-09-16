<template>
  <div class="main-container">
    <router-view />
  </div>
</template>

<script setup lang="ts">
// import { router } from './router';

// import { getUserAuthData } from './utils/getUserAuthData';

// const userToken = getUserAuthData()?.token;

// if (!userToken) {
//   router.replace({ name: 'welcome' });
// }
</script>
<style lang="scss">
.main-container {
  height: 100%;
  min-height: 100vh;
}
</style>
