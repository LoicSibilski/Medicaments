import { Injectable } from '@angular/core';
import { Medic } from '../models/medic';
import { formatDate } from "@angular/common";import { Duree } from '../../duree/models/duree';
import { Frequence } from '../../frequence/models/frequence';
import { Horaire } from '../../frequence/models/horaire';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicService {

  horaire1 = new Horaire(12,45);
  horaire2 = new Horaire(15,30);
  horaire3 = new Horaire(20,25);

  duree1 = new Duree("dur1", 3, new Date());
  duree2 = new Duree("dur2", 2, new Date('2021-08-07'));

  freq1 = new Frequence("freq1",[new Date('2021-06-06')],[this.horaire1])
  freq2 = new Frequence("freq1",[new Date('2021-06-06'),new Date('2021-06-07'),new Date('2021-06-08')],[this.horaire1, this.horaire2,this.horaire3])

  medic1 = new Medic("med1","Doliprane",this.duree1,this.freq1);
  medic2 = new Medic("med2","Econazole",this.duree2,this.freq2);

  listeMedics = [this.medic1, this.medic2];

  constructor(private http : HttpClient) { }

  getAll = () : Observable<Medic[]> => {
    return this.http.get<Medic[]>(`${environment.urlSpring}/medics`);
  }

  getById = (id : String) : Observable<Medic> => {
    return this.http.get<Medic>(`${environment.urlSpring}/medics/${id}`);
  }

  getByNom = (nom : String) : Observable<Medic> => {
    return this.http.get<Medic>(`${environment.urlSpring}/medics/nom/${nom}`);
  }

  //PATCH si vous avez mis PATCH dans le back
  //PUT si vous avez mis PUT dans le back
  update = (parc : Medic) : Observable<Medic> => {
    return this.http.patch<Medic>(`${environment.urlSpring}/medics`, parc);
  }

  create = (parc : Medic) : Observable<Medic> => {
    return this.http.post<Medic>(`${environment.urlSpring}/medics`, parc);
  }

  //Si vous avez fait le back avec un parc en BODY
  delete = (parc : Medic) : Observable<Medic> => {
    return this.http.request<Medic>('delete', `${environment.urlSpring}/medics`, { body : parc});
  }

  //Si vous avez fait un back avec un deleteById
  deleteById = (parc: Medic) : Observable<Medic> => {
    return this.http.delete<Medic>(`${environment.urlSpring}/medics/${parc.id}`)
  }

/*   findAll = (): Medic[] => {
    return this.listeMedics;
  }

  findById = (id: string): Medic => {
    let medicTmp: Medic;
    this.listeMedics.forEach(medic => {
      if (medic.id == id) {
        medicTmp = medic;
      }
    })
    console.log("aucune Medic avec cette id")
    return medicTmp;
  }

  save = (Medic: Medic) => {
    console.log("Liste des Medic : " + this.listeMedics);
    console.log("Ajout de la Medic : " + Medic);
    this.listeMedics.push(Medic);
    console.log("Liste des Medic : " + this.listeMedics);
  }

  delete = (id: string) => {
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
  } */
}
