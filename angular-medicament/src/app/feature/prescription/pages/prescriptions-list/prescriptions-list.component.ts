import { Component, OnInit } from '@angular/core';
import { Prescription } from '../../models/prescription';
import { PrescriptionService } from '../../services/prescription.service';
import { formatDate } from "@angular/common";;


@Component({
  selector: 'app-prescriptions-list',
  templateUrl: './prescriptions-list.component.html',
  styleUrls: ['./prescriptions-list.component.css']
})
export class PrescriptionsListComponent implements OnInit {

  prescriptions: Prescription[];
  dateNow: string;
  date: Date;
  constructor(private prescrService: PrescriptionService) { }

  ngOnInit(): void {
    this.prescriptions = this.prescrService.findAllCurrentDate();
    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.date = new Date(this.dateNow);
    this.prescrService.findAllCurrentDate();
  }

  dateNowBetweenPrescrDates(prescription: Prescription){
    return prescription.dateDebut <= this.date && this.date <= prescription.dateFin
  }

  getHistorique() {
    this.prescriptions = this.prescrService.findAll();
  }

  getCurrent() {
    this.prescriptions = this.prescrService.findAllCurrentDate();
  }
}
