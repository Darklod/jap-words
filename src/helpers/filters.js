export function filterWords(filter, words) {
    let filteredList = [...words]

    // Filter familiarity
    if (filter.familiarity !== 'all') {
        let filterMethod;
        if (Array.isArray(filter.familiarity))
            filterMethod = w => filter.familiarity.includes(w.familiarity)
        else
            filterMethod = w => w.familiarity === filter.familiarity

        const filtered = filteredList.filter(filterMethod)
        filteredList = filtered
    }

    // Filter jlpt
    if (filter.jlpt !== 'all') {
        let filterMethod;
        if (Array.isArray(filter.jlpt))
            filterMethod = w => filter.jlpt.includes(w.jlpt)
        else
            filterMethod = w => w.jlpt === filter.jlpt

        const filtered = filteredList.filter(filterMethod)
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

    if (order.field === 'createdAt') {
        orderedList.sort((a, b) => {
            const unixA = moment(a.createdAt.toDate()).unix()
            const unixB = moment(b.createdAt.toDate()).unix()
            return (unixA < unixB ? -1 : 1) * mode
        })
    } else {
        orderedList.sort((a, b) => {
            return (a[order.field] > b[order.field] ? -1 : 1) * mode
        })
    }

    return orderedList
}
