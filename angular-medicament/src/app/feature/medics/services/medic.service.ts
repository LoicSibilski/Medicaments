import { Injectable } from '@angular/core';
import { Posologie } from '../../posologie/models/posologie';
import { Medic } from '../models/medic';

@Injectable({
  providedIn: 'root'
})
export class MedicService {


  posologieDoliprane1: Posologie = {
    'id':1,
    'nombreUnite': 2.5,
    'dateDebut': new Date("2005-03-02"),
    'dateFin': new Date("2021-04-26"),
    'isMatin': true,
    'isMidi': true,
    'isSoir': true,
    'isActive': false,
  }

  posologieDoliprane2: Posologie = {
    'id':2,
    'nombreUnite': 2,
    'dateDebut': new Date("2021-04-27"),
    'dateFin': new Date("2021-05-27"),
    'isMatin': true,
    'isMidi': false,
    'isSoir': true,
    'isActive': true,
  }

  posologieMemorex1: Posologie = {
    'id':3,
    'nombreUnite': 2,
    'dateDebut': new Date("1992-05-20"),
    'dateFin': new Date("1998-05-27"),
    'isMatin': true,
    'isMidi': false,
    'isSoir': true,
    'isActive': false,
  }

  posologieMemorex2: Posologie = {
    'id':4,
    'nombreUnite': 2,
    'dateDebut': new Date("2002-03-06"),
    'dateFin': new Date("2002-04-08"),
    'isMatin': true,
    'isMidi': false,
    'isSoir': false,
    'isActive': false,
  }

  posologieMemorex3: Posologie = {
    'id':5,
    'nombreUnite': 1,
    'dateDebut': new Date("2012-12-05"),
    'dateFin': new Date(),
    'isMatin': true,
    'isMidi': true,
    'isSoir': true,
    'isActive': true,
  }
  posologieTiorfan: Posologie = {
    'id': 6,
    'nombreUnite': 1,
    'dateDebut': new Date("2021-05-17"),
    'dateFin': new Date("2021-05-20"),
    'isMatin': true,
    'isMidi': true,
    'isSoir': true,
    'isActive': true,
  }


  doliprane: Medic = {
    'id': 1,
    'nom': 'Doliprane',
    'posologies': [this.posologieDoliprane1, this.posologieDoliprane2]
  }

  memorex: Medic = {
    'id': 2,
    'nom': 'Memorex',
    'posologies': [this.posologieMemorex1, this.posologieMemorex2, this.posologieMemorex3]
  }

  tiorfan: Medic = {
    'id': 3,
    'nom': 'Tiorfan',
    'posologies': [this.posologieTiorfan]
  }
  listeMedics = [this.doliprane, this.memorex, this.tiorfan];

  constructor() { }

  findAll = (): Medic[] => {
    return this.listeMedics;
  }

  findById = (id: number): Medic => {
    let medicTmp: Medic;
    this.listeMedics.forEach(medic => {
      if (medic.id == id) {
        medicTmp = medic;
      }
    })
    console.log("aucune Medic avec cette id")
    return medicTmp;
  }

  findAllPosologiesByMedicId = (id: number): Posologie[] => {
    let medic = this.findById(id);
    return medic.posologies;
  }

  save = (Medic: Medic) => {
    console.log("Liste des Medic : " + this.listeMedics);
    console.log("Ajout de la Medic : " + Medic);
    this.listeMedics.push(Medic);
    console.log("Liste des Medic : " + this.listeMedics);
  }

  delete = (id: number) => {
    console.log("Liste des Medic : " + this.listeMedics);
    let medic = this.findById(id);
    console.log("Suppression de la Medic : " + medic);
    let pos = this.listeMedics.indexOf(medic)
    this.listeMedics.splice(pos, 1);
    console.log("Liste des Medic : " + this.listeMedics);
  }

  update = (Medic: Medic) => {
    console.log("Liste des Medic : " + this.listeMedics);
    console.log("MAJ de la Medic : " + Medic);
    this.delete(Medic.id);
    this.save(Medic);
    console.log("Liste des Medic : " + this.listeMedics);
  }
}
