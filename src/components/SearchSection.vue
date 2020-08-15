<template>
  <v-row fluid>
    <v-col cols="8" class="pb-0">
      <Search />
    </v-col>
    <v-col cols="4" class="pb-0">
      <OrderSelect />
    </v-col>
  </v-row>
</template>

<script>
import Search from "@/components/Search";
import OrderSelect from "@/components/OrderSelect";

export default {
  name: "SearchSection",
  components: {
    Search,
    OrderSelect,
  },
};
</script>
