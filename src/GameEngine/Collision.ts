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
    public checkBoxCollision(entityList : EntityList) {
        entityList.getArray().forEach( (entity) => {
            let xTemp = entity.getCollisionObject().getX();
            let yTemp = entity.getCollisionObject().getY();
            let widthTemp = entity.getCollisionObject().getWidth();
            let heightTemp = entity.getCollisionObject().getHeight();

            // 
            if(( this.x < xTemp + widthTemp ) &&
                ( this.x + this.width > xTemp ) &&
                ( this.y < yTemp + heightTemp ) &&
                ( this.y + this.height > yTemp )) {
                    
                // Collision detected
                return true;
            }
        })

    }

    // Checks collision of point with box
    public checkPointCollision(entityList : EntityList) {
        entityList.getArray().forEach( (entity) => {
            let xTemp = entity.getCollisionObject().getX();
            let yTemp = entity.getCollisionObject().getY();
            let widthTemp = entity.getCollisionObject().getWidth();
            let heightTemp = entity.getCollisionObject().getHeight();

            if((this.x < xTemp + widthTemp) &&
                (this.x > xTemp) &&
                (this.y < yTemp + heightTemp) &&
                (this.y > yTemp)) {

                // Collision detected
                return true;
            }
        })
    }

}


export default Collision;