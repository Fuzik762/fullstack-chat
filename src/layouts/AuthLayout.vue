<template>
  <div class="auth-layout">
    <router-view />
  </div>
</template>

<style lang="scss">
.auth-layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  background: {
    color: v.$color-main;
  }
}
</style>
