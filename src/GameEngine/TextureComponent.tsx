import React, { useState } from 'react';
import ReactDOM from "react-dom";


function TextureComponent(aImgSrc : string, aX : number, aY : number, aWidth : number, aHeight : number) {
    const [imgSrc, setImgSrc] = useState(aImgSrc);
    const [x, setX] = useState(aX);
    const [y, setY] = useState(aY);
    const [width, setWidth] = useState(aWidth);
    const [height, setHeight] = useState(aHeight);

    return (
        <img 
            src = {`${imgSrc}`}
            alt = "Unable to display texture" 
            style = {{
            position: "absolute",
            left: `${x}px`,
            top: `${y}px`,
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: "lightblue"
        }}
        ></img>
    );
}


export default TextureComponent;