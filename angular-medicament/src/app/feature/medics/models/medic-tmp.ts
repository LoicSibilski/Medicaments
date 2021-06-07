export class MedicTmp {

    public nom: String;
    public dureeData: String[];
    public frequenceData: String[];

    constructor(nom: String, dureeData:String[], frequenceData:String[]){
        this.nom = nom;
        this.dureeData = dureeData;
        this.frequenceData = frequenceData;
    }
}
