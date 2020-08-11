<template>
  <div>
    <v-card-title class="headline">
      <Header :word="word" />
    </v-card-title>
    <v-divider v-if="!isLast" class="mx-4" />
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: "WordItem",
  props: ["word", "isLast"],
  components: { Header }, 
}
</script>

<style>
</style>