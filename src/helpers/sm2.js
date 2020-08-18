// https://www.supermemo.com/en/archives1990-2015/english/ol/sm2

export function newIteration(EF, q, interval, streak) {
    let newEF = EF - 0.8 + 0.28 * q - 0.02 * q * q

    if (newEF < 1.3)
        newEF = 1.3

    if (q < 3) {
        newEF = EF
        streak = 0
    }

    let newInterval
    if (streak == 1)
        newInterval = 1
    else if (streak == 2)
        newInterval = 6
    else
        newInterval = Math.round(interval * newEF)

    return {
        EF: newEF,
        interval: newInterval,
        streak: streak + 1,
    }
}

import moment from 'moment'

export function updateReview(oldReview) {
    let { EF, q, interval, streak, last_review } = oldReview;
    let iter = newIteration(EF, q, interval, streak)
    return {
        ...iter,
        last_review: moment().startOf("day").toDate(),
        next_review: moment(last_review).add(iter.interval, 'days').toDate()
    }
}

// 5 - perfect response
// 4 - correct response after a hesitation
// 3 - correct response recalled with serious difficulty
// 2 - incorrect response; where the correct one seemed easy to recall
// 1 - incorrect response; the correct one remembered
// 0 - complete blackout.

// Test
// let old = { EF: 2.5, interval: 0, streak: 1, last_review: Date.now() };
// console.log(old)
// for (let i = 1; i < 25; i++) {
//     let q = Math.round(Math.random() * 5)
//     old = updateReview(old.EF, q, old.interval, old.streak, old.last_review)
//     console.log(q, old)
// }
