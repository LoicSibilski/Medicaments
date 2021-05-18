import { Medic } from "../../medics/models/medic";

export class Prescription {

    public id: number;
    public dateDebut: Date;
    public dateFin: Date;
    public medics: Medic[];

    constructor(id: number, dateDebut: Date, datefin: Date, medics: Medic[]) {
        this.id = id;
        this.dateDebut = dateDebut;
        this.dateFin = datefin
        this.medics = medics;

    }

}
