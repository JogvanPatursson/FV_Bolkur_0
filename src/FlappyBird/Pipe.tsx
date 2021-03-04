import { randomInt } from 'crypto';
import ColumnSprite from './GameAssets/ColumnSprite.png';
import Entity from '../GameEngine/Entity';
import EntityList from '../GameEngine/EntityList';


export default class Pipe {
    columnTop : Entity;
    columnBottom : Entity;    
    
    constructor(entityList : EntityList, SCREENWIDTH : number, SCREENHEIGHT : number) {
        // Tmp variables
        const hole = 170;
        const startPos = (Math.random() * SCREENHEIGHT/1.6) + SCREENHEIGHT/6 - hole/2;

        this.columnTop = new Entity(entityList.length(), ColumnSprite, SCREENWIDTH, -512 + startPos, 80, 512, 180);
        this.columnBottom = new Entity(entityList.length(), ColumnSprite, SCREENWIDTH, startPos + hole, 80, 512, 0);
        entityList.pushArray(this.columnTop);
        entityList.pushArray(this.columnBottom);
    }


    update() {
        this.columnTop.getPhysicsObject().setHspeed(-3);
        this.columnBottom.getPhysicsObject().setHspeed(-3);
        this.columnTop.update();
        this.columnBottom.update();
    }

    render() {
        return <div>
            {this.columnTop.render()}
            {this.columnBottom.render()}
        </div>;
    }
    
}