import React from 'react';
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
    } = props;

    return (
        <header className='header'>
            <div className='container'>
                <nav className='nav'>
                    <div className="menu-options">
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
                    <div className='range-container'>
                        <label name="array-size-label" htmlFor="array-size"></label>
                        <input 
                            id="array-size" 
                            className='range-selector'
                            type="range" 
                            min="5" 
                            max="50" 
                            disabled={isRunning}
                            onChange = { event => {
                                setArraySize(parseInt(event.target.value));
                                generateArray();
                            }}
                            value = {arraySize}
                            />
                    </div>

                </nav>
            </div>
        </header>
    )
}
export default Header;