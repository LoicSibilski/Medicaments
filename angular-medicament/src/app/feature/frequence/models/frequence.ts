import { Horaire } from "./horaire";

export class Frequence {

    public id: string;
    public jours: Date[];
    public horaires: Horaire[];

    constructor(id:string, jours:Date[], horaires:Horaire[]){
        this.id = id;
        this.jours = jours;
        this.horaires = horaires;
    }

}
