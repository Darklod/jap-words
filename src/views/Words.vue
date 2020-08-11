<template>
  <v-container>
    <v-card flat>
      <WordItem
        v-for="(w, i) in words"
        :key="w.id"
        :isLast="i == words.length-1"
        :word="w"
      />
    </v-card>
    <v-fab-transition>
      <v-btn dark bottom right large rounded class="fab accent">
        <v-icon left>mdi-filter</v-icon>Filter
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script>
//import WordList from "@/components/WordList"
//import WordForm from "@/components/WordForm"
import WordItem from "@/components/WordItem"
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    WordItem,
  //  WordList,
   // WordForm,
  },
  computed: {
    ...mapState(["words"])
  },
  methods: {
    ...mapActions(["loadWords"])
  },
  created() {
    this.loadWords()
  }
}
</script>

<style>
.fab {
  position: fixed;
  bottom: 16px;
  right: 16px;
}
</style>