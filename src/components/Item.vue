<template>
  <div>
    <v-card class="mx-auto" max-width="640" @contextmenu="show">
      <v-card-title class="headline pb-0">
        <Header :word="word" />
      </v-card-title>

      <v-sheet class="d-flex ml-4 my-2" :color="familiarityColor" width="60" height="4" />

      <v-card-text class="pt-0">
        <Phrase
          v-for="(p, index) in word.phrases"
          :key="`p-${index}`"
          :text="p.text"
          :translation="p.translation"
        />
      </v-card-text>
    </v-card>
    <v-menu
      origin="center center"
      transition="scale-transition"
      v-model="showMenu"
      :position-x="x"
      :position-y="y"
      absolute
    >
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" @onclick="click">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import Phrase from "./Phrase";
import Header from "./Header";

export default {
  props: ["word"],
  components: {
    Phrase,
    Header,
  },
  data() {
    return {
      showMenu: false,
      x: 0,
      y: 0,
      items: [{ title: "Edit" }, { title: "Delete" }],
    };
  },
  methods: {
    show(e) {
      e.preventDefault();
      this.showMenu = false;
      this.x = e.clientX;
      this.y = e.clientY;
      this.$nextTick(() => {
        this.showMenu = true;
      });
    },
    click() {
      console.log("ciao");
    }
  },
  computed: {
    familiarityColor() {
      switch (this.word.familiarity) {
        case 3:
          return "#2f74b5";
        case 2:
          return "#ffc000";
        case 1:
        default:
          return "#92d050";
      }
    },
  },
};
</script>
