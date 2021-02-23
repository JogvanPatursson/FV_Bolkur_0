/*
    VECTOR CLASS CREATED FOR THE GAME OF LIFE ENGINE
*/

import { couldStartTrivia } from "typescript";


const RadToDeg = 57.2957795;

export default class MathVector {
    private x : number;
    private y : number;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    // **************************************************************************************************************************
    // GETTERS
    // **************************************************************************************************************************

    getX() : number {
        return this.x;
    }

    getY() : number {
        return this.y;
    }

    // **************************************************************************************************************************
    // SETTER
    // **************************************************************************************************************************

    setX(x : number) {
        this.x = x;
    }

    setY(y : number) {
        this.y = y;
    }

    // **************************************************************************************************************************
    // PUBLIC METHODS
    // **************************************************************************************************************************

    /*
        vectorFromTwoPoints
        Creates a vector from two points
        @param x1 : X pos of first point
        @param y1 : y pos of first point
        @param x2 : X pos of second point
        @param y2 : y pos of second point
        @return : returns a MathVector
    */
    public createVectorFromTwoPoints(x1 : number, y1 : number, x2 : number, y2 : number) : MathVector {
        this.x = x2 - x1;
        this.y = y2 - y1;

        return this;
    }

    /*
        directionalVector
        Creates a vector based on a direction and magnitude
        @param direction : The direction the vector shall be pointing
        @param magnitude : The magnitude/length of the vector
        @return : returns a MathVector
    */
    public createDirectionalVector(direction : number, magnitude : number) : MathVector {
        this.createVectorFromTwoPoints(0, 0, 1, 0);
        this.setAngle(direction);
        this.scalarMultiplication(magnitude);

        return this;
    }

    /*
        add
        Adds two vector together
        @param vec : The vector that shall be added upon the current vector
        @return : returns a MathVector
    */
   public add(vec : MathVector) : MathVector {
        
        this.x = this.x + vec.x;
        this.y = this.y + vec.y;
        
        return this;
    }

    /*
        subtract
        Subtracts a vector from another vector
        @param vec : The vector that shall be subtracted from the current vector
        @return : returns a MathVector
    */
    public subtract(vec : MathVector) : MathVector {
        
        this.x = this.x - vec.x;
        this.y = this.y - vec.y;
        
        return this;
    }

    /*
        length
        Returns the length of the vector
        @return : the length of the vector
    */
    public length() : number {
        const vecLength = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));  // Pythoagras Theorm
        return vecLength;
    }

    /*
        getAngle
        Returns the angle of the vector in degrees, where an angle of 0 is a right pointing vector.
        @return : the angle in degrees
    */
    public getAngle() : number {
        return Math.atan(this.getX() / this.getY());
    }

    /*
        setAngle
        Sets the angle of the vector to a desired angle
        @param angle : angle in degrees
    */
    public setAngle(angle : number) {
        const vecLength = this.length();

        // Use 2d rotational matrix
        const x2 = 1*Math.cos(-angle/RadToDeg);
        const y2 = 1*Math.sin(-angle/RadToDeg);

        // Use sinus and cosinus to set angle
        this.createVectorFromTwoPoints(0, 0, x2, y2);
        
        this.scalarMultiplication(vecLength);
    }

    /*
        addToAngle
        Changes the angle by a desired value
        @param angle : angle in degrees
    */
    public addToAngle(angle : number) {
        this.setAngle(this.getAngle() + angle);
    }

    /*
        scalarMultiplication
        Scales the vector by a scalar
        @param scalar : The value the vector shall be scaled by
        @return : returns a MathVector
    */
    public scalarMultiplication(scalar : number) : MathVector {
        
        this.x = this.x * scalar;
        this.y = this.y * scalar;

        return this;
    }

    /*
        scalarDivision
        Shrinks the vector by a scalar
        @param scalar : The value the vector shall be shunken by
        @return : returns a MathVector
    */
    public scalarDivision(scalar : number) : MathVector {
        
        this.x = this.x / scalar;
        this.y = this.y / scalar;

        return this;
    }

    /*
        dotProduct
        Calculates the dot product of two vectors
        @param vec : the second vector the dot product shall be calculated by
        @return : returns the dot product as a number
    */
    public dotProduct(vec : MathVector) : number {
        return this.x * vec.x + this.y * vec.y;
    }

    /*
        normalize
        Normalizes the vector turning it into a unit vector
        @return : returns the MathVector
    */
    public normalize() : MathVector {
        return this.scalarDivision(this.length());
    }
 
}