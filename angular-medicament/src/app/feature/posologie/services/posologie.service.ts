import { Injectable } from '@angular/core';
import { Posologie } from '../models/posologie';
import { formatDate } from "@angular/common";;

@Injectable({
  providedIn: 'root'
})
export class PosologieService {

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

  listePosologies = [
    this.posologieDoliprane1,
    this.posologieDoliprane2,
    this.posologieMemorex1,
    this.posologieMemorex2,
    this.posologieMemorex3,
    this.posologieTiorfan,
    this.posologieTiorfan2,
    this.posologieTiorfan3,
    this.posologieCoalgan,
    this.posologieCoalgan2,
  ];

  constructor() { }

  findAll = (): Posologie[] => {
    return this.listePosologies;
  }

  findAllCurrentDate = () : Posologie[] => {
    let listeCurrentDate : Posologie[] = [];
    let dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    let date = new Date(dateNow);
    this.listePosologies.forEach(poso => {
      if (poso.dateDebut <= date && date <= poso.dateFin){
        listeCurrentDate.push(poso);
      }
    });
    console.log(listeCurrentDate);
    return listeCurrentDate;
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
