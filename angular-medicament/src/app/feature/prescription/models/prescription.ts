export class Prescription {

    public dateDebut: Date;
    public dateFin: Date;
    public nombreUnite: number;
    public isMatin: boolean;
    public isMidi: boolean;
    public isSoir: boolean;

    constructor(dateDebut: Date, datefin: Date, nombreUnite: number, isMatin: boolean, isMidi: boolean, isSoir: boolean) {
        this.dateDebut = dateDebut;
        this.dateFin = datefin
        this.nombreUnite = nombreUnite;
        this.isMatin = isMatin;
        this.isMidi = isMidi;
        this.isSoir = isSoir;

    }

}
