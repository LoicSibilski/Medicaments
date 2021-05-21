import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  inputs = [
    {id:"prenom", type:"text", text:"Prenom"},
    {id:"nom", type:"text", text:"Nom"},
    {id:"age", type:"date", text:"Age"},
    {id:"sexe", type:"radio", text:"Masculin"},
    {id:"sexe", type:"radio", text:"Féminin"},
    {id:"email", type:"email", text:"Email"},
    {id:"password", type:"password", text:"Mot de passe"}
  ];

  buttons = [
    {title:"Créer un compte", link:"/inscription"}
  ]

  description = "Créer un compte";
  
  constructor() { }

  ngOnInit(): void {
  }

}
