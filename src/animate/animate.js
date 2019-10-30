import { insertionSort } from '../algorithms/insertionSort';
import { bubbleSort } from '../algorithms/bubbleSort';

export const getAnimatedArray = (array, algorithm) => {
    let animations = [];
    switch(algorithm) {
        case 'insertionSort':
            animations = insertionSort(array);
            break;
        case 'bubbleSort':
            animations = bubbleSort(array);
            break;  
    }
    return animations;
};


export const animate = (animationArray, arrayElements) => {
    for(let i = 0; i < animationArray.length; i++) {
        setTimeout(() => {
            const arrayElement = animationArray[i][1];
            const manipulation = animationArray[i][0];
            switch(manipulation) {
                case 0: 
                    arrayElements[arrayElement].style.backgroundColor = 'blue'; break;   
                case -1:         
                    arrayElements[arrayElement[0]].style.backgroundColor= 'red';
                    arrayElements[arrayElement[1]].style.backgroundColor='red'; break;
                case 1: 
                    arrayElements[arrayElement[0]].style.backgroundColor='green';
                    arrayElements[arrayElement[1]].style.backgroundColor='green';
                    let height1 = arrayElements[arrayElement[0]].style.height;
                    let height2 = arrayElements[arrayElement[1]].style.height;
                    arrayElements[arrayElement[0]].style.height = height2;
                    arrayElements[arrayElement[1]].style.height = height1;break;
            }
        }, 10+1000*i);
    }
}
