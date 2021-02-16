
class PhysicsComponent {
    public x : number;
    public y : number;
    public vspeed : number;
    public hspeed : number;
    public gravity : number;
    
    private currentGravity : number;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
        this.vspeed = 0;
        this.hspeed = 0;
        this.gravity = 0;
        this.currentGravity = 0;
    }

    public update() {
        this.updateGravity();
        
        this.x += this.vspeed;
        this.y += this.hspeed + this.currentGravity;
    }

    public setVspeed(vspeed : number) {
        this.vspeed = vspeed;
    }

    public setHspeed(hspeed : number) {
        this.hspeed = hspeed;
    }

    public setX(x : number) {
        this.x = x;
    }

    public setY(y : number) {
        this.y = y;
    }

    public setGravity(gravity : number) {
        this.gravity = gravity;
    }

    private updateGravity() {
        if (this.currentGravity < this.gravity) {
            this.currentGravity += 0.1;
        }
    }

}

export default PhysicsComponent;