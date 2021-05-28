import { Injectable } from '@angular/core';
import { Posologie } from '../../posologie/models/posologie';
import { Medic } from '../models/medic';
import { formatDate } from "@angular/common";;

@Injectable({
  providedIn: 'root'
})
export class MedicService {


  posologieDoliprane1: Posologie = {
    'id': 1,
    'nomMedic': "Doliprane",
    'nombreUnite': 2.5,
    'dateDebut': new Date("2005-03-02"),
    'dateFin': new Date("2021-04-26"),
    'isMatin': true,
    'isMidi': true,
    'isSoir': true,
    'isActive': false,
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
    'isActive': true,
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
    'isActive': false,
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
    'isActive': false,
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
    'isActive': true,
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
    'isActive': true,
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
    'isActive': true,
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
    'isActive': false,
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
    'isActive': false,
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
    'posologies': [this.posologieTiorfan, this.posologieTiorfan2, this.posologieTiorfan3]
  }

  coalgan: Medic = {
    'id': 4,
    'nom': 'Colagan',
    'posologies': [this.posologieCoalgan, this.posologieCoalgan2],
  }
  listeMedics = [this.doliprane, this.memorex, this.tiorfan, this.coalgan];

  constructor() { }

  getNextId = (): number => {
    let nextId: number = 1;
    this.listeMedics.forEach(medic => {
      if(medic.id === nextId){
        nextId++;
      } else{
        return nextId;
      }
    });
    return nextId;
  }

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

  findAllPosologiesByMedicIdWithCurrentDate = (id: number): Posologie[] => {
    let medic = this.findById(id);
    let listeCurrentDate : Posologie[] = [];
    let dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    let date = new Date(dateNow);
    medic.posologies.forEach(poso => {
      if (poso.dateDebut <= date && date <= poso.dateFin){
        listeCurrentDate.push(poso);
      }
    });
    return listeCurrentDate;
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
