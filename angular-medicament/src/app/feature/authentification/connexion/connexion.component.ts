import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  
  inputs = [
    {id:"email", type:"email", text:"Email"},
    {id:"password", type:"password", text:"Mot de passe"}
  ];

  buttons = [
    {title:"Se connecter", link:"/connexion"},
    {title:"Créer un compte", link:"/inscription"}
  ]

  description="Bienvenue ! 🎉"
  
  constructor() { }

  ngOnInit(): void {
  }

}
