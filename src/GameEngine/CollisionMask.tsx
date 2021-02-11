import React, { useState } from 'react';

function CollisionMask(aX : number, aY : number, aWidth : number, aHeight : number) {
    const [x, setX] = useState(aX);
    const [y, setY] = useState(aY);
    const [width, setWidth] = useState(aWidth);
    const [height, setHeight] = useState(aHeight);

    return (
        <div style = {{
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: "pink"
        }}
        ></div>
    );
}


export default CollisionMask;