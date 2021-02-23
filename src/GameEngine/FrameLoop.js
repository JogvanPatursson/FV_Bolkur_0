import {useRef, useEffect} from 'react'

export const UseFrameLoop = (callback) => {

    const previousTime = useRef();
    const requestID = useRef();

const loop = time => {
    if(previousTime.current !== undefined) {
        const deltaTime = time - previousTime.current;
        callback(time, deltaTime);
    }

    previousTime.current = time;
    requestID.current = requestAnimationFrame(loop);
}

useEffect(()=>{
    requestID.current = requestAnimationFrame(loop);
    return ()=> cancelAnimationFrame(requestID.current);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


}