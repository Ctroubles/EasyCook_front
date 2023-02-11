export function range(first, last) {
    if(last<first)return []
    if (first === last ) return [first]
    return [first, ...range(++first, last)]
}

