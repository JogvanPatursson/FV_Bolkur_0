import FlappyBird from '../GameAssets/flappy-bird.png';
import Entity from '../GameEngine/Entity';
import EntityList from '../GameEngine/EntityList';


class TheBird {
    entity : Entity;
    
    constructor(entityList : EntityList) {
        this.entity = new Entity(entityList, FlappyBird, 0, 0, 50, 50);
        this.entity.getPhysicsObject().setHspeed(200);
    }

    update() {
        this.entity.update();
    }

    render() {
        return this.entity.render();
    }
    
}

export default TheBird;