import { Injectable } from '@angular/core';
import { Medic } from '../../medics/models/medic';
import { Posologie } from '../../posologie/models/posologie';
import { Prescription } from '../../prescription/models/prescription';
import { AssistantOuAssiste } from '../models/assistant-ou-assiste';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  posologieDoliprane1: Posologie = {
    'id': 1,
    'nomMedic': "Doliprane",
    'nombreUnite': 2.5,
    'dateDebut': new Date("2005-03-02"),
    'dateFin': new Date("2021-04-26"),
    'isMatin': true,
    'isMidi': true,
    'isSoir': true,
  }

  posologieDoliprane2: Posologie = {
    'id': 2,
    'nomMedic': "Doliprane",
    'nombreUnite': 2,
    'dateDebut': new Date("2021-04-27"),
    'dateFin': new Date("2021-05-27"),
    'isMatin': true,
    'isMidi': false,
    'isSoir': true,
  }

  posologieMemorex1: Posologie = {
    'id': 3,
    'nomMedic': "Memorex",
    'nombreUnite': 2,
    'dateDebut': new Date("1992-05-20"),
    'dateFin': new Date("1998-05-27"),
    'isMatin': true,
    'isMidi': false,
    'isSoir': true,
  }

  posologieMemorex2: Posologie = {
    'id': 4,
    'nomMedic': "Memorex",
    'nombreUnite': 2,
    'dateDebut': new Date("2002-03-06"),
    'dateFin': new Date("2002-04-08"),
    'isMatin': true,
    'isMidi': false,
    'isSoir': false,
  }

  posologieMemorex3: Posologie = {
    'id': 5,
    'nomMedic': "Memorex",
    'nombreUnite': 1,
    'dateDebut': new Date("2012-12-05"),
    'dateFin': new Date(),
    'isMatin': true,
    'isMidi': true,
    'isSoir': true,
  }
  posologieTiorfan: Posologie = {
    'id': 6,
    'nomMedic': "Tiorfan",
    'nombreUnite': 1,
    'dateDebut': new Date("2021-05-17"),
    'dateFin': new Date("2021-05-20"),
    'isMatin': true,
    'isMidi': true,
    'isSoir': true,
  }
  posologieTiorfan2: Posologie = {
    'id': 7,
    'nomMedic': "Tiorfan",
    'nombreUnite': 2,
    'dateDebut': new Date("1997-12-12"),
    'dateFin': new Date(),
    'isMatin': true,
    'isMidi': false,
    'isSoir': true,
  }
  posologieTiorfan3: Posologie = {
    'id': 8,
    'nomMedic': "Tiorfan",
    'nombreUnite': 1,
    'dateDebut': new Date("2012-12-20"),
    'dateFin': new Date("2012-12-22"),
    'isMatin': false,
    'isMidi': true,
    'isSoir': false,
  }
  posologieCoalgan: Posologie = {
    'id': 9,
    'nomMedic': "Coalgan",
    'nombreUnite': 2,
    'dateDebut': new Date("1515-11-30"),
    'dateFin': new Date("1515-12-20"),
    'isMatin': false,
    'isMidi': true,
    'isSoir': true,
  }  
  posologieCoalgan2: Posologie = {
    'id': 10,
    'nomMedic': "Tiorfan",
    'nombreUnite': 1,
    'dateDebut': new Date("2008-11-13"),
    'dateFin': new Date("2016-06-10"),
    'isMatin': false,
    'isMidi': true,
    'isSoir': false,
    }


  doliprane: Medic = {
    'id':1,
    'nom': 'Doliprane',
    'posologies': [ this.posologieDoliprane1, this.posologieDoliprane2 ]
  }

  memorex: Medic = {
    'id':2,
    'nom': 'Memorex',
    'posologies': [ this.posologieMemorex1, this.posologieMemorex2, this.posologieMemorex3 ]

  }

  dateNaissance = new Date('01/01/1950');
  assistant: AssistantOuAssiste = new AssistantOuAssiste(2, 2, "Dubois", "Marc", true);
  assiste: AssistantOuAssiste = new AssistantOuAssiste(3, 3, "Dubois", "Marco", false);
  user : User = new User(1, 1, "Dubois", "Monique",this.dateNaissance,[this.assistant],[this.assiste],[this.doliprane,this.memorex],[],[]);

  listeUsers = [this.user];

  constructor() { }

  findAll = ():User[] => {
    return this.listeUsers;
  }

  findById = (id: number): User => {
    let userData: User;
    return this.listeUsers.filter(user => user.utilisateurId == id)[0]
  }

  findAllMedicsByUtilisateurId = (id : number) : Medic[] => {
    let user = this.findById(id);
    return user.medicaments;
  }

  addUser = (user : User) => {
    this.listeUsers.push(user);
  }

  deleteUserById = (id: number) => {
    let user = this.findById(id);
    let userPosition = this.listeUsers.indexOf(user);
    this.listeUsers.splice(userPosition,1);
  }

  updateUser = (user: User) => {
    this.deleteUserById(user.utilisateurId);
    this.addUser(user);
  }
}
