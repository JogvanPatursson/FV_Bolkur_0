/*
*
*
*
*
*
*/


class Debug {

    private message:string;
    private value:any;

    constructor(mess:string, val:any) {
        this.message = mess;
        this.value = val;
    }

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