<template>
  <div class="auth-page">
    <ChatInput max-width="300px" />
    <ChatInput max-width="300px" />
    <ChatButton title="Войти в систему" label="Войти" @click="onLogin" />
  </div>
</template>

<style lang="scss">
.auth-page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
