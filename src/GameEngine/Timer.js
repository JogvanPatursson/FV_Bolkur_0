import {useRef, useEffect} from 'react'

export const Timer = (callback) => {

    const previousTime = useRef();
    const requestID = useRef();

const loop = time => {
    if(previousTime.current !== undefined) {
        const deltaTime = time - previousTime.current;
        const fps = 1000 / deltaTime;

        callback(time, deltaTime, fps);
    }

    previousTime.current = time;
    requestID.current = requestAnimationFrame(loop);
}

useEffect(()=>{
    requestID.current = requestAnimationFrame(loop);
    return ()=> cancelAnimationFrame(requestID.current);
}, []);


}