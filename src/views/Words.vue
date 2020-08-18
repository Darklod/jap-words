<template>
  <div id="container">
    <SearchSection />
    <FilterSection />
    <WordList :words="filteredWords" />
  </div>
</template>

<script>
import SearchSection from "@/components/SearchSection";
import FilterSection from "@/components/FilterSection";
import WordList from "@/views/words/WordList";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    SearchSection,
    FilterSection,
    WordList,
  },
  computed: {
    ...mapGetters([
      'words',
      'filteredWords',
    ]),
  },
  methods: {
    ...mapActions([
      "bindWordsRef",
      "unbindWordsRef",
      "loadWords",
    ]),
  },
  mounted() {
    this.bindWordsRef();
    this.loadWords(this.words);
  },
  beforeDestroy() {
    this.unbindWordsRef();
  },
};
</script>
