import React, {useState, useEffect} from 'react';
import ShuffleIcon from '../icons/shuffle';
import './header.scss';

const Header = (props) => {
    const {
        generateArray,
        arraySize,
        setArraySize,
        sort,
        isRunning,
        selectedAlgorithm,
        setAlgorithm,
        animSpeed,
        setAnimSpeed
    } = props;

    return (
        <header className='header'>
            <div className='container'>
                <nav className='nav'>
                    <div className="main-options">
                        <button 
                            className='button shuffle-button' 
                            id='array_generate_button'
                            onClick = {isRunning ? null: generateArray}
                            disabled={isRunning}
                            >
                            <ShuffleIcon/>
                            <span>Shuffle</span>
                        </button>
                        <select 
                            className='select' 
                            value={selectedAlgorithm} 
                            onChange={(event) => setAlgorithm(event.target.value)}
                            disabled={isRunning}>
                                <option value='mergeSort'>Merge Sort</option>
                                <option value='selectionSort'>Selection Sort</option>
                                <option value='bubbleSort'>Bubble Sort</option>
                                <option value='insertionSort'>Insertion Sort </option>
                        </select>
                        <button 
                            id='sort'
                            className='button sort-button'
                            onClick = {isRunning ? null : sort}
                            >
                            Sort
                        </button>
                    </div>
                    <div className='additional-options'>
                        <div className='input-container'>
                            <label name="array-size-label" htmlFor="animation-speed">Speed</label>
                            <div>
                                <input 
                                    id="animation-speed" 
                                    className='range-selector'
                                    type="range" 
                                    min="20" 
                                    max="1000" 
                                    value = { animSpeed }
                                    onChange = { event => setAnimSpeed(parseInt(event.target.value)) }
                                    />
                            </div>
 
                        </div>
                        <div className='input-container'>
                            <label name="array-size-label" htmlFor="array-size">Array Size</label>
                            <div className='container'>
                                <input 
                                    id="array-size" 
                                    className='range-selector'
                                    type="range" 
                                    min="5" 
                                    max='100'
                                    disabled={isRunning}
                                    onChange = { async event => {
                                        await setArraySize(parseInt(event.target.value));
                                        await generateArray();
                                    }}
                                    value = {arraySize}
                                    />
                            </div>

                        </div>
                    </div>

                </nav>
            </div>
        </header>
    )
}
export default Header;