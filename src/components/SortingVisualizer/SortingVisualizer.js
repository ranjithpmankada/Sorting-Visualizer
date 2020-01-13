import React, {useState, useEffect} from 'react';

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
    const [selectedAlgorithm, setAlgorithm] = useState('heapSort'); // Select the algorithm
    const [isRunning, setRunning] = useState(false); // Whether the sorting is running
    const [animSpeed, setAnimSpeed] = useState(1000); // Animation speed
    
    // Function to generate new array and set the state 'array'
    const generateArray = () => {
        const array = [];
        const [min, max] = [1, array_size];
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
        console.log(animationArray.animation)
        const arrayElements = document.getElementsByClassName('array-element');
        await animate(animationArray.animation, arrayElements, animSpeed);  
        setRunning(false);
        setArray(animationArray.array);
    };

    useEffect(() => {
        generateArray();
    }, []);

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
                arraySize = {array_size}
            />
        </React.Fragment>
    );
};

export default SortingVisualizer;