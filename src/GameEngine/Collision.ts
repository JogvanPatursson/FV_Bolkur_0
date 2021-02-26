import Entity from './Entity';
import EntityList from './EntityList';

class Collision{

    private x : number;
    private y : number;
    private width: number;
    private height : number;

    constructor(x = 0, y = 0, width = 0, height = 0)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public getX(){
        return this.x;
    }

    public getY(){
        return this.y;
    }

    public getWidth(){
        return this.width;
    }

    public getHeight(){
        return this.height;
    }

    public setX(x : number){
        this.x = x;
    }

    public setY(y : number){
        this.y = y;
    }

    public setWidth(width : number){
        this.width = width;
    }

    public setHeight(height : number){
        this.height = height;
    }

    // Checks collision of two boxes
    // Returns null if no collision was found, else it returns the entity that it collided with.
    public checkBoxCollision(entityList: EntityList, entity: Entity) : Entity | null {

        for (let i = 0; i < entityList.length(); i++) {
            if(entityList.getEntity(i).getID != entity.getID){
                let xTemp = entityList.getEntity(i).getPhysicsObject().getX();
                let yTemp = entityList.getEntity(i).getPhysicsObject().getCollisionObject().getY();
                let widthTemp = entityList.getEntity(i).getPhysicsObject().getCollisionObject().getWidth();
                let heightTemp = entityList.getEntity(i).getPhysicsObject().getCollisionObject().getHeight();

                if(( this.x < xTemp + widthTemp ) &&
                    ( this.x + this.width > xTemp ) &&
                    ( this.y < yTemp + heightTemp ) &&
                    ( this.y + this.height > yTemp )) {

                    // Collision detected
                    return entityList.getEntity(i);
                }
            }
        }

        // No collision detected
        return null;
    }
}


export default Collision;