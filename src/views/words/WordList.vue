<template>
  <div class>
    <Word v-for="word in words" :key="word.text" :word="word" />
  </div>
</template>

<script>
import Word from "@/views/words/Word";
export default {
  props: ["words"],
  components: {
    Word,
  },
};
</script>

<style>
.wordlist {
  height: 550px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 50px;
}
</style>
