export class Posologie {
    public id: number;
    public nombreUnite: number;
    public isMatin: boolean;
    public isMidi: boolean;
    public isSoir: boolean;
    public isActive: boolean;

    constructor(id:number, nombreUnite: number, isMatin: boolean, isMidi: boolean, isSoir: boolean, isActive:boolean){
        this.id = id;
        this.nombreUnite = nombreUnite;
        this.isMatin = isMatin;
        this.isMidi = isMidi;
        this.isSoir = isSoir;
        this.isActive = isActive;
    }

}
