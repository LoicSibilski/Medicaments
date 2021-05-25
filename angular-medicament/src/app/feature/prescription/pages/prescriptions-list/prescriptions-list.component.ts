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
    this.prescriptions = this.prescrService.findAll();
    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.date = new Date(this.dateNow);

    console.log(this.prescriptions[0].dateDebut <= this.date && this.date <= this.prescriptions[0].dateFin);
    console.log(this.prescriptions[3].dateDebut <= this.date && this.date <= this.prescriptions[3].dateFin);
    console.log(this.dateNow)
  }

  dateNowBetweenPrescrDates(prescription: Prescription){
    return prescription.dateDebut <= this.date && this.date <= prescription.dateFin
  }

}
