import SkyTileSprite from './GameAssets/SkyTileSprite.png';
import Entity from '../GameEngine/Entity';
import EntityList from '../GameEngine/EntityList';


export default class GameBackground {
    entity : Entity;
    
    constructor(entityList : EntityList, x: number, y: number, screenWidth : number, screenHeight : number) {
        this.entity = new Entity(entityList.length(), SkyTileSprite, x, y, screenWidth, screenHeight);
        entityList.pushArray(this.entity);
    }

    update() {
        this.entity.getPhysicsObject().setHspeed(-0.2);
        this.entity.update();
    }
    render() {
        return this.entity.render();
    }

    getEntity() : Entity {
        return this.entity;
    }
    
}