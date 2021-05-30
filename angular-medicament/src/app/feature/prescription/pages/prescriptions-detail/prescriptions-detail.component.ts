import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Prescription } from '../../models/prescription';
import { PrescriptionService } from '../../services/prescription.service';
import { formatDate } from "@angular/common";;


@Component({
  selector: 'app-prescriptions-detail',
  templateUrl: './prescriptions-detail.component.html',
  styleUrls: ['./prescriptions-detail.component.css']
})
export class PrescriptionsDetailComponent implements OnInit {

  prescription: Prescription;
  dateNow: string;
  date: Date;

  constructor(private prescrService: PrescriptionService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.prescription = this.prescrService.findById(id);

    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.date = new Date(this.dateNow);
  }
  dateNowBetweenPrescrDates() {
    return this.prescription.dateDebut <= this.date && this.date <= this.prescription.dateFin
  }
}
