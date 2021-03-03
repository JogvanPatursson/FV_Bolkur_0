import CarSprite from './GameAssets/GrayCar.png';
import Entity from '../GameEngine/Entity';
import EntityList from '../GameEngine/EntityList';
import { getMaxListeners } from 'process';

const LANEWIDTH = 135;
class Player {
    entity : Entity;
    vspeed : number;
    
    constructor(entityList : EntityList) {
        this.entity = new Entity(entityList.length(), CarSprite, LANEWIDTH * 3 + LANEWIDTH/2 - 25, 400, 50, 100);
        entityList.pushArray(this.entity);
        this.vspeed = 0;
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
                this.vspeed -= 5;
				break;
			case 3:
                this.vspeed += 5;
				break;
		 
			default:
				break;
        }

	}

    update() {

        if (this.vspeed > 5) { this.vspeed = 5; }
        if (this.vspeed < -5) { this.vspeed = -5; }

        this.entity.getPhysicsObject().setVspeed(this.vspeed);
        
        // Boundaries
        if (this.entity.getPhysicsObject().getX() < LANEWIDTH) {
            this.entity.getPhysicsObject().setX(LANEWIDTH + LANEWIDTH/2 - 25);
        }

        if (this.entity.getPhysicsObject().getX() > LANEWIDTH * 7) {
            this.entity.getPhysicsObject().setX(LANEWIDTH * 7 - LANEWIDTH/2 - 25);
        }

        if (this.entity.getPhysicsObject().getY() < 100) {
            this.entity.getPhysicsObject().setY(100);
            this.vspeed = 0;
        }

        if (this.entity.getPhysicsObject().getY() > 600) {
            this.entity.getPhysicsObject().setY(600);
            this.vspeed = 0;
        }

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