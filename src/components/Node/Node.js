import React, { useState, useEffect } from 'react';

const Node = (props) => {
    const [height, setHeight] = useState(props.height);
    const [width, setWidth] = useState(props.width);
    const [index, setKey] = useState(props.key);
    const [color, setColor] = useState();
    useEffect(() => {
        setHeight(props.height)
        setWidth(props.width)
    })
    return (               
        <div 
            key = { index }
            className = {`${props.value} array-element`}
            style= {{
                height: `${height}%`,
                width: `${width}vw`,
                backgroundColor: `rgba(66, 134, 244, 0.8)`,
                marginRight: '1px'
                }} 
            />
    );
    
}

export default Node;