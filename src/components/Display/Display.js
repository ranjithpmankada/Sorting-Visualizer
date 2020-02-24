import React from 'react';
import './display.scss';
import {animate} from '../../core/animations/animate';
import Node from '../Node/Node';

const Display = ({array, arraySize}) => {
    return (
        <div className='array-container'>
            {array.map((number, index, array) => {
                const height = (number/arraySize)*100;
                const width = parseInt((50 / array.length)+ 0.5);
                const color = `rgba(66, 134, 244, 0.8)`;
                return (
                    <Node key={index} value={number} height={height} width={width} color={color} />
            )})}
        </div>   
        )
}

export default React.memo(Display);