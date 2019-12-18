import React, {useState} from 'react';

import Header from '../Header/Header';
import Display from '../Display/Display';

import { getAnimatedArray, animate } from '../../core/animations/animate';
import './visualizer.scss';

const SortingVisualizer = () => {
    
    /**
     * States
     */
    const [array, setArray] = useState([]); // Array to be sorted
    const [array_size, setArraySize] = useState(30); // Array size
    const [selectedAlgorithm, setAlgorithm] = useState('insertionSort'); // Select the algorithm
    const [isRunning, setRunning] = useState(false); // Whether the sorting is running
    const [animSpeed, setAnimSpeed] = useState(1000); // Animation speed

    // Function to generate new array and set the state 'array'
    const generateArray = () => {
        const array = [];
        const [min, max] = [1, 100];
        while(array.length < array_size) {
            const number = Math.floor(Math.random()*(max - min + 1)) + min;
            if(!array.includes(number)) {
                array.push(number);
            }
        }
        setArray(array);
    };

    // Function triggered when sort button is clicked
    async function sortHelper () {
        setRunning(true);
        let arr = array.slice(0);
        const animationArray = getAnimatedArray(arr, selectedAlgorithm);
        const arrayElements = document.getElementsByClassName('array-element');
        await animate(animationArray, arrayElements, animSpeed);  
        setRunning(false);
        setArray(array);
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
                sortHelper = {sortHelper}
                generateArray = {generateArray}
                isRunning = {isRunning}
                setRunning = {setRunning}
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