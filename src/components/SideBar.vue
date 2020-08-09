<template>
  <v-card class="sidebar pa-4 ma-4 rounded-lg"  tile>
    
  </v-card>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.sidebar {
  height: calc(100% - 64px - 32px);
  width: 30%;
  position: fixed;
  z-index: 1;
  left: 0;
  bottom: 0;
  /*background-color: white;*/
  overflow-x: hidden;
}
</style>
