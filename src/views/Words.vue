<template>
  <div id="words">
    <SearchSection />
    <FilterSection />
    <WordList />
  </div>
</template>

<script>
import SearchSection from "@/components/SearchSection";
import FilterSection from "@/components/FilterSection";
import WordList from "@/views/words/WordList";

export default {
  components: {
    SearchSection,
    FilterSection,
    WordList,
  },
};
</script>

<style scoped>
#words {
  max-width: 600px;
  margin:auto;
}
</style>
