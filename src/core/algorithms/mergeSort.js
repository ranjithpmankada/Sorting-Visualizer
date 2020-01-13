import { select, swap, compare } from './operations/operations';

const merge = (array, low, mid, high) => {
    let i,j,k;
}
export const mergeSort = (array, low, high) => {
    if(low < high) {
        const mid = parseInt((low+high)/2);
        mergeSort(array, low, mid);
        mergeSort(array, mid+1, high);
        merge(array, low, mid, high);
    }
}