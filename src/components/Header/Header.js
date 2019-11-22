import React, {useState, useEffect} from 'react';
import ShuffleIcon from '../icons/shuffle';
import './header.scss';

const Header = (props) => {
    const {
        generateArray,
        arraySize,
        setArraySize,
        sortHelper,
        isRunning,
        setRunning,
        selectedAlgorithm,
        setAlgorithm,
        animSpeed,
        setAnimSpeed
    } = props;
    
    const sortHelperR = () => {
        sortHelper().then((help) => {
            setRunning(help)
        });
    }
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
                        {/* <button>
                            {selectedAlgorithm}
                        </button> */}
                        <button 
                            id='sort'
                            className='button sort-button'
                            onClick = {isRunning ? null : sortHelperR}
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
                            <label name="array-size-label" htmlFor="array-size">Array size</label>
                            <div className='container'>
                                <input 
                                    id="array-size" 
                                    className='range-selector'
                                    type="range" 
                                    min="4" 
                                    max='100'
                                    onChange = { event => {
                                        setArraySize(parseInt(event.target.value));
                                        generateArray();
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