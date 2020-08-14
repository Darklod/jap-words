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

    if (order === 'createdAt') {
        orderedList.sort(function (a, b) {
            const unixA = moment(a.createdAt).unix()
            const unixB = moment(b.createdAt).unix()
            return unixA < unixB ? -1 : 1
        })
    } else {
        orderedList.sort(function (a, b) {
            const nameA = a[order] ? a[order].toLowerCase() : 'zzz'
            const nameB = b[order] ? b[order].toLowerCase() : 'zzz'
            return nameA < nameB ? -1 : 1
        })
    }

    return orderedList
}
