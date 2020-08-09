<template>
    <v-row>
        <v-col cols="6">
            <WordForm />
        </v-col>
        <v-col cols="6">
            <WordList :words="words"/>
        </v-col>
        <v-fab-transition>
          <v-btn dark bottom right large rounded class="fab accent">
            <v-icon left>mdi-filter</v-icon>Filter
          </v-btn>
      </v-fab-transition>
    </v-row>
</template>

<script>
import WordList from '@/components/WordList'
import WordForm from '@/components/WordForm'
export default {
  components: {
    WordList,
    WordForm
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
    }
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