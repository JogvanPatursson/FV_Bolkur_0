import  { useState } from 'react'; 
import { UseFrameLoop } from './FrameLoop';
import './App.css';
  
function Game() {

const [time, setTime] = useState(0);
const [deltaTime, setDeltaTime] = useState(0);
const [color, setColor] = useState('');
var nextColor = 3;

UseFrameLoop((time, deltaTime)=>{
    //logic
    if(time > nextColor){
        nextColor = time + 2000;

        setColor("#" + Math.floor(Math.random()* 16777215 ).toString(16));
    }

    setTime(time);
    setDeltaTime(deltaTime);
});

return(
    <div className= "Test_Frame_Loop">
            <header className= "App-Circle" style ={{background:color}}>
            <p>Time:</p>
            <p>{time}</p>
            <p>Delat time:</p>
            <p>{deltaTime}</p>
        </header>
    </div>
)}

export default Game;
