/*
    File    :   Debug.tsx
    Purpose :   This is for debugging in the game engine.
                The user can create debug objects with a message and a value to be checked.
*/


class Debug {

    //========================================================
    // Variables
    //========================================================

    private message:string; // the debug message to be displayed
    private value:any;      // the value you want to check


    //========================================================
    // Constructor
    //========================================================

    constructor(mess:string, val:any) {
        this.message = mess;
        this.value = val;
    }


    //========================================================
    // functions
    //========================================================

    public getMessage() : string {
        console.log(this.message);
        return this.message;
    }

    public getValue() : any {
        console.log(this.value);
        return this.value;
    }

    public setValue(val:any) : void {
        this.value = val;
    }

    public printToLog() : void {
        console.log(this.message + " : " + this.value);
    }
}

export default Debug;