import  { useState } from 'react'; 
import { inherits } from 'util';
import EntityList from '../GameEngine/EntityList';
import { UseFrameLoop } from '../GameEngine/FrameLoop';
import TheBird from './TheBird'

const entityList = new EntityList();
const bird = new TheBird(entityList);
entityList.pushArray(bird);

function Game() {
    const [time, setTime] = useState(0);
    const [deltaTime, setDeltaTime] = useState(0);
    const [fps, setFPS] = useState(0);


    UseFrameLoop((time, deltaTime, fps)=>{
        setTime(time);
        setDeltaTime(deltaTime);
        setFPS(Math.floor(fps));
        bird.update();
    });

    

    return(
        <div className= "GameLoop">
            <div className = "Background">

            </div>
            
            <div className = "GameElements">
                {bird.render()}
            </div>

            <div className = "Hud">
                <p>Seconds: {time}</p>
                <p>Delat time: {deltaTime}</p>
                <p>fps {fps}</p>
            </div>
        
        </div>
    )
}


export default Game;
