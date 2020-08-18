<template>
  <div id="container">
    <SearchSection />
    <FilterSection />
    <WordList :words="words" />
  </div>
</template>

<script>
import SearchSection from "@/components/SearchSection";
import FilterSection from "@/components/FilterSection";
import WordList from "@/views/words/WordList";

import { mapState, mapActions } from 'vuex'

export default {
  components: {
    SearchSection,
    FilterSection,
    WordList,
  },
  computed: {
    ...mapState({ words: (state) => state.filteredWords }),
  },
  methods: {
    ...mapActions(["resetFilters"])
  },
  mounted() {
    this.resetFilters();
  },
};
</script>
