<template>
  <v-row fluid justify="space-between">
    <v-col cols="auto">
      <v-chip-group
        v-model="familiarity"
        class="pb-0 justify-center"
        multiple
        @change="handleFamiliarityFilter"
      >
        <v-chip class="rounded-lg">Learned</v-chip>
        <v-chip class="rounded-lg">Learning</v-chip>
        <v-chip class="rounded-lg mr-0">To Learn</v-chip>
      </v-chip-group>
    </v-col>
    <v-col cols="auto">
      <v-chip-group
        v-model="jlpt"
        active-class="red white--text"
        class="pt-0"
        multiple
        @change="handleJLPTFilter"
      >
        <v-chip class="rounded-lg">N5</v-chip>
        <v-chip class="rounded-lg">N4</v-chip>
        <v-chip class="rounded-lg">N3</v-chip>
        <v-chip class="rounded-lg">N2</v-chip>
        <v-chip class="rounded-lg mr-0">N1</v-chip>
      </v-chip-group>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "FilterSection",
  data: () => ({
    familiarity: [],
    jlpt: [],
  }),
  methods: {
    ...mapActions(["filterFamiliarity", "filterJLPT"]),
    handleFamiliarityFilter() {
      if (this.familiarity && this.familiarity.length === 0) {
        this.filterFamiliarity("all");
      } else {
        this.filterFamiliarity(this.familiarity.map(x => x + 1));
      }
    },
    handleJLPTFilter() {
      if (this.jlpt && this.jlpt.length === 0) {
        this.filterJLPT("all");
      } else {
        this.filterJLPT(this.jlpt.map(x => 5 - x));
      }
    },
  },
};
</script>

<style>
</style>