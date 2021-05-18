import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prescription } from '../../models/prescription';
import { PrescriptionService } from '../../services/prescription.service';

@Component({
  selector: 'app-prescriptions-detail',
  templateUrl: './prescriptions-detail.component.html',
  styleUrls: ['./prescriptions-detail.component.css']
})
export class PrescriptionsDetailComponent implements OnInit {

  prescription: Prescription;

  constructor(private prescrService : PrescriptionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.prescription = this.prescrService.findById(id);
  } 
}
