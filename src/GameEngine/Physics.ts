/*
    PHYSICS CLASS CREATED FOR THE GAME OF LIFE ENGINE
*/

import MathVector from './MathVector'

export default class PhysicsComponent {
    private position : MathVector;
    private vspeed : number;
    private hspeed : number;
    private gravity : number;
    private gravityDirection : number;
    private currentGravity : MathVector;

    constructor(x = 0, y = 0) {
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

    public getGravityDirection() : number {
        return this.gravityDirection;
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
        this.gravity = gravity;
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

        this.updateGravity();
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
        this.moveToFreeSpace(vec);
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
        this.moveToFreeSpace(directionVector);
    }

    /*
        setGravityDirectionTowardsPoint
        Sets the direction of gravity towards a point
        @param x : x position of point to gravitate towards
        @param y : y position of point to gravitate towards
    */
    public setGravityDirectionTowardsPoint(x : number, y : number) {
        const vec = new MathVector;
        vec.createVectorFromTwoPoints(this.position.getX(), this.position.getY(), x, y);
        this.gravityDirection = vec.getAngle();
    }

    // **************************************************************************************************************************
    // PRIVATE METHODS
    // **************************************************************************************************************************

    private updateGravity() {
        this.currentGravity.setY(this.currentGravity.getY() + this.gravity);
        this.moveToFreeSpace(this.currentGravity);
    }

    private moveToFreeSpace(vec : MathVector) {
        // if solid then vector to last free space.
        this.position.add(vec);
    }

}