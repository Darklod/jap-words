<template>
  <v-alert border="left" colored-border :color="familiarityColor" elevation="4" class="rounded-lg">
    <v-card-title class="headline pa-0">
      <Header :word="word" />
    </v-card-title>
  </v-alert>
</template>

<script>
import Header from "@/components/Header";

export default {
  props: ["word", "isLast"],
  components: { Header },
  computed: {
    familiarityColor() {
      switch (this.word.familiarity) {
        case 3:
          return "#2f74b5";
        case 2:
          return "#ffc000";
        case 1:
        default:
          return "#92d050";
      }
    },
  },
};
</script>

<style>
</style>