<template>
  <div id="container">
    <SearchSection />
    <FilterSection />
    <WordList :words="wordsWithPhrases" :phrases="true" />
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
    ...mapGetters(["wordsWithPhrases"]),
  },
  methods: {
    ...mapActions(["resetFilters"])
  },
  mounted() {
    this.resetFilters();
  },
};
</script>
