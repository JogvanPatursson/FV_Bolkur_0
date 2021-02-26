import  { useState } from 'react'; 
import { inherits } from 'util';
import EntityList from '../GameEngine/EntityList';
import { UseFrameLoop } from '../GameEngine/FrameLoop';
import TheBird from './TheBird'

const entityList = new EntityList();
const bird = new TheBird(entityList);
const bird1 = new TheBird(entityList);
let bird1isColliding = false;
bird.entity.getPhysicsObject().setX(49);
bird1.entity.getPhysicsObject().setX(0);

window.requestAnimationFrame(gameLoop);

function gameLoop() {
    
    bird1.entity.getPhysicsObject().setHspeed(0);
    if(bird1.entity.getPhysicsObject().getCollisionObject().checkBoxCollision(entityList, bird1.entity) != null) {
        bird1isColliding = true;
    }
    else {
        bird1isColliding = false;
    }
    bird.update();
    bird1.update();
    window.requestAnimationFrame(gameLoop);
}

function Game() {
    const [time, setTime] = useState(0);
    const [deltaTime, setDeltaTime] = useState(0);
    const [fps, setFPS] = useState(0);

    UseFrameLoop((time, deltaTime, fps)=>{
        setTime(time);
        setDeltaTime(deltaTime);
        setFPS(Math.floor(fps));
    });

    

    return(
        <div className= "GameLoop">
            <div className = "Background">

            </div>
            
            <div className = "GameElements">
                {bird.getEntity().getPhysicsObject().getX()}
                <br></br>
                {bird1isColliding? "YES":"NO"}
                {bird.render()}
            </div>
            <div className = "GameElements">
                {bird1.getEntity().getPhysicsObject().getX()}
                {bird1.render()}
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
