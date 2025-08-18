<template lang="pug">
header
  .wrapper
    nav
      RouterLink(to="/") Home
      RouterLink(to="/about") About

RouterView
</template>

<script setup lang="ts"></script>

<style scoped></style>
