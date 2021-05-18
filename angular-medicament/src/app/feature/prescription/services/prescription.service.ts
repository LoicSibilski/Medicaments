import { Injectable } from '@angular/core';
import { Medic } from '../../medics/models/medic';
import { MedicService } from '../../medics/services/medic.service';
import { Posologie } from '../../posologie/models/posologie';
import { Prescription } from '../models/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  medicService : MedicService;

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
  posologieTiorfan: Posologie = {
    'id': 6,
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

  tiorfan: Medic = {
    'id': 3,
    'nom': 'Tiorfan',
    'posologies': [this.posologieTiorfan]
  }

  prescrDoli1: Prescription = {
    'id':1,
    'dateDebut': new Date("1992-05-20"),
    'dateFin': new Date("1998-05-27"),
    'medics' : [this.doliprane],
  }

  prescrDoliMemorex: Prescription = {
    'id':2,
    'dateDebut': new Date("2014-05-12"),
    'dateFin': new Date("2021-01-01"),
    'medics' : [this.doliprane, this.memorex]
  }

  prescrTiorfan: Prescription = {
    'id':3,
    'dateDebut': new Date("2021-05-17"),
    'dateFin': new Date("2021-05-19"),
    'medics' : [this.tiorfan]
  }

  listePrescriptions =[this.prescrDoli1, this.prescrDoliMemorex];

  constructor(medicService: MedicService) {
    this.medicService = medicService;
   }

  findAll = (): Prescription[] => {
    return this.listePrescriptions
  }

  findById = (id:number): Prescription => {
    let prescrTmp : Prescription;
    this.listePrescriptions.forEach(prescr =>{
      if (prescr.id == id){
        prescrTmp = prescr;
      }
    })
    console.log("aucune prescription avec cette id")
    return prescrTmp;
  }

  findAllMedicsByPrescrId = (id:number) :Medic[] =>{
    let prescr = this.findById(id);
    return prescr.medics;
  }

  save = (prescription : Prescription) => {
    console.log("Liste des prescription : "+ this.listePrescriptions);
    console.log("Ajout de la prescription : "+ prescription);
    this.listePrescriptions.push(prescription);
    console.log("Liste des prescription : "+ this.listePrescriptions);
  }

  delete = (id:number) => {
    console.log("Liste des prescription : "+ this.listePrescriptions);
    let prescr = this.findById(id);
    console.log("Suppression de la prescription : "+ prescr);
    let pos = this.listePrescriptions.indexOf(prescr)
    this.listePrescriptions.splice(pos,1);
    console.log("Liste des prescription : "+ this.listePrescriptions);
  }
  
  update = (prescription : Prescription) => {
    console.log("Liste des prescription : "+ this.listePrescriptions);
    console.log("MAJ de la prescription : "+ prescription);
    this.delete(prescription.id);
    this.save(prescription);
    console.log("Liste des prescription : "+ this.listePrescriptions);
  }
}
