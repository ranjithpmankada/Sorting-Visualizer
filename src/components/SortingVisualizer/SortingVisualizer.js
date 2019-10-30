import React, {useState} from 'react';

import Header from '../Header/Header';
import Display from '../Display/Display';

import { getAnimatedArray, animate } from '../../animate/animate';
import './visualizer.scss';

const SortingVisualizer = () => {
    
    const [array, setArray] = useState([]);
    const [array_size, setArraySize] = useState(30);
    const [selectedAlgorithm, setAlgorithm] = useState('insertionSort');
    const [isRunning, setRunning] = useState(false);

    const generateArray = () => {
        const array = [];
        const [min, max] = [0, 100];
        while(array.length < array_size) {
            const number = Math.floor(Math.random()*(max - min + 1)) + min;
            if(!array.includes(number)) {
                array.push(number);
            }
        }
        setArray(array);
    };

    const sort = () => {
        setRunning(true);
        let arr = array.slice(0);
        const animationArray = getAnimatedArray(arr, selectedAlgorithm);
        const arrayElements = document.getElementsByClassName('array-element');
        animate(animationArray, arrayElements);  
         console.log('sortarray'+array)
    };

    useState(() => {
        generateArray();
    });

    return (
        <div className='app-container'>
            <Header 
                array= {array} 
                arraySize = {array_size}
                setArraySize = {setArraySize}
                selectedAlgorithm = {selectedAlgorithm}
                setAlgorithm = {setAlgorithm}
                sort = { sort }
                generateArray = {generateArray}
                isRunning = {isRunning}
                
            />
            <Display 
                array={array} 
            />
        </div>
    )
}
export default SortingVisualizer;