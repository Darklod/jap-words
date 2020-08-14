<template>
  <v-container id="words">
    <Search class="mt-4 mb-4" />
    <v-chip-group v-model="selection" class="pb-0" @change="handleFamiliarityFilter">
      <v-chip class="rounded-lg" text-color="white" :color="familiarityColor(1)">Learned</v-chip>
      <v-chip class="rounded-lg" text-color="white" :color="familiarityColor(2)">Learning</v-chip>
      <v-chip class="rounded-lg" text-color="white" :color="familiarityColor(3)">To Learn</v-chip>
    </v-chip-group>
    <v-chip-group v-model="selection" active-class="red white--text" class="pt-0 mb-4" @change="handleFamiliarityFilter">
      <v-chip class="rounded-lg">N5</v-chip>
      <v-chip class="rounded-lg">N4</v-chip>
      <v-chip class="rounded-lg">N3</v-chip>
      <v-chip class="rounded-lg">N2</v-chip>
      <v-chip class="rounded-lg">N1</v-chip>
    </v-chip-group>
    <div class="flex-grow-1">
      <WordItem v-for="w in words" :key="w.id" :word="w" />
    </div>
    <div class="text-center">
      <v-pagination v-model="page" total-visible="6" :length="3"></v-pagination>
    </div>
    <v-fab-transition>
      <v-btn bottom right rounded fab class="fab accent" @click="$vuetify.goTo('#words', { })">
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script>
import WordItem from "@/views/words/WordItem";
import Search from "@/components/Search";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    WordItem,
    Search,
  },
  data() {
    return {
      page: 1,
      selection: -1,
    };
  },
  computed: {
    ...mapState({ words: (state) => state.filteredWords }),
  },
  methods: {
    ...mapActions([
      "loadWords",
      "filterOrder",
      "filterWords",
      "filterSearch",
      "filterFamiliarity",
    ]),
    handleFilterOrder(orderBy) {
      this.filterOrder(orderBy);
    },
    handleFamiliarityFilter() {
      if (this.selection === undefined) {
        this.filterFamiliarity("all");
      } else {
        this.filterFamiliarity(this.selection + 1);
      }
    },
    familiarityColor(familiarity) {
      switch (familiarity) {
        case 3:
          return "#2f74b5";
        case 2:
          return "#ffc000";
        case 1:
        default:
          return "#92d050";
      }
    },
  },
};
</script>

<style>
.fab {
  position: fixed;
  bottom: 16px;
  right: 16px;
}
#words {
  max-width: 600px;
}
</style>
