<template>
  <v-container class="phrases">
    <!--<v-card class="mx-auto" width="256" tile>
      <v-navigation-drawer permanent>
        <v-list nav dense>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>-->

    <v-card flat>
      <Item
        v-for="(w, i) in wordsWithPhrases"
        :key="w.id"
        :isLast="i == wordsWithPhrases.length-1"
        :word="w"
      />
    </v-card>

    <v-fab-transition>
      <v-btn @click="add" dark bottom right large rounded class="fab accent">
        <v-icon left>mdi-filter</v-icon>Filter
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script>
import Item from "@/components/Item"
//import SideBar from "@/components/SideBar"

import { mapState, mapActions } from "vuex"

export default {
  name: "Phrases",
  components: {
    Item,
    // SideBar,
  },
  computed: {
    ...mapState(["words"]),
    wordsWithPhrases() {
      return this.words.filter((w) => w.phrases && w.phrases.length > 0)
    },
  },
  methods: {
    ...mapActions(["loadWords", "addWord"]),
    async add() {
      let a = {
        text: "海(かい)_外(がい)",
        translation: "Oltremare, Estero",
        jlpt: 3,
        familiarity: 3,
        phrases: [
          {
            text: "彼は海外生活をしている。",
            translation: "Lui vive all'estero.",
          },
          {
            text: "母は俺が海外に行くのは許した。",
            translation: "Mia mamma mi ha permesso di andare all'estero.",
          },
        ],
      }
      let b = {
        text: "注(ちゅう)_意(い)",
        translation: "Attenzione",
        jlpt: 4,
        familiarity: 2,
        phrases: [
          {
            text: "落下物に注意！",
            translation: "Attenzione agli oggetti che cadono!",
          },
          {
            text: "壁の地図を注意して見なさい。",
            translation: "Guarda la mappa sul muro attentamente.",
          },
        ],
      }

      await this.addWord(a)
      await this.addWord(b)
    },
  },
  created() {
    this.loadWords()
  },
}
</script>

<style scoped>
.fab {
  position: fixed;
  bottom: 16px;
  right: 16px;
}
</style>
