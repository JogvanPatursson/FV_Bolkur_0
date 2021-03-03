import SkyTileSprite from './GameAssets/SkyTileSprite.png';
import Entity from '../GameEngine/Entity';
import EntityList from '../GameEngine/EntityList';


export default class GameBackground {
    entity : Entity;
    
    constructor(entityList : EntityList, screenWidth : number, screenHeight : number) {
        this.entity = new Entity(entityList.length(), SkyTileSprite, 0, 0, screenWidth, screenHeight);
        entityList.pushArray(this.entity);
    }

    render() {
        return this.entity.render();
    }

    getEntity() : Entity {
        return this.entity;
    }
    
}