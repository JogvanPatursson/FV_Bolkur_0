import React, { useState } from 'react';
import ReactDOM from "react-dom";



function PhysicsComponent(aX : number = 0, aY : number = 0,
     aHspeed : number = 0, aVspeed : number = 0) {

    const [x, setX] = useState(aX);
    const [y, setY] = useState(aY);


    return [x, y];
}


export default PhysicsComponent;