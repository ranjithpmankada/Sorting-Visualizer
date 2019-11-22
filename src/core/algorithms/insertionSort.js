import { select, swap, compare } from './operations/operations';

/**
 * 
 * @param {Array} array 
 * @returns {Array} animation
 * 
 */
export const  insertionSort = (array) => {
    let i, j;
    let animation = [];
    for(i = 1; i < array.length; i++) {
        select(i, array, animation);
        j = i-1;
        select(j, array, animation);  
        while(j >= 0 && compare(j, j+1, array, animation)) {
            swap(j, j+1, array, animation);
            j = j-1;
            if( j >= 0)
                select(j, array, animation);
        }  
    }
    return animation;
    
}