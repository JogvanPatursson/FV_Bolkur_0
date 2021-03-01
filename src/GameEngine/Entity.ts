import React from 'react';
import EntityList from './EntityList';
import PhysicsComponent from './Physics';
import TextureComponent from './TextureComponent';

// Class for all game entities
class Entity {
    // Class members
    // Physics object
    private physicsObject : PhysicsComponent;
    private spriteLocation : string;
    private id : number;
    private rotation : number;

    // Class constructor
    constructor(id = -1, spriteLocation : string , x = 0, y = 0, width = 0, height = 0, rotation = 0){
        this.physicsObject = new PhysicsComponent(x, y, width, height);
        this.spriteLocation = spriteLocation;
        this.id = id;
        this.rotation = rotation;
    }

    public update() {
        this.physicsObject.update();
    }

    public render() {
        const tmpX = this.physicsObject.getX();
        const tmpY = this.physicsObject.getY();
        const tmpWidth = this.physicsObject.getCollisionObject().getWidth();
        const tmpHeight = this.physicsObject.getCollisionObject().getHeight();
        //console.log(tmpX);

        return TextureComponent(this.spriteLocation, tmpX, tmpY, tmpWidth, tmpHeight, this.rotation);
    }

    public setRotation(rotation : number) {
        this.rotation = rotation;
    }

    // Class methods
    public getPhysicsObject() : PhysicsComponent {
        return this.physicsObject;
    }

    public get getID() : number {
        return this.id;
    }

    /**
     * CollidesWith checks if two entities collides with each other
     */
    public collides(entityList: EntityList) {
        if(this.getPhysicsObject().getCollisionObject().checkBoxCollision(entityList, this) != null){
            console.log("WHOA COLLISION!");
            return true;
        }
        return false;
    }

}
    
export default Entity;