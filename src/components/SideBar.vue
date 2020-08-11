<template>
  <v-card class="sidebar pa-4 ma-4 rounded-lg" tile>
    <v-card-title>Add Phrases</v-card-title>
    <v-list flat>
      <v-list-item v-for="word in withoutPhrases" :key="word.id">
        <v-list-item-content>
          <v-list-item-title v-text="word.text" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SideBar",
  data() {
    return {
      ...mapState(["words"]),
    };
  },
  computed: {
    withoutPhrases() {
      return this.words().filter((w) => !w.phrases);
    },
  },
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
