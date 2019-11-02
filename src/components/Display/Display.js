import React from 'react';
import './display.scss';

const Display = ({array}) => {
    return (
        <div className='array-container'>
            {array.map((number, index, array) => {
                const height = number;
                const width = 50 / array.length;
                return (
                    <div 
                        key = { index }
                        className = 'array-element'
                        style= {{
                            height: `${(height)}%`,
                            width: `${width}vw`,
                            backgroundColor: `rgba(66, 134, 244, 0.8)`,
                            marginRight: '1px'
                            }} />
            )})}
        </div>   
        )
}

export default React.memo(Display);