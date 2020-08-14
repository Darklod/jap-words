<template>
  <v-text-field
    solo
    hide-details
    prepend-inner-icon="mdi-magnify"
    label="Search"
    type="search"
    class="rounded-xl"
    clearable
    :value="search"
    @input="handleSearch"
  />
</template>

<script>
import { mapState, mapActions } from "vuex";
//import { debounce } from "../helpers/index";

export default {
  computed: {
    ...mapState({ search: (state) => state.filter.search }),
  },
  methods: {
    ...mapActions(["filterSearch"]),
    handleSearch(value) {
      this.filterSearch(value);
      /*debounce(() => {
        this.filterSearch(value)
      }, 0)()*/
    },
  },
};
</script>
