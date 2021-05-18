import { Injectable } from '@angular/core';
import { Medic } from '../../medics/models/medic';
import { Posologie } from '../../posologie/models/posologie';
import { Prescription } from '../models/prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  posologieDoliprane1: Posologie = {
    'nombreUnite': 2.5,
    'isMatin': true,
    'isMidi': true,
    'isSoir': true,
    'isActive': false,
  }

  posologieDoliprane2: Posologie = {
    'nombreUnite': 2,
    'isMatin': true,
    'isMidi': false,
    'isSoir': true,
    'isActive': true,
  }

  posologieMemorex1: Posologie = {
    'nombreUnite': 2,
    'isMatin': true,
    'isMidi': false,
    'isSoir': true,
    'isActive': false,
  }

  posologieMemorex2: Posologie = {
    'nombreUnite': 2,
    'isMatin': true,
    'isMidi': false,
    'isSoir': false,
    'isActive': false,
  }

  posologieMemorex3: Posologie = {
    'nombreUnite': 1,
    'isMatin': true,
    'isMidi': true,
    'isSoir': true,
    'isActive': true,
  }

  doliprane: Medic = {
    'nom': 'Doliprane',
    'posologies': [ this.posologieDoliprane1, this.posologieDoliprane2 ]
  }

  memorex: Medic = {
    'nom': 'Memorex',
    'posologies': [ this.posologieMemorex1, this.posologieMemorex2, this.posologieMemorex3 ]

  }

  prescrDoli1: Prescription = {
    'dateDebut': new Date('20/05/1992'),
    'dateFin': new Date('27/05/1998'),
    'medics' : [this.doliprane],
  }
  prescrMemorex1: Prescription = {
    'dateDebut': new Date('25/06/2014'),
    'dateFin': new Date('01/01/2021'),
    'medics' : [this.doliprane, this.memorex]
  }
  prescrMemorex2: Prescription = {
    'dateDebut': new Date('10/05/1995'),
    'dateFin': new Date('14/05/2025'),
    'nombreUnite': 4,
    'isMatin': false,
    'isMidi': false,
    'isSoir': true,
    'medics': [this.doliprane]
  }


  constructor() { }
}
