export const select = (index, array, animation) => {
    animation.push(['select', index]);
}

export const swap = (swapValue1, swapValue2, array, animation) => {
    const temp = array[swapValue1];
    array[swapValue1] = array[swapValue2];
    array[swapValue2] = temp;
    animation.push(['swap', swapValue1, swapValue2]);
}

export const compare = (value1, value2, array, animation) => {
    if(array[value1] > array[value2]) {
        animation.push(['compare', value1, value2]);
        return true;
    }
    return false;
}

export const sortedValue = (index, array, animation) => {
    animation.push(['sortedValue', index]);
}