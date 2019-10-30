export const  insertionSort = (array) => {
    const [select, compare, swap] = [0, -1, 1];

    let i, key, j;
    let animation= [];
    for(i = 1; i < array.length; i++) {
        key = array[i]; 
        animation.push([select, [i]]);
        j = i -1;
        animation.push([select, [j]]);
        while(j >= 0 &&  array[j] > key) {
            let temp;
            animation.push([compare,[j,i]]);
            temp = array[j];
            array[j] = key;
            array[j+1] = temp;
            animation.push([swap, [j,j+1]]);
            key = array[j];
            j = j-1;
            if( j>=0 ){
                animation.push([select, j]);
            }
        }
        
    }
    console.log('Array'+  array)
    return animation;
}