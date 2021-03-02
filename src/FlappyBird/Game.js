import  { useState } from 'react'; 
import EntityList from '../GameEngine/EntityList';
import { Timer } from '../GameEngine/Timer';
import TheBird from './TheBird'
import GameBackground from './GameBackground';
import Pipe from './Pipe';
import Ground from './Ground';

// Constants

const SCREENWIDTH = 1280;
const SCREENHEIGHT = 720;
let gameRunning = false;
let gameOver = false;
let gameoverVisible = "hidden";
let score = -3;

const pipeList = new Array();
const nonCollidableList = new EntityList();
const collidableList = new EntityList();
const background = new GameBackground(nonCollidableList, SCREENWIDTH, SCREENHEIGHT);
const bird = new TheBird(collidableList);
const ground = new Ground(collidableList, SCREENWIDTH, SCREENHEIGHT);

let currentMillis = 0;
let prevMillis = 0;

window.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 32) {
        gameRunning = true;
        bird.jump();
        return;
    }
        
});

function Game() {
    const [millis, setMillis] = useState(0);
    const [deltaTime, setDeltaTime] = useState(0);
    const [fps, setFPS] = useState(0);


    Timer((millis, deltaTime, fps)=>{
        setMillis(millis);
        setDeltaTime(deltaTime);
        setFPS(Math.floor(fps));

        if(gameOver) {
            gameoverVisible = "visible";
        }

        if (gameRunning) {
            if(gameOver && gameRunning) {
                window.location.reload();
            }
        
            // Spawner code
            if(currentMillis < prevMillis) {
                let tmpPipe = new Pipe(collidableList, SCREENWIDTH, SCREENHEIGHT);
                pipeList.push(tmpPipe);
                score += 1;
            }
            prevMillis = currentMillis;
            currentMillis = Math.floor(millis) % 2000;

            bird.update();

            pipeList.forEach(pipe => {
                pipe.update();
            });
            if (bird.entity.collides(collidableList)) {
                gameRunning = false;
                gameOver = true;
                
            }
        }
        

    });
    

    return(
        <div className= "Game"
            style= 
            {{
                backgroundColor: `#00f1f1`, 
                position: `absolute`, 
                top:`10px`, 
                left:`10px`,
                width:`${SCREENWIDTH}px`,
                height:`${SCREENHEIGHT}px`}}>
                    
                    

            <div className = "Background">
                {background.render()}
            </div>
            
            <div className = "GameElements">
                {bird.render()}
                {pipeList.map(pipe => pipe.render())}
                {ground.render()}
            </div>

            <div className = "Hud" style = {{position:`absolute`, left: `10px`, top: `10px`, backgroundColor: 'lightGray'}}>
                Score: {score > 0 ? score : 0}<br/>
                fps {Math.floor(fps)}<br/>
            </div>
            <div className = "ScoreScreen" 
                style= {{
                    position: `absolute`,
                    backgroundColor: `lightGray`, 
                    fontSize: `400%`,
                    textAlign: `center`, 
                    visibility: `${gameoverVisible}`, 
                    left: `${SCREENWIDTH/2 - 100}px`, 
                    top: `${SCREENHEIGHT/2 - 100}px`}}>
                Game Over
                <br></br>
                Score = {score > 0 ? score : 0}
            </div>
        
        </div>
    )
}


export default Game;
