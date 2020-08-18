<template>
  <div>
    <v-card class="mb-2" v-for="r in toReview" :key="r.id">{{r}}</v-card>
    <v-btn @click="getWordsToReview">{{ toReview.length }} to review</v-btn>

    <v-card class="mb-2" v-for="r in toReview" :key="'ciao' + r.id">
      <ReviewItem :review="r" />
    </v-card>
  </div>
</template>

<script>
import moment from "moment";
import ReviewItem from "@/views/reviews/ReviewItem";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Reviews",
  components: { ReviewItem },
  computed: {
    ...mapGetters(["kanjiReviews", "wordReviews"]),
    reviews() {
      return this.wordReviews;
    },
    toReview() {
      return this.reviews.filter(
        (r) =>
          !r.next_review ||
          moment(r.next_review.toDate()) < moment().endOf("day")
      );
    },
  },
  methods: {
    ...mapActions(["bindReviewsRef", "unbindReviewsRef"]),
    getWordsToReview() {
      let ids = this.toReview.map((r) => r.word_id);
      console.log(ids);
    },
  },
  created() {
    this.bindReviewsRef();
  },
  beforeDestroy() {
    this.unbindReviewsRef();
  },
};
</script>
