import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

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

    const algorithms = [
        {name: 'Bubble Sort', functionName: 'bubbleSort'},
        {name: 'Insertion Sort', functionName:'insertionSort'}
    ];
    const toggleClass= (e) => {
        const a = document.getElementsByClassName('algorithms')[0];
        a.classList.toggle('aa');
    }

    const sortHelperR = () => {
        sortHelper();
    }

    const selectAlgorithm = name => {
        setAlgorithm(name);
        toggleClass();
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
                            title = 'Generate new array'
                            >
                            <FontAwesomeIcon icon={faRandom} size='1x' inverse/>
                            <span>Shuffle</span>
                        </button>
                        <div className='algorithm-selection-container'>
                            <button className='algorithm-selector-button' onClick={toggleClass}>
                                {
                                    algorithms.filter(algo => algo.functionName === selectedAlgorithm)[0].name
                                }
                                <FontAwesomeIcon style={{marginLeft: '8px'}} icon={faAngleDown} />
                            </button>
                            <div className='algorithms'>
                                <ul className='algorithm-list'>
                                    {algorithms.map(algo => (
                                        <li><span onClick = {() => selectAlgorithm(algo.functionName)}>{algo.name}</span></li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <button
                            id='sort'
                            className='button sort-button'
                            onClick = {isRunning ? null : sortHelperR}
                            disabled = {isRunning}
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
