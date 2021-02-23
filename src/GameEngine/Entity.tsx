import Collision from './Collision';
import EntityList from './EntityList';

// Class for all game entities
class Entity{
    // Class members
    // Collision object
    private collisionObject : Collision;

    // Class constructor
    constructor(collisionObject : Collision){
        this.collisionObject = collisionObject;
    }

    // Class methods
    public getCollisionObject() {
        return this.collisionObject;
    }

}
    
    export default Entity;