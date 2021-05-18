export class Posologie {

    public nombreUnite: number;
    public isMatin: boolean;
    public isMidi: boolean;
    public isSoir: boolean;
    public isActive: boolean;

    constructor(nombreUnite: number, isMatin: boolean, isMidi: boolean, isSoir: boolean, isActive:boolean){
        this.nombreUnite = nombreUnite;
        this.isMatin = isMatin;
        this.isMidi = isMidi;
        this.isSoir = isSoir;
        this.isActive = isActive;
    }

}
