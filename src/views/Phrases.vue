<template>
  <div class="phrases">
      <SideBar />
      <v-row dense class="list">
        <v-col cols="12" v-for="w in words" :key="w.text">
          <Item :word="w" />
        </v-col>
        <v-col cols="12" v-for="w in words" :key="w.text">
          <Item :word="w" />
        </v-col>
      </v-row>
    <v-fab-transition>
      <v-btn dark bottom right large rounded class="fab accent">
        <v-icon left>mdi-filter</v-icon>Filter
      </v-btn>
    </v-fab-transition>
  </div>
</template>

<script>
import Item from "@/components/Item";
import SideBar from "@/components/SideBar";

export default {
  name: "Phrases",
  components: {
    Item,
    SideBar,
  },
  data() {
    return {
      words: [
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
        {
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
        },
      ],
    };
  },
};
</script>

<style scoped>
.list {
  margin-left: calc(30% + 6px); /* 6px -> padding del container */
}

.fab {
  position: fixed;
  bottom: 16px;
  right: 16px;
}
</style>
