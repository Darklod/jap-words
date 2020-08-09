<template>
  <v-row justify="space-around">
    <v-col cols="3">
      <v-card>
        <v-card-title class="white--text" style="backgroundColor:#92d050">Learned</v-card-title>
        <v-list>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
        </v-list>
      </v-card>
    </v-col>

    <v-col cols="3">
      <v-card>
        <v-card-title class="white--text" style="backgroundColor:#ffc000"> Learning</v-card-title>
        <v-list>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
        </v-list>
      </v-card>
    </v-col>

    <v-col cols="3">
      <v-card>
        <v-card-title class="white--text" style="backgroundColor:#2f74b5">To Learn</v-card-title>
        <v-list>
          <v-list-item><Header :word="word" /></v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
          <v-list-item>Ciao</v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Header from '@/components/Header'
export default {
  components: {
    Header,
  },
  data() {
    return {
      word: {
         text: "海(かい)_外(がい)",
          translation: "Oltremare, Estero",
          jlpt: 3,
          familiarity: 3,
      }
    }
  }
};
</script>

<style>
</style>