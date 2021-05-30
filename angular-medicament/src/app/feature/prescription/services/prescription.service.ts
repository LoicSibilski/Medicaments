import { Injectable } from '@angular/core';
import { Medic } from '../../medics/models/medic';
import { MedicService } from '../../medics/services/medic.service';
import { Posologie } from '../../posologie/models/posologie';
import { Prescription } from '../models/prescription';
import { formatDate } from "@angular/common";;

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  medicService: MedicService;

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

  prescrDoli1: Prescription = {
    'id': 1,
    'dateDebut': new Date("1992-05-20"),
    'dateFin': new Date("1998-05-27"),
    'medics': [this.doliprane],
  }

  prescrDoliMemorex: Prescription = {
    'id': 2,
    'dateDebut': new Date("2014-05-30"),
    'dateFin': new Date("2022-01-01"),
    'medics': [this.doliprane, this.memorex]
  }

  prescrTiorfan: Prescription = {
    'id': 3,
    'dateDebut': new Date("2003-06-12"),
    'dateFin': new Date("2005-09-23"),
    'medics': [this.tiorfan]
  }
  prescrTiorfan2: Prescription = {
    'id': 4,
    'dateDebut': new Date("2021-05-20"),
    'dateFin': new Date("2021-07-20"),
    'medics': [this.tiorfan, this.doliprane]
  }
  prescrTiorfan3: Prescription = {
    'id': 5,
    'dateDebut': new Date("1992-05-20"),
    'dateFin': new Date("1998-05-27"),
    'medics': [this.tiorfan, this.coalgan, this.memorex]
  }
  prescrCoalgan: Prescription = {
    'id': 6,
    'dateDebut': new Date("2012-09-25"),
    'dateFin': new Date("2014-04-15"),
    'medics': [this.coalgan, this.doliprane]
  }
  listePrescriptions = [this.prescrDoli1, this.prescrDoliMemorex, this.prescrTiorfan, this.prescrTiorfan2, this.prescrTiorfan3, this.prescrCoalgan];

  constructor(medicService: MedicService) {
    this.medicService = medicService;
  }

  getNextId = (): number => {
    let nextId: number = 1;
    this.listePrescriptions.forEach(prescr => {
      if (prescr.id === nextId) {
        nextId++;
      } else {
        return nextId;
      }
    });
    return nextId;
  }

  findAll = (): Prescription[] => {
    return this.listePrescriptions
  }

  findAllCurrentDate = (): Prescription[] => {
    let listeCurrentDate: Prescription[] = [];
    let dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    let date = new Date(dateNow);
    this.listePrescriptions.forEach(prescr => {
      if (prescr.dateDebut <= date && date <= prescr.dateFin) {
        listeCurrentDate.push(prescr);
      }
    });
    console.log(listeCurrentDate);
    return listeCurrentDate;
  }

  findById = (id: number): Prescription => {
    let prescrTmp: Prescription;
    this.listePrescriptions.forEach(prescr => {
      if (prescr.id == id) {
        prescrTmp = prescr;
      }
    })
    console.log("aucune prescription avec cette id")
    return prescrTmp;
  }

  findAllMedicsByPrescrId = (id: number): Medic[] => {
    let prescr = this.findById(id);
    return prescr.medics;
  }

  save = (prescription: Prescription) => {
    console.log("Liste des prescription : " + this.listePrescriptions);
    console.log("Ajout de la prescription : " + prescription);
    console.log("dateDebut: " + prescription.dateDebut);
    console.log("dateFin: " + prescription.dateFin);
    console.log("medics:");
    prescription.medics.forEach(element => {
      console.log("dateDebut" + element.nom);
      console.log("posologie :");
      console.log("dateDebut: " + element.posologies[0].dateDebut);
      console.log("dateFin: " + element.posologies[0].dateFin);
      console.log("nombreUnite: " + element.posologies[0].nombreUnite);
      
    });

    this.listePrescriptions.push(prescription);
    console.log("Liste des prescription : " + this.listePrescriptions);
  }

  delete = (id: number) => {
    console.log("Liste des prescription : " + this.listePrescriptions);
    let prescr = this.findById(id);
    console.log("Suppression de la prescription : " + prescr);
    let pos = this.listePrescriptions.indexOf(prescr)
    this.listePrescriptions.splice(pos, 1);
    console.log("Liste des prescription : " + this.listePrescriptions);
  }

  update = (prescription: Prescription) => {
    console.log("Liste des prescription : " + this.listePrescriptions);
    console.log("MAJ de la prescription : " + prescription);
    this.delete(prescription.id);
    this.save(prescription);
    console.log("Liste des prescription : " + this.listePrescriptions);
  }
}
