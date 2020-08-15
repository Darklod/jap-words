export function filterWords(filter, words) {
    let filteredList = [...words]

    // Filter familiarity
    if (filter.familiarity !== 'all') {
        const filtered = filteredList.filter(w => w.familiarity === filter.familiarity)
        filteredList = filtered
    }

    // Filter jlpt
    if (filter.jlpt !== 'all') {
        const filtered = filteredList.filter(w => w.jlpt === filter.jlpt)
        filteredList = filtered
    }

    // Search
    if (filter.search !== '') {
        const searchList = []
        const searchTerm = filter.search.toLowerCase()
        for (let i = 0; i < filteredList.length; i++) {
            if (
                (filteredList[i].text !== null && filteredList[i].text.toLowerCase().includes(searchTerm)) ||
                (filteredList[i].translation !== null && filteredList[i].translation.toLowerCase().includes(searchTerm))
            ) {
                searchList.push(filteredList[i])
            }
        }
        filteredList = searchList
    }

    return filteredList
}

import moment from 'moment'

export function orderWords(order, words) {
    const orderedList = [...words]

    let mode = order.mode == "asc" ? -1 : 1;

    let compareFn;
    if (order.field === 'createdAt') {
        compareFn = (a, b) => {
            const unixA = moment(a.createdAt.toDate()).unix()
            const unixB = moment(b.createdAt.toDate()).unix()
            return (unixA < unixB ? -1 : 1) * mode
        }
    } else if (order.field === 'jlpt') {
        compareFn = (a, b) => (a.jlpt > b.jlpt ? -1 : 1) * mode
    } else {
        compareFn = (a, b) => {
            return (a[order.field] > b[order.field] ? -1 : 1) * mode
        }
    }

    orderedList.sort(compareFn)

    return orderedList
}
