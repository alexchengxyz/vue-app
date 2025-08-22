<template lang="pug">
main.container
  slot
</template>

<style scoped>
  .container {
    flex: 1;
    padding: 32px;
    overflow-y: auto;
  }
</style>
