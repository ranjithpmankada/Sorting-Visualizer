import { select, swap, compare, sortedValue } from './operations/operations';

export const bubbleSort = array => {
    let i, j, animation = [];
    for(i = 0; i < array.length-1; i++) {
        for(j = 0; j < array.length-1; j++) {
            if(compare(j, j+1, array, animation)) {
                swap(j, j+1, array, animation);
            }
        }
        sortedValue(j, array, animation);
    }
    console.log(animation)
    return animation;
}