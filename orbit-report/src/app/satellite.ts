export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    isOdd: boolean = true;

    constructor(name: string, type:string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning(): boolean {
        if(this.type === 'Space Debris') {
            return true;
        }
        return false;
    }

    isEven(): boolean {
        if(this.isOdd === true) {
            this.isOdd = false;
            return this.isOdd;
        }
        else {
            this.isOdd = true;
            return this.isOdd;
        }
    }
}
