import { Posologie } from "../../posologie/models/posologie";

export class Medic {

    public id: number;
    public nom : string;
    public posologies : Posologie[];

    constructor(id:number, nom:string, posologies:Posologie[]){
        this.id = id;
        this.nom = nom;
        this.posologies = posologies;
    }

}
