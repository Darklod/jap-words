<template>
  <v-app>
    <v-app-bar app dark class="primary">
      <v-btn text to="/words" exact>Words</v-btn>
      <v-btn text to="/phrases" exact>Phrases</v-btn>
      <v-btn text to="/kanji" exact>Kanji</v-btn>
      <v-btn text to="/reviews" exact>Reviews</v-btn>
      <v-btn text to="/stats" exact>Stats</v-btn>

      <v-spacer />

      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="rounded-xl"
        dense
        dark
      />
    </v-app-bar>

    <v-main class="main">
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
}
</script>

<style>
html::-webkit-scrollbar {
  display: none;
}

.main {
  background-color: #add8e6;
  background-image: url("/koi.jpg");
  background-repeat: repeat-y;
  background-size: cover;
  background-attachment: fixed;
}
</style>
