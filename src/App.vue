<template>
  <v-app>
    <Navbar />

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <!--<v-footer>
      <Footer />
    </v-footer>-->

    <GoUpButton />

    <SnackBar />
  </v-app>
</template>

<script>
import Navbar from "@/layouts/Navbar";
//import Footer from "@/layouts/Footer";
import GoUpButton from "@/layouts/GoUpButton";
import SnackBar from "@/layouts/SnackBar";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    //Footer,
    GoUpButton,
    SnackBar,
  },
  computed: {
    ...mapState({ error: state => state.words.error }),
  },
  methods: {
    ...mapActions([
      "bindWordsRef",
      "unbindWordsRef",
      "loadWords",
      "dismissError",
    ]),
  },
  // created() {
  //   this.bindWordsRef();
  //   //this.loadWords(this.words);
  // },
  // beforeDestroy() {
  //   this.unbindWordsRef();
  // },
};
</script>

<style>
html::-webkit-scrollbar {
  display: none;
}

main {
  background-color: #00d0ffe0;
  background-image: url("/koi.webp");
  background-repeat: repeat-y;
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode: difference;
}

#container {
  max-width: 600px;
  margin:auto;
}

label.theme--dark.v-label {
  color: rgb(255 255 255 / 0.95);
}

.v-menu__content {
  border-radius: 8px !important;
}

.v-text-field.v-input--dense:not(.v-text-field--outlined) input {
  padding: 4px 0 4px !important;
}

.v-snack__wrapper {
  max-width: 400px !important;
}
</style>
