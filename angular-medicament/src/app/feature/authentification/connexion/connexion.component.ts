import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  compteForm : FormGroup;
  emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  motDePasseRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  
  /**
   * @constructor
   * @param fb
   */
  constructor(private fb : FormBuilder, private router : Router) { 
    this.compteForm = this.fb.group({
      email : ['', [Validators.required, Validators.pattern(this.emailRegex)]],
      motDePasse : ['', [Validators.required, Validators.pattern(this.motDePasseRegex)]]
    });
  }
  
  ngOnInit(): void {}
  
  /**
   * Récupérer les données passé dans le formulaire
   */
  onSubmit = () : void => {
    // vérifier l'authenticité de l'adresse mail
    // vérifier l'authenticité du mot de passe
    console.log(this.compteForm.value);
    let email = this.compteForm.get('email').value;
    let motDePasse = this.compteForm.get('motDePasse').value;
  }

}
