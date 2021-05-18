import { Component, OnInit } from '@angular/core';
import { Prescription } from '../../models/prescription';
import { PrescriptionService } from '../../services/prescription.service';

@Component({
  selector: 'app-prescriptions-list',
  templateUrl: './prescriptions-list.component.html',
  styleUrls: ['./prescriptions-list.component.css']
})
export class PrescriptionsListComponent implements OnInit {

  prescriptions : Prescription[];

  constructor(private prescrService : PrescriptionService) { }

  ngOnInit(): void {
    this.prescriptions = this.prescrService.findAll();
  }

}
