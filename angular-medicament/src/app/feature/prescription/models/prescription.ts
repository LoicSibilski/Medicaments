import { Medic } from "../../medics/models/medic";

export class Prescription {

    public dateDebut: Date;
    public dateFin: Date;
    public medics: Medic[];

    constructor(dateDebut: Date, datefin: Date, medics: Medic[]) {
        
        this.dateDebut = dateDebut;
        this.dateFin = datefin
        this.medics = medics;

    }

}
