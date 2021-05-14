import { Prescription } from "../../prescription/models/prescription"

export class Medic {

    public nom : string;
    public prescription : Prescription[];

    constructor(nom:string, prescription:Prescription[]){
        this.nom = nom;
        this.prescription = prescription;
    }

}
