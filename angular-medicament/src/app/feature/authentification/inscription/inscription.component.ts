import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Compte } from '../../compte/models/compte';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

/**
 * Class qui représente le component d'inscription
 * @author fabien
 * @version 1.0
 */
export class InscriptionComponent implements OnInit {

  // TODO 
  // matcher les deux mots de passe (ok)
  // vérifier la réception des données du formulaire
  // créer un objet compte et le stocker dans une liste
  // rediriger vers la page connexion
  // créer une alert : "compte créé"
  // commenter le code

  compteForm: FormGroup;
  soumettre = false;

  /**
   * @constructor
   * @param formBuilder
   */
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    let motDePasseRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-+!*$@%_])([-+!*$@%_\w]{8,15})$/;
    this.compteForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15), Validators.pattern(motDePasseRegex)]],
      confirmeMotDePasse: ['', Validators.required]
    }, {
      validator: this.mustMatch("motDePasse", "confirmeMotDePasse")
    });
  }

  /**
   * Récupérer un champs du formulaire
   * @public
   */
  public get input() {
    return this.compteForm.controls;
  }

  /**
   * Récupérer les données du formulaire
   * @public
   */
  public onSubmit = (): void => {
    this.soumettre = true;
    // Stop si le formulaire est invalide
    console.log(this.compteForm.value);
    if (this.compteForm.invalid) {
      return;
    }
    console.log(this.compteForm.value);
  }

  /**
   * Rénitialiser les inputs du formulaire
   * @public
   */
  public onReset = (): void => {
    this.soumettre = false;
    this.compteForm.reset();
  }


  public mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }

      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }

    }
  }
}
