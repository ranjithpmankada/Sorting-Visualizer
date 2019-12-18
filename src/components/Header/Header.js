import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'

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

    const toggleClass= (e) => {
        const a = document.getElementsByClassName('algorithms')[0];
        a.classList.toggle('aa');
    }

    const sortHelperR = () => {
        sortHelper();
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
                            <FontAwesomeIcon icon={faRandom} size='1x' inverse/>
                            <span>Shuffle</span>
                        </button>
                        <div className='algorithm-selection-container'>
                            <button onClick={toggleClass}>
                                {selectedAlgorithm}
                            </button>
                            <div className='algorithms'>
                                <ul>
                                    <li>Insertion Sort</li>
                                    <li>BubbleSort</li>
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