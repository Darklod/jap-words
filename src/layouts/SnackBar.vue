<template>
  <v-snackbar color="error" timeout="-1" :value="!!error">
    {{error}}
    <template v-slot:action="{ attrs }">
      <v-btn dark text v-bind="attrs" @click="dismissError">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "SnackBar",
  computed: {
    ...mapState(["error"]),
  },
  methods: {
    ...mapActions(["dismissError"]),
  },
};
</script>
