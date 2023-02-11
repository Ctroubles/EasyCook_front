import { range } from "../utils/home.utils";


export function paginado(arr,first, last,) {
    const arrToShow = [];
    if(first < 0) return arrToShow;
    for(const i of range(first,last)) if(i<arr.length) arrToShow.push(arr[i]);

    return arrToShow;
}
