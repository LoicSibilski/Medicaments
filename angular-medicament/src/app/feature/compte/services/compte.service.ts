import { Injectable } from '@angular/core';
import { Compte } from '../models/compte';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  // Instancier un objet de type compte
  compte : Compte = new Compte(1,"moniquedubois@example.com","Du1950!bois", []);

  constructor() { }

}
