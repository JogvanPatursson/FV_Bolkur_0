import Entity from './Entity';

class EntityList{
    private Entities: Array<Entity> = [];

    constructor(){
        
    }

    // Test
    public pushArray(entity : Entity) {
        this.Entities.push(entity);
    }

    public length() : number {
        return this.Entities.length;
    }

    public getFirstArrayItem() {
        return this.Entities.pop();
    }

    public getArray() : Entity[] {
        return this.Entities;
    }
}

export default EntityList;