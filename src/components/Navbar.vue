<template>
  <v-app-bar app dark class="primary">
    <v-btn text to="/words" exact>Words</v-btn>
    <v-btn text to="/phrases" exact>Phrases</v-btn>
    <v-btn text to="/kanji" exact>Kanji</v-btn>
   
    <v-spacer />
  
    <v-btn text to="/reviews" exact>Reviews</v-btn>
    <v-btn text to="/stats" exact>Stats</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar"
}
</script>