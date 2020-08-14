<template>
  <v-app>
    <Navbar />

    <v-main id="background">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import { mapActions, mapState } from 'vuex';

export default {
  name: "App",
  components: { Navbar },
  computed: {
    ...mapState(["words"]),
  },
  methods: {
    ...mapActions(["bindWordsRef", "unbindWordsRef", "loadWords"])
  },
  created() {
    this.bindWordsRef()
    this.loadWords(this.words)
  },
  beforeDestroy() {
    this.unbindWordsRef()
  },
}
</script>

<style>
html::-webkit-scrollbar {
  display: none;
}

#background {
  background-color: #00d0ffe0;
  background-image: url("/koi.webp");
  background-repeat: repeat-y;
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode: difference;
}

label.theme--dark.v-label {
  color: rgb(255 255 255 / 0.95);
}
</style>
