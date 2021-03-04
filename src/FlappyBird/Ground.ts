import GrassThinSprite from './GameAssets/GrassThinSprite.png';
import Entity from '../GameEngine/Entity';
import EntityList from '../GameEngine/EntityList';


export default class Ground {
    entity : Entity;
    
    constructor(entityList : EntityList, screenWidth : number, screenHeight : number) {
        this.entity = new Entity(entityList.length(), GrassThinSprite, 0, screenHeight - 50, screenWidth, 50);
        entityList.pushArray(this.entity);
    }

    update() {
		this.entity.getPhysicsObject().setHspeed(-3.4);
		this.entity.getPhysicsObject().update();
	}

    render() {
        return this.entity.render();
    }

    getEntity() : Entity {
        return this.entity;
    }
    
}