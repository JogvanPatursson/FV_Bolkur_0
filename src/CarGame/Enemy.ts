import React from 'react';
import EntityList from '../GameEngine/EntityList';
import Entity from '../GameEngine/Entity';
import GreenCar from './GameAssets/GreenCar.png';
import PinkCar from './GameAssets/PinkCar.png';
import RedCar from './GameAssets/RedCar.png';
import YellowCar from './GameAssets/YellowCar.png';


const lanes = 6;
const LANEWIDTH = 135;
const laneOffset = 62.5;

class Player {
    entity : Entity;
	x: number;
	y: number;
	width: number;
	height: number;

    constructor(entityList : EntityList) {
		// Lane position
		this.y = -100;
		this.width = 50;
		this.height = 100;
		this.x = (Math.floor(Math.random()*lanes) + 1) * LANEWIDTH + laneOffset - (this.width/2);

		let carChoice = Math.floor(Math.random()*4)

		switch (carChoice) {
			case 0:
				this.entity = new Entity(entityList.length(), GreenCar, this.x, this.y, this.width, this.height);
				break;
			case 1:
				this.entity = new Entity(entityList.length(), PinkCar, this.x, this.y, this.width, this.height);
				break;
			case 2:
				this.entity = new Entity(entityList.length(), RedCar, this.x, this.y, this.width, this.height);
				break;
			case 3:
				this.entity = new Entity(entityList.length(), YellowCar, this.x, this.y, this.width, this.height);
				break;
			default:
				this.entity = new Entity(entityList.length(), GreenCar, this.x, this.y, this.width, this.height);
				break;
		}
        entityList.pushArray(this.entity);
		
    }

    update() {
		this.entity.getPhysicsObject().setVspeed(6);
        this.entity.update();
    }

    render() {
        return this.entity.render();
    }

    getEntity() : Entity {
        return this.entity;
    }
    
}

export default Player;