import { Posologie } from "../../posologie/models/posologie";
import { Prescription } from "../../prescription/models/prescription"

export class Medic {

    public nom : string;
    public posologies : Posologie[];

    constructor(nom:string, posologies:Posologie[]){
        this.nom = nom;
        this.posologies = posologies;
    }

}
