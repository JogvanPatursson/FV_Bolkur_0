import BackgroundImage from './GameAssets/background_road_1080_800.png';
import Entity from '../GameEngine/Entity';


export default class Background {
	entity : Entity; 
	
	constructor(x : number, y : number, screenWidth : number, screenHeight : number) {
		this.entity = new Entity(-1, BackgroundImage, x, y, screenWidth, screenHeight);
	}
	
	update() {
		this.entity.getPhysicsObject().setVspeed(10);
		this.entity.getPhysicsObject().update();
	}
	
	render() {
		return this.entity.render();
	}

	getEntity() : Entity {
        return this.entity;
    }

}