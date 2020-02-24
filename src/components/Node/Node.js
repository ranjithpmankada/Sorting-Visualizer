import React, { useState, useEffect } from 'react';

const Node = (props) => {
    const [height, setHeight] = useState(props.height);
    const [width, setWidth] = useState(props.width);
    const [index, setKey] = useState(props.key);
    const [color, setColor] = useState(props.color);

    useEffect( () => {
        setHeight(props.height)
        setWidth(props.width)
        setColor(props.color)
    }, [props.height, props.width, props.color]); 
    
    return (               
        <div 
            key = { height }
            className = {`${props.value} array-element`}
            style= {{
                height: `${height}%`,
                width: `${width}vw`,
                backgroundColor: `${color}`,
                marginRight: '1px'
                }} 
            />
    );
    
}

export default Node;