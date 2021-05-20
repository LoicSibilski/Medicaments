import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  currentItem = 'Television';


  newValueInput = {id: "email", type: "text", title: "Email"}
  

  constructor() { }

  ngOnInit(): void {
  }

}
