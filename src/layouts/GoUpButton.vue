<template>
  <v-fab-transition>
    <v-btn v-show="!hidden" bottom right fixed fab color="accent" @click="$vuetify.goTo(0)">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  data: () => ({
    hidden: false,
  }),
};
</script>
