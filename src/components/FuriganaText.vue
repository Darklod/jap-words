<template>
  <div>
    <ruby v-for="r in rubyText" :key="r.kanji">
      <rb>{{r.kanji}}</rb>
      <rt>{{r.furigana}}</rt>
    </ruby>
  </div>
</template>

<script>
export default {
  name: "FuriganaText",
  props: ["word"],
  computed: {
    // TODO: conviene salvarlo già così
    rubyText() {
      const regex = /(.*?)\((.*?)\)_?/gim;
      let result = [];

      let m;
      while ((m = regex.exec(this.word.text)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
          regex.lastIndex++;
        }

        let kanji = m[1];
        let furigana = m[2];

        result.push({ kanji, furigana });
      }

      return result;
    },
  },
};
</script>

<style scoped>
ruby {
  display: inline-flex;
  flex-direction: column-reverse;
  ruby-align: space-between;
}

rb,
rt {
  display: inline;
}

rt {
  font-size: 40%;
}
</style>
