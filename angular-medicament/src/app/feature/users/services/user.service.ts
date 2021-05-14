import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medic } from '../../medics/models/medic';
import { Prescription } from '../../prescription/models/prescription';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  prescrDoli1 : Prescription ={
    'dateDebut' : new Date('20/05/1992'),
    'dateFin' : new Date('27/05/1998'),
    'nombreUnite' : 2,
    'isMatin' : true,
    'isMidi' : true, 
    'isSoir' : false,
  }
  prescrMemorex1 : Prescription ={
    'dateDebut' : new Date('25/06/2014'),
    'dateFin' : new Date('01/01/2021'),
    'nombreUnite' : 4,
    'isMatin' : false,
    'isMidi' : false, 
    'isSoir' : true,
  }
  prescrMemorex2 : Prescription ={
    'dateDebut' : new Date('10/05/1995'),
    'dateFin' : new Date('14/05/2025'),
    'nombreUnite' : 4,
    'isMatin' : false,
    'isMidi' : false, 
    'isSoir' : true,
  }
  doliprane : Medic = {
    'nom': 'Doliprane',
    'prescription' : [
      this.prescrDoli1
    ]
  }

  memorex : Medic = {
    'nom': 'Memorex',
    'prescription' : [
      this.prescrMemorex1,
      this.prescrMemorex2,
    ]
  }

  constructor() { }


}
