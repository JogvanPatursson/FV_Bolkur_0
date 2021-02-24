import EntityList from './EntityList';
import PhysicsComponent from './Physics';
import TextureComponent from './TextureComponent';

// Class for all game entities
class Entity{
    // Class members
    // Physics object
    private physicsObject : PhysicsComponent;
    private spriteLocation : string;

    // Class constructor
    constructor(entityList : EntityList, spriteLocation : string , x = 0, y = 0, width = 0, height = 0){
        this.physicsObject = new PhysicsComponent(entityList, x, y, width, height);
        this.spriteLocation = spriteLocation;
    }

    public render() {
        this.physicsObject.update();
        const tmpX = this.physicsObject.getX();
        const tmpY = this.physicsObject.getY();
        const tmpWidth = this.physicsObject.getCollisionObject().getWidth();
        const tmpHeight = this.physicsObject.getCollisionObject().getHeight();

        return TextureComponent(this.spriteLocation, tmpX, tmpY, tmpWidth, tmpHeight);
    }

    // Class methods
    public getPhysicsObject() : PhysicsComponent {
        return this.physicsObject;
    }
    
    public getT() : string {
        return "t";
    }

}
    
export default Entity;