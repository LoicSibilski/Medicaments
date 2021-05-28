import { Injectable } from '@angular/core';
import { Compte } from '../models/compte';

@Injectable({
  providedIn: 'root'
})
/**
 * Class réprésentant le service d'un compte
 * @author fabien
 * @version 1.0
 */
export class CompteService {

  // TODO
  // matcher l'adresse mail et le mot de passe, l'adresse mail est unique, le mot de passe peut exister sur des comptes différents.
  // capturer et gérer l'erreur, si une donnée est null 

  compte1 : Compte = new Compte(1,"test1@test.com","test1", []); 
  compte2 : Compte = new Compte(2,"test2@test.com","test2", []);

  listeComptes = [this.compte1, this.compte2];

  constructor() { }

}

