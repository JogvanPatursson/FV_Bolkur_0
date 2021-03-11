/*
    PHYSICS CLASS CREATED FOR THE GAME OF LIFE ENGINE
*/

import Collision from './Collision';
import EntityList from './EntityList';
import MathVector from './MathVector'

export default class PhysicsComponent {
    private collisionObject : Collision;
    private position : MathVector;
    private vspeed : number;
    private hspeed : number;
    private gravity : number;
    private gravityDirection : number;
    private currentGravity : MathVector;

    constructor(x = 0, y = 0, width = 0, height = 0) {
        this.collisionObject = new Collision(x, y, width, height);
        this.position = new MathVector(x, y);
        this.vspeed = 0;
        this.hspeed = 0;
        this.gravity = 0;
        this.gravityDirection = 270;
        this.currentGravity = new MathVector(0, 0);
    }

    // **************************************************************************************************************************
    // GETTERS
    // **************************************************************************************************************************

    public getX() : number {
        return this.position.getX();
    }

    public getY() : number {
        return this.position.getY();
    }

    public getVspeed() : number {
        return this.vspeed;
    }

    public getHspeed() : number {
        return this.hspeed;
    }

    public getGravity() : number {
        return this.gravity;
    }
    
    public getCurrentGravity() : number {
        return this.currentGravity.length();
    }

    public getGravityDirection() : number {
        return this.gravityDirection;
    }

    public getCollisionObject() : Collision {
        return this.collisionObject;
    }

    // **************************************************************************************************************************
    // SETTERS
    // **************************************************************************************************************************
    
    /*
        setVspeed
        Sets the vertical speed of the 
    */
    public setVspeed(vspeed : number) {
        this.vspeed = vspeed;
    }

    /*
        setHspeed
        Sets the horisontal speed of the 
    */
    public setHspeed(hspeed : number) {
        this.hspeed = hspeed;
    }

    /*
        setX
        Sets the x position of the physics object
    */
    public setX(x : number) {
        this.position.setX(x);
    }

    /*
        setY
        Sets the y position of the physics object
    */
    public setY(y : number) {
        this.position.setY(y);
    }

    /*
        setGravity
        Sets the gravitational force
    */
    public setGravity(gravity : number) {
        if (this.gravity != gravity) {
            this.currentGravity = new MathVector(0, 0);
            this.gravity = gravity;
        }
    }

    /*
        setGravityDirection
        Sets the direction of gravity
    */
    public setGravityDirection(direction : number) {
        this.gravityDirection = direction;
    }

    // **************************************************************************************************************************
    // PUBLIC METHODS
    // **************************************************************************************************************************

    /*
        update
        Updates the physics this should be called repeately
    */
    public update() {
        // Hspeed
        this.applyDirectionalForce(this.getGravityDirection() + 90, this.getHspeed());

        // Vspeed
        this.applyDirectionalForce(this.getGravityDirection(), this.getVspeed());

        // Gravity
        this.updateGravity();
        
        // Update collision mask
        this.collisionObject.setX(this.getX());
        this.collisionObject.setY(this.getY());
    }

    /*
        moveTowardPoint
        Moves the physics object towards a point
        @param x : x position of point to move towards
        @param y : y position of point to move towards
        @param force : how many pixels the physics object shall move each time the method is called
    */
    public applyForceTowardsPoint(x : number, y : number, force : number) {
        const vec = new MathVector;
        vec.createVectorFromTwoPoints(this.position.getX(), this.position.getY(), x, y);
        vec.normalize();
        vec.scalarMultiplication(force);
        this.position.add(vec);
    }

    /*
        applyDirectionalForce
        Applies a force in a given direction to the physics object
        @param direction : the direction the force should be applied in
        @param force : how many pixels the physics object shall move each time the method is called
    */
    public applyDirectionalForce(direction : number, force : number) {
        const directionVector = new MathVector;
        directionVector.createDirectionalVector(direction, force);
        this.position.add(directionVector);
    }

    // **************************************************************************************************************************
    // PRIVATE METHODS
    // **************************************************************************************************************************

    private updateGravity() {
        this.currentGravity.createDirectionalVector(this.gravityDirection, this.currentGravity.length() + this.gravity);
        this.position.add(this.currentGravity);
    }

}