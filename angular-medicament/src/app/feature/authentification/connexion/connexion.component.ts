import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Compte } from '../../compte/models/compte';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
/**
 * Class représentant le component d'une connexion
 * @author fabien
 * @version 1.0
 */
export class ConnexionComponent implements OnInit {

  // TODO 
  // récupérer les données du formulaire
  // vérifier si les données sont dans la liste des comptes 
  // * si oui, renvoyer vers la page home avec un objet compte
  // * si non, rester sur la même page

  compteForm : FormGroup;
  soumettre = false;

  constructor() { }
  
  ngOnInit(): void {}

  /**
   * Récupérer les données du formulaire
   * @public
   */
  public onSubmit = () : void => {
    this.soumettre = true;
  }

}
