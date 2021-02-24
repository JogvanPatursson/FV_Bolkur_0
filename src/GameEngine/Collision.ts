import Entity from './Entity';
import EntityList from './EntityList';

class Collision{

    private x : number;
    private y : number;
    private width: number;
    private height : number;
    private entityList : EntityList;

    constructor(entityList : EntityList, x = 0, y = 0, width = 0, height = 0)
    {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.entityList = entityList;
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
    public checkBoxCollision() : Entity | null {

        this.entityList.getArray().forEach( (entity) => {
            let obj : Entity;
            obj = entity;
            console.log(obj.getT());
            /*
            let xTemp = entity.getPhysicsObject().getCollisionObject().getX();
            let yTemp = entity.getPhysicsObject().getCollisionObject().getY();
            let widthTemp = entity.getPhysicsObject().getCollisionObject().getWidth();
            let heightTemp = entity.getPhysicsObject().getCollisionObject().getHeight();

            if(( this.x < xTemp + widthTemp ) &&
                ( this.x + this.width > xTemp ) &&
                ( this.y < yTemp + heightTemp ) &&
                ( this.y + this.height > yTemp )) {
                    
                // Collision detected
                return entity;
            }*/
        })

        // No collision detected
        return null;
    }

    // Checks collision of point with box
    // Returns null if no collision was found, else it returns the entity that lies within the point.
    public checkPointCollision(x : number, y : number) : Entity | null {
        this.entityList.getArray().forEach( (entity) => {
            let xTemp = entity.getPhysicsObject().getCollisionObject().getX();
            let yTemp = entity.getPhysicsObject().getCollisionObject().getY();
            let widthTemp = entity.getPhysicsObject().getCollisionObject().getWidth();
            let heightTemp = entity.getPhysicsObject().getCollisionObject().getHeight();

            if((x < xTemp + widthTemp) &&
                (x > xTemp) &&
                (y < yTemp + heightTemp) &&
                (y > yTemp)) {

                // Collision detected
                return entity;
            }
        })

        // No collision detected
        return null;
    }

}


export default Collision;