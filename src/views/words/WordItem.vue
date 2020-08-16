<template>
  <v-alert
    class="rounded-lg pl-6"
    elevation="4"
    border="left"
    colored-border
    :color="familiarityColor"
  >
    <div class="d-flex justify-space-between align-center">
      <div class="word">
        <FuriganaText :text="word.text" class="d-inline-block" />
        <ruby>
          <rb>・{{word.translation}}</rb>
        </ruby>
      </div>
      <v-chip class="rounded-lg font-weight-medium" text-color="white" color="accent">N{{word.jlpt}}</v-chip>
    </div>
  </v-alert>
</template>

<script>
import FuriganaText from "@/components/FuriganaText";

export default {
  props: ["word"],
  components: { FuriganaText },
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

<style scoped>
.word {
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 2rem;
}
</style>
