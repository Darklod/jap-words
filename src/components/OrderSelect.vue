<template>
  <v-select
    :items="orderTitles"
    v-model="title"
    @click:prepend-inner="changeMode"
    :prepend-inner-icon="`mdi-sort-${orderIcon}`"
    solo
    dense
    hide-details
    class="rounded-lg"
    @change="handleFilterOrder"
  ></v-select>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "OrderSelect",
  data() {
    return {
      title: "Date",
      mode: "desc",
      orders: {
        Date: { field: "createdAt", icon: "calendar" },
        Familiarity: { field: "familiarity", icon: "alphabetical" },
        JLPT: { field: "jlpt", icon: "numeric" },
        Japanese: { field: "text", icon: "alphabetical" },
        Translation: { field: "translation", icon: "alphabetical" },
      },
    };
  },
  computed: {
    ...mapState({ order: (state) => state.words.filter.order }),
    orderTitles() {
      return Object.keys(this.orders);
    },
    orderIcon() {
      let mode = this.mode == "asc" ? "-ascending" : "-descending";
      return this.orders[this.title].icon + mode;
    },
  },
  methods: {
    handleFilterOrder() {
      let newOrder = {
        field: this.orders[this.title].field,
        mode: this.mode,
      };
      this.filterOrder(newOrder);
    },
    changeMode() {
      this.mode = this.mode == "asc" ? "desc" : "asc";
      this.handleFilterOrder();
    },
    ...mapActions(["filterOrder"]),
  },
  mounted() {
    this.newOrder = this.order;
  },
};
</script>

