import { Component, OnInit } from '@angular/core';
import { Medic } from '../../models/medic';

@Component({
  selector: 'app-medics-list',
  templateUrl: './medics-list.component.html',
  styleUrls: ['./medics-list.component.css']
})
export class MedicsListComponent implements OnInit {

  medics : Medic[];

  constructor() { }

  ngOnInit(): void {
  }

  

}
