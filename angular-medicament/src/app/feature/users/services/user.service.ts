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
    'id':1,
    'nombreUnite': 2.5,
    'isMatin': true,
    'isMidi': true,
    'isSoir': true,
    'isActive': false,
  }

  posologieDoliprane2: Posologie = {
    'id':2,
    'nombreUnite': 2,
    'isMatin': true,
    'isMidi': false,
    'isSoir': true,
    'isActive': true,
  }

  posologieMemorex1: Posologie = {
    'id':3,
    'nombreUnite': 2,
    'isMatin': true,
    'isMidi': false,
    'isSoir': true,
    'isActive': false,
  }

  posologieMemorex2: Posologie = {
    'id':4,
    'nombreUnite': 2,
    'isMatin': true,
    'isMidi': false,
    'isSoir': false,
    'isActive': false,
  }

  posologieMemorex3: Posologie = {
    'id':5,
    'nombreUnite': 1,
    'isMatin': true,
    'isMidi': true,
    'isSoir': true,
    'isActive': true,
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
