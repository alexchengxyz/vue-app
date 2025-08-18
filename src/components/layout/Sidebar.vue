<template lang="pug">
aside.sidebar
  nav
    routerLink(to="/") 首頁
    routerLink(to="/about") 關於
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@use '@styles/mixins' as *;

.sidebar {
  width: 200px;
  background: #f4f4f4;
  height: 100%;
  padding: 24px 0;
  @include bg-color(#fff);
}

nav {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
