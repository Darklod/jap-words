<template>
  <v-card class="mx-auto" max-width="640">
    <v-card-title class="headline pb-0">
      <Header :word="word" />
    </v-card-title> 

    <v-sheet class="d-flex ml-4 my-2" :color="familiarityColor" width="60" height="4" />

    <v-card-text class="pt-0">
      <Phrase
        v-for="(p, index) in word.phrases"
        :key="`p-${index}`"
        :text="p.text"
        :translation="p.translation"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import Phrase from "./Phrase";
import Header from "./Header";

export default {
  props: ["word"],
  components: {
    Phrase,
    Header,
  },
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
