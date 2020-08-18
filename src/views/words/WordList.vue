<template>
  <div>
    <v-container fill-height id="empty-list" v-if="words.length == 0">
      <v-layout align-center justify-center>
        <h2 class="text-center accent--text">NO WORDS FOUND</h2>
      </v-layout>
    </v-container>

    <WordItem v-for="word in wordsPaginated" :key="word.id" :word="word" :showPhrases="phrases" />

    <div class="text-center">
      <v-pagination v-model="page" total-visible="6" :length="pages"></v-pagination>
    </div>
  </div>
</template>

<script>
import WordItem from "@/views/words/WordItem";
import { EventBus } from "@/event-bus.js";

export default {
  name: "WordList",
  props: ["words", "phrases"],
  components: {
    WordItem,
  },
  data() {
    return {
      page: 1,
      wordsForPage: 20,
    };
  },
  computed: {
    wordsPaginated() {
      let start = (this.page - 1) * this.wordsForPage;
      return this.words.slice(start, start + this.wordsForPage);
    },
    pages() {
      return Math.ceil(this.words.length / this.wordsForPage);
    },
  },
  mounted() {
    EventBus.$on("resetPages", () => {
      this.page = 1;
    });
  },
};
</script>

<style>
#empty-list {
  height: 200px;
}
</style>
