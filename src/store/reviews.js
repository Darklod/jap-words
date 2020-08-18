import { db, Timestamp } from '../db'
import * as SM2 from '../helpers/sm2'
import { firestoreAction } from 'vuexfire'

const reviewCollection = db.collection('reviews')

export default {
  state: {
    reviews: [],
  },
  mutations: {

  },
  actions: {
    bindReviewsRef: firestoreAction(({ bindFirestoreRef }) => {
      bindFirestoreRef('reviews', reviewCollection)
    }),
    unbindReviewsRef: firestoreAction(({ unbindFirestoreRef }) => {
      unbindFirestoreRef('reviews')
    }),

    updateReview: firestoreAction((context, payload) => {
      let review = SM2.updateReview(payload)

      payload.EF = review.EF
      payload.interval = review.interval
      payload.streak = review.streak

      payload.last_review = Timestamp.fromDate(review.last_review)
      payload.next_review = Timestamp.fromDate(review.next_review)

      if (payload.q < 3) {
        payload.times_incorrect += 1;
      } else {
        payload.times_correct += 1;
      }

      delete payload.q

      reviewCollection.doc(payload.id).update(review)
        .catch(err => context.commit('setError', err.toString()))
    }),
  },
  getters: {
    reviews: state => state.reviews,
    kanjiReviews: state => state.reviews.filter(r => r.type === 'kanji'),
    wordReviews: state => state.reviews.filter(r => r.type === 'word'),
  },
}
