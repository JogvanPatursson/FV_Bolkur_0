import CarSprite from './GameAssets/GrayCar.png';
import Entity from '../GameEngine/Entity';
import EntityList from '../GameEngine/EntityList';

const LANEWIDTH = 135;
class Player {
    entity : Entity;
    
    constructor(entityList : EntityList) {
        this.entity = new Entity(entityList.length(), CarSprite, 300, 400, 50, 100);
        entityList.pushArray(this.entity);
    }

	move(dir : number) {
		 switch (dir) {
			 case 0:
				this.entity.getPhysicsObject().setX(this.entity.getPhysicsObject().getX() - LANEWIDTH);
				break;
			case 1:
			this.entity.getPhysicsObject().setX(this.entity.getPhysicsObject().getX() + LANEWIDTH);
				break;
			case 2:
			this.entity.getPhysicsObject().setY(this.entity.getPhysicsObject().getY() - 20);
				break;
			case 3:
			this.entity.getPhysicsObject().setY(this.entity.getPhysicsObject().getY() + 20);
				break;
		 
			 default:
				 break;
		 }
	}

    update() {
        // if (this.entity.getPhysicsObject().getY() < 0) {
        //     this.entity.getPhysicsObject().setY(0);
        // }

        // this.entity.getPhysicsObject().setGravityDirection(270)
        // this.entity.getPhysicsObject().setGravity(0.5);
        this.entity.update();
    }

    render() {
        // this.entity.setRotation((this.entity.getPhysicsObject().getCurrentGravity()
        //  + this.entity.getPhysicsObject().getVspeed())*2.5);
        return this.entity.render();
    }

    getEntity() : Entity {
        return this.entity;
    }
    
}

export default Player;