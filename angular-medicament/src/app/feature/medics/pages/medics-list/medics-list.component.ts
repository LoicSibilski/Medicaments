import { Component, Input, OnInit } from '@angular/core';
import { PrescriptionService } from 'src/app/feature/prescription/services/prescription.service';
import { Medic } from '../../models/medic';
import { MedicService } from '../../services/medic.service';

@Component({
  selector: 'app-medics-list',
  templateUrl: './medics-list.component.html',
  styleUrls: ['./medics-list.component.css']
})
export class MedicsListComponent implements OnInit {

  @Input() id:number;

  medics : Medic[];

  constructor(private prescService:PrescriptionService) { }

  ngOnInit(): void {
    this.medics = this.prescService.findAllMedicsByPrescrId(this.id)
  }



}
