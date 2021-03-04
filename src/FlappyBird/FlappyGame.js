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
//const background = new GameBackground(nonCollidableList, SCREENWIDTH, SCREENHEIGHT);
const bird = new TheBird(collidableList);
let grounds = new Array();
grounds.push(new Ground(collidableList, SCREENWIDTH, SCREENHEIGHT));
grounds.push(new Ground(collidableList, SCREENWIDTH*2, SCREENHEIGHT));
let backgrounds = new Array();
backgrounds.push(new GameBackground(nonCollidableList, 0, 0, SCREENWIDTH, SCREENHEIGHT));
backgrounds.push(new GameBackground(nonCollidableList, SCREENWIDTH, 0, SCREENWIDTH, SCREENHEIGHT));

let currentMillis = 0;
let prevMillis = 0;

window.addEventListener("keydown", event => {
    event.preventDefault();
    // SPACE IS PRESSED
    if (event.isComposing || event.keyCode === 32) {
        
        if (!gameOver) {
            gameRunning = true;
            bird.jump();
        }

        return;
    }

    // ENTER IS PRESSED
    if (event.isComposing || event.keyCode == 13) {
        window.location.reload();
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
        
            // Background spawn
            if (backgrounds[0].getEntity().getPhysicsObject().getX() + SCREENWIDTH < 20) {
                backgrounds.push(new GameBackground(nonCollidableList, SCREENWIDTH, 0, SCREENWIDTH, SCREENHEIGHT));
                backgrounds.shift();
            }
            //Groundspawn
            if (grounds[0].getEntity().getPhysicsObject().getX() + SCREENWIDTH < 0) {
                grounds.push(new Ground(collidableList, SCREENWIDTH*2, SCREENHEIGHT));
                grounds.shift();
            }
            // Spawner code
            if(currentMillis < prevMillis) {
                let tmpPipe = new Pipe(collidableList, SCREENWIDTH, SCREENHEIGHT);
                pipeList.push(tmpPipe);
                score += 1;

                if (score >= 2) {
                    pipeList.shift();
                } 
            }
            prevMillis = currentMillis;
            currentMillis = Math.floor(millis) % 2000;

            bird.update();

            pipeList.forEach(pipe => {
                pipe.update();
            });
            grounds.forEach(ground => {
                ground.update();
            });
            backgrounds.forEach(background => {
                background.update();
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
                overflow: 'hidden',
                backgroundColor: `rgb(0, 0, 0)`, 
                position: `absolute`, 
                top:`10px`, 
                left:`10px`,
                width:`${SCREENWIDTH}px`,
                height:`${SCREENHEIGHT}px`}}>
                    
                    

            <div className = "Background">
                {backgrounds.map(background => background.render())}
            </div>
            
            <div className = "GameElements">
                {bird.render()}
                {pipeList.map(pipe => pipe.render())}
                {grounds.map(ground => ground.render())}
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
                    left: `${SCREENWIDTH/2 - 300}px`, 
                    top: `${SCREENHEIGHT/2 - 200}px`}}>
                Game Over
                <br></br>
                Score = {score > 0 ? score : 0}
                <br></br>
                Press "ENTER" to restart
            </div>
        
        </div>
    )
}


export default Game;
