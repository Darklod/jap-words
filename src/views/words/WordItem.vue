<template>
  <div class="item-container">
    <v-alert
      class="rounded-lg pl-6"
      elevation="4"
      border="left"
      colored-border
      :color="familiarityColor"
      @click="showOptions"
    >
      <div class="d-flex justify-space-between align-center">
        <div class="word">
          <FuriganaText :text="word.text" class="d-inline-block" />
          <ruby>
            <rb>・{{word.translation}}</rb>
          </ruby>
        </div>
        <v-chip class="rounded-lg font-weight-medium" text-color="white" color="teal">N{{word.jlpt}}</v-chip>
      </div>
      
      <div v-if="showPhrases && word.phrases && word.phrases.length > 0">
        <v-sheet class="d-flex my-2" color="blue-grey darken-3" width="50" height="3" />

        <div>
          <Phrase
            v-for="(p, index) in word.phrases"
            :key="`p-${index}`"
            :text="p.text"
            :translation="p.translation"
            class="text-body-2"
          />
        </div>
      </div>
    </v-alert>

    <div class="wrap item-options" v-if="show">
      <v-btn class="rounded-lg" fab x-small dark small color="orange">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>

      <v-btn class="mt-1 rounded-lg" fab x-small dark small color="red">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
import FuriganaText from "@/components/FuriganaText";
import Phrase from "@/views/phrases/Phrase";

export default {
  props: ["word", "showPhrases"],
  components: { FuriganaText, Phrase },
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
  methods: {
    showOptions() {
      this.show = !this.show;
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

.item-container {
  position: relative;
}

.item-options {
  width: 50px;
  height: 100%;
  position: absolute;
  right: -60px; /*60 + padding*/
  top: 0px;
}

.wrap {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
</style>
