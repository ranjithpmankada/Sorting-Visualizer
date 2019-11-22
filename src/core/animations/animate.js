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


export const  animate = (animationArray, arrayElements, speed) => {
    return new Promise((resolve, reject) => {
        for(let i = 0; i < animationArray.length; i++) {
            setTimeout(() => {
                const arrayElement1 = animationArray[i][1];
                const arrayElement2 = animationArray[i][2];
                const manipulation = animationArray[i][0];
                switch(manipulation) {
                    case 'select': 
                        arrayElements[arrayElement1].style.backgroundColor = '#4F83FB'; 
                        break;   
                    case 'compare':         
                        arrayElements[arrayElement1].style.backgroundColor= '#FB6107';
                        arrayElements[arrayElement2].style.backgroundColor='#FB6107'; 
                        break;
                    case 'swap': 
                        arrayElements[arrayElement1].style.backgroundColor='#A2D729';
                        arrayElements[arrayElement2].style.backgroundColor='#A2D729';
                        let height1 = arrayElements[arrayElement1].style.height;
                        let height2 = arrayElements[arrayElement2].style.height;
                        arrayElements[arrayElement1].style.height = height2;
                        arrayElements[arrayElement2].style.height = height1;
                        break;
                    case 'sortedValue':
                        arrayElements[arrayElement1].style.backgroundColor='black';

                }
                if(i+1 === animationArray.length)
                    resolve(false);
            }, (1010-speed)*i);
        }
    }
    )
  
}
// E1BA2D yellow
// 4F83FB blue
// FF82A9