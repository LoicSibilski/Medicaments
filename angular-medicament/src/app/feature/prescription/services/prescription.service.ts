import { Injectable } from '@angular/core';
import { Medic } from '../../medics/models/medic';
import { Posologie } from '../../posologie/models/posologie';
import { Prescription } from '../models/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

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

  prescrDoli1: Prescription = {
    'id':1,
    'dateDebut': new Date('20/05/1992'),
    'dateFin': new Date('27/05/1998'),
    'medics' : [this.doliprane],
  }

  prescrDoliMemorex: Prescription = {
    'id':2,
    'dateDebut': new Date('25/06/2014'),
    'dateFin': new Date('01/01/2021'),
    'medics' : [this.doliprane, this.memorex]
  }

  constructor() { }

  findAll = (): Prescription[] => {
    let tmp : Prescription[] = [this.prescrDoli1, this.prescrDoliMemorex];
    return tmp;
  }



}
