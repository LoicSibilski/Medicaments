export class Posologie {
    public id: number;
    public nomMedic: string;
    public nombreUnite: number;
    public dateDebut: Date;
    public dateFin: Date;
    public isMatin: boolean;
    public isMidi: boolean;
    public isSoir: boolean;
    public isActive: boolean;

    constructor(id:number, nomMedic:string, nombreUnite: number, isMatin: boolean, isMidi: boolean, isSoir: boolean, isActive:boolean){
        this.id = id;
        this.nomMedic = nomMedic;
        this.nombreUnite = nombreUnite;
        this.isMatin = isMatin;
        this.isMidi = isMidi;
        this.isSoir = isSoir;
        this.isActive = isActive;
    }

}
