import { Injectable } from '@angular/core';
import { Posologie } from '../models/posologie';

@Injectable({
  providedIn: 'root'
})
export class PosologieService {

  posologieDoliprane1: Posologie = {
    'id': 1,
    'nombreUnite': 2.5,
    'isMatin': true,
    'isMidi': true,
    'isSoir': true,
    'isActive': false,
  }

  posologieDoliprane2: Posologie = {
    'id': 2,
    'nombreUnite': 2,
    'isMatin': true,
    'isMidi': false,
    'isSoir': true,
    'isActive': true,
  }

  posologieMemorex1: Posologie = {
    'id': 3,
    'nombreUnite': 2,
    'isMatin': true,
    'isMidi': false,
    'isSoir': true,
    'isActive': false,
  }

  posologieMemorex2: Posologie = {
    'id': 4,
    'nombreUnite': 2,
    'isMatin': true,
    'isMidi': false,
    'isSoir': false,
    'isActive': false,
  }

  posologieMemorex3: Posologie = {
    'id': 5,
    'nombreUnite': 1,
    'isMatin': true,
    'isMidi': true,
    'isSoir': true,
    'isActive': true,
  }

  posologieTiorfan: Posologie = {
    'id': 6,
    'nombreUnite': 1,
    'isMatin': true,
    'isMidi': true,
    'isSoir': true,
    'isActive': true,
  }

  listePosologies = [
    this.posologieDoliprane1,
    this.posologieDoliprane2,
    this.posologieMemorex1,
    this.posologieMemorex2,
    this.posologieMemorex3,
    this.posologieTiorfan
  ];

  constructor() { }

  findAll = (): Posologie[] => {
    return this.listePosologies;
  }

  findById = (id: number): Posologie => {
    let posoTmp: Posologie;
    this.listePosologies.forEach(posologie => {
      if (posologie.id == id) {
        posoTmp = posologie;
      }
    })
    console.log("aucune Posologie avec cette id")
    return posoTmp;
  }

  save = (posologie: Posologie) => {
    console.log("Liste des Posologie : " + this.listePosologies);
    console.log("Ajout de la Posologie : " + posologie);
    this.listePosologies.push(posologie);
    console.log("Liste des Posologie : " + this.listePosologies);
  }

  delete = (id: number) => {
    console.log("Liste des Posologie : " + this.listePosologies);
    let posologie = this.findById(id);
    console.log("Suppression de la Posologie : " + posologie);
    let pos = this.listePosologies.indexOf(posologie)
    this.listePosologies.splice(pos, 1);
    console.log("Liste des Posologie : " + this.listePosologies);
  }

  update = (posologie: Posologie) => {
    console.log("Liste des Posologie : " + this.listePosologies);
    console.log("MAJ de la Posologie : " + posologie);
    this.delete(posologie.id);
    this.save(posologie);
    console.log("Liste des Posologie : " + this.listePosologies);
  }
}
