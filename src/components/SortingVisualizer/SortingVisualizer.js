import React, {useState} from 'react';

import Header from '../Header/Header';
import Display from '../Display/Display';

import { getAnimatedArray, animate } from '../../animate/animate';
import './visualizer.scss';

const SortingVisualizer = () => {
    
    /**
     * States
     */
    const [array, setArray] = useState([]);
    const [array_size, setArraySize] = useState(30);
    const [selectedAlgorithm, setAlgorithm] = useState('insertionSort');
    const [isRunning, setRunning] = useState(false);
    const [animSpeed, setAnimSpeed] = useState(900);

    // Function to generate new array and set the state 'array'
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

    async function sort () {
        setRunning(true);
        let arr = array.slice(0);
        const animationArray = getAnimatedArray(arr, selectedAlgorithm);
        const arrayElements = document.getElementsByClassName('array-element');
        animate(animationArray, arrayElements, animSpeed);  
        await setRunning(false);
    };

    useState(() => {
        generateArray();
    });

    return (
        <React.Fragment>
            <Header 
                array= {array} 
                arraySize = {array_size}
                setArraySize = {setArraySize}
                selectedAlgorithm = {selectedAlgorithm}
                setAlgorithm = {setAlgorithm}
                sort = {sort}
                generateArray = {generateArray}
                isRunning = {isRunning}
                animSpeed = {animSpeed}
                setAnimSpeed = {setAnimSpeed}
            />
            <Display 
                array={array} 
            />
        </React.Fragment>
    );
};

export default SortingVisualizer;