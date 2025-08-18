<template lang="pug">
div.layout
  Header
  div.main
    Sidebar
    Container
      slot
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main {
  display: flex;
  flex: 1;
  overflow: hidden;
}
</style>
