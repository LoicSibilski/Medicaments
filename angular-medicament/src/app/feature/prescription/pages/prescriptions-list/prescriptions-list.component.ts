import { Component, OnInit } from '@angular/core';
import { Prescription } from '../../models/prescription';
import { PrescriptionService } from '../../services/prescription.service';
import { formatDate } from "@angular/common";;
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { PrescriptionsNewFormComponent } from '../prescriptions-new-form/prescriptions-new-form.component';


@Component({
  selector: 'app-prescriptions-list',
  templateUrl: './prescriptions-list.component.html',
  styleUrls: ['./prescriptions-list.component.css']
})
export class PrescriptionsListComponent implements OnInit {

  prescriptions: Prescription[];
  dateNow: string;
  date: Date;


  constructor(private prescrService: PrescriptionService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.prescriptions = this.prescrService.findAllCurrentDate();
    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.date = new Date(this.dateNow);
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    this.dialog.open(PrescriptionsNewFormComponent, dialogConfig);

    const dialogRef = this.dialog.open(PrescriptionsNewFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
  }

  dateNowBetweenPrescrDates(prescription: Prescription) {
    return prescription.dateDebut <= this.date && this.date <= prescription.dateFin
  }

  getHistorique() {
    this.prescriptions = this.prescrService.findAll();
  }

  getCurrent() {
    this.prescriptions = this.prescrService.findAllCurrentDate();
  }
}
