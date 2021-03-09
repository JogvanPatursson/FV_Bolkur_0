import {useState} from 'react';
import EntityList from '../GameEngine/EntityList';
import { Timer } from '../GameEngine/Timer';
import Player from './Player';
import Enemy from './Enemy';
import Background from './background';
import { KeyDown } from '../GameEngine/EventListener'

// Constants

const SCREENWIDTH = 1080;
const SCREENHEIGHT = 800;
let gameRunning = false;
let gameOver = false;
let gameoverVisible = "hidden";
let score = 0;

const nonCollidables = new EntityList();
const collidables = new EntityList();
const player = new Player(collidables);
let enemies = new Array();
let backgrounds = new Array();
backgrounds.push(new Background(0, 0,SCREENWIDTH, SCREENHEIGHT));
backgrounds.push(new Background(0, -SCREENHEIGHT, SCREENWIDTH, SCREENHEIGHT));

let currentMillis = 0;
let prevMillis = 0;
let spawnRate = 450;

KeyDown('Space', event => {
    gameRunning = true;
});

KeyDown(`ArrowLeft`, event => {
    if (!gameOver && gameRunning) {
        player.move(0);
    }
});

KeyDown(`ArrowRight`, event => {
    if (!gameOver && gameRunning) {
        player.move(1);
    }
});

KeyDown(`ArrowUp`, event => {
    if (!gameOver && gameRunning) {
        player.move(2);
    }
});

KeyDown(`ArrowDown`, event => {
    if (!gameOver && gameRunning) {
        player.move(3);
    }
});

KeyDown('Enter', event => {
    window.location.reload();
})

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

        
            if (backgrounds[0].getEntity().getPhysicsObject().getY() > SCREENHEIGHT - 20) {
                backgrounds.push(new Background(0, -SCREENHEIGHT, SCREENWIDTH, SCREENHEIGHT));
                backgrounds.shift();
            }

            // Spawner code enemies
            if(currentMillis < prevMillis) {
                enemies.push(new Enemy(collidables));
                

                if (enemies[0].getEntity().getPhysicsObject().getY() > SCREENHEIGHT) {
                    score += 1;
                    if (spawnRate > 150) { spawnRate -= 1; }
                    enemies.shift();
                } 
            }
            prevMillis = currentMillis;
            currentMillis = Math.floor(millis) % spawnRate;

            player.update();

            enemies.forEach(enemy => {
                enemy.update();

                if (enemy.entity.collides(collidables)) {
                    enemy.getEntity().getPhysicsObject().setVspeed(14);
               }
            });

            backgrounds.forEach(background => {
                background.update();
            });

            if (player.entity.collides(collidables)) {
                 gameRunning = false;
                 gameOver = true;
            }
        }
        

    });
    

    return(
        <div className= "Game"
            style= 
            {{
                overflow:`hidden`,
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
                {player.render()}
                {enemies.map(enemy => enemy.render())}
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