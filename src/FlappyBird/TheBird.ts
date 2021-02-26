import FlappyBird from '../GameAssets/flappy-bird.png';
import Entity from '../GameEngine/Entity';
import EntityList from '../GameEngine/EntityList';


class TheBird {
    entity : Entity;
    
    constructor(entityList : EntityList) {
        this.entity = new Entity(entityList, FlappyBird, 0, 100, 50, 50);
    }

    update() {
        this.entity.getPhysicsObject().setHspeed(1);
        this.entity.getPhysicsObject().setGravityDirection(270)
        this.entity.update();
    }

    render() {
        return this.entity.render();
    }

    getEntity() : Entity {
        return this.entity;
    }
    
}

export default TheBird;