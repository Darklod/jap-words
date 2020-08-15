<template>
  <div>
    <v-container fill-height id="empty-list" v-if="words.length == 0">
      <v-layout align-center justify-center>
        <h2 class="text-center accent--text">NO WORDS FOUND</h2>
      </v-layout>
    </v-container>

    <WordItem v-for="word in words" :key="word.id" :word="word" />

    <div class="text-center">
      <v-pagination v-model="page" total-visible="6" :length="3"></v-pagination>
    </div>
  </div>
</template>

<script>
import WordItem from "@/views/words/WordItem";
import { mapState } from "vuex";

export default {
  name: "WordList",
  components: {
    WordItem,
  },
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    ...mapState({ words: (state) => state.filteredWords }),
  },
};
</script>

<style>
#empty-list {
  height: 200px;
}
</style>
