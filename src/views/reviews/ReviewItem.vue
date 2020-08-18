<template>
  <v-btn color="primary" @click="update">{{review.word_id}}</v-btn>
</template>

<script>
import { mapActions } from "vuex";

// TODO: hide answer
//       write answer
//       show answer
//       choose the quality 0-5
//       update db

export default {
  name: "ReviewItem",
  props: ["review"],
  data: () => ({ q: 0 }),
  methods: {
    ...mapActions(["updateReview"]),
    update() {
      let newReview = { id: this.review.id, ...this.review, q: this.q };
      console.log(newReview);
      this.updateReview(newReview);
    },
  },
};
</script>
