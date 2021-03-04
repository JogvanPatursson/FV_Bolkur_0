import FlappyBird from './GameAssets/flappy-bird.png';
import Entity from '../GameEngine/Entity';
import EntityList from '../GameEngine/EntityList';


class TheBird {
    entity : Entity;
    
    constructor(entityList : EntityList) {
        this.entity = new Entity(entityList.length(), FlappyBird, 0, 100, 40, 30);
        entityList.pushArray(this.entity);

        this.entity.getPhysicsObject().setX(200);
        this.entity.getPhysicsObject().setY(100);
    }

    jump() {
        this.entity.getPhysicsObject().setGravity(0);
        this.entity.getPhysicsObject().setVspeed(-10);
    }

    update() {
        if (this.entity.getPhysicsObject().getY() < 0) {
            this.entity.getPhysicsObject().setY(0);
        }

        this.entity.getPhysicsObject().setGravityDirection(270)
        this.entity.getPhysicsObject().setGravity(0.5);
        this.entity.update();
    }

    render() {
        this.entity.setRotation((this.entity.getPhysicsObject().getCurrentGravity()
         + this.entity.getPhysicsObject().getVspeed())*2.5);
        return this.entity.render();
    }

    getEntity() : Entity {
        return this.entity;
    }
    
}

export default TheBird;