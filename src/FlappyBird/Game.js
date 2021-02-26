import { render } from '@testing-library/react';
import  { useState } from 'react'; 
import { inherits } from 'util';
import EntityList from '../GameEngine/EntityList';
import { Timer } from '../GameEngine/Timer';
import TheBird from './TheBird'

// Constants

const SCREENWIDTH = 400;
const SCREENHEIGHT = 600;



const entityList = new EntityList();
const bird = new TheBird(entityList);
const bird1 = new TheBird(entityList);
bird.entity.getPhysicsObject().setX(200);
bird1.entity.getPhysicsObject().setX(0);

window.requestAnimationFrame(gameLoop);

function gameLoop() {
    if(bird1.entity.getPhysicsObject().getX() + bird1.entity.getPhysicsObject().getCollisionObject().getWidth() > SCREENWIDTH) {
        bird1.entity.getPhysicsObject().setX(0);
    }
    bird1.entity.getPhysicsObject().setHspeed(1);
    bird.update();
    bird1.update();
    window.requestAnimationFrame(gameLoop);
}

function Game() {
    const [time, setTime] = useState(0);
    const [deltaTime, setDeltaTime] = useState(0);
    const [fps, setFPS] = useState(0);


    Timer((time, deltaTime, fps)=>{
        setTime(time);
        setDeltaTime(deltaTime);
        setFPS(Math.floor(fps));
    });
    

    return(
        <div className= "gameLoop" 
            style= 
            {{
                backgroundColor: `#00f1f1`, 
                position: `absolute`, 
                top:`100px`, 
                left:`100px`,
                width:`${SCREENWIDTH}px`,
                height:`${SCREENHEIGHT}px`}}>
            <div className = "Background">


            </div>
            
            <div className = "GameElements">
                {bird.getEntity().getPhysicsObject().getX()}
                <br></br>
                {bird1.entity.CollidesWith(entityList, bird)? "NO":"YES"}
                <br></br>
                {bird1.render()}
                {bird.render()}
            </div>

            <div className = "Hud" style = {{position:`absolute`, left: `10px`, top: `10px`, backgroundColor: 'lightGray'}}>
                Seconds: {Math.floor(time / 1000)}<br/>
                Delta time: {Math.floor(deltaTime)}<br/>
                fps {Math.floor(fps)}<br/>
            </div>
        
        </div>
    )
}


export default Game;
