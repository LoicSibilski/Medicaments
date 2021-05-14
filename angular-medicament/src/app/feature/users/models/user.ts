import { Medic } from "../../medics/models/medic";
import { Notification } from "../../notification/models/notification";
import { Rendezvous } from "../../rendezvous/models/rendezvous";

export class User {
    public compteId : number;
    public utilisateurId : number;
    public nom : string;
    public prenom : string;
    public dateDeNaissance : Date;
    public assistants : User[];
    public assistes : User[];
    public medicaments : Medic[];
    public notifications : Notification[];
    public rendezVous : Rendezvous[];

    dateNaissance = new Date('01/01/1950');
    assistant: User = new User(2, 2, "Dubois", "Marc",this.dateNaissance,[],[],[],[],[]);
    assiste: User = new User(3, 3, "Dubois", "Marco",this.dateNaissance,[],[],[],[],[]);
    user : User = new User(1, 1, "Dubois", "Monique",this.dateNaissance,[this.assistant],[],[],[],[]);


    constructor(
        compteId : number,
        utilisateurId : number,
        nom : string,
        prenom : string,
        dateDeNaissance : Date,
        assistants : User[],
        assistes : User[],
        medicaments : Medic[],
        notifications : Notification[],
        rendezVous : Rendezvous[]
        ) {
            this.compteId = compteId;
            this.utilisateurId = utilisateurId;
            this.nom = nom;
            this.prenom = prenom;
            this.dateDeNaissance = dateDeNaissance;
            this.assistants = assistants;
            this.assistes = assistes;
            this.medicaments = medicaments;
            this.notifications = notifications;
            this.rendezVous = rendezVous;
    }
}
