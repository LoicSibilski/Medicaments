import { Component, OnInit } from '@angular/core';
import { Prescription } from '../../models/prescription';
import { PrescriptionService } from '../../services/prescription.service';
import { formatDate } from "@angular/common";;
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { PrescriptionsNewFormComponent } from '../prescriptions-new-form/prescriptions-new-form.component';
import { Medic } from 'src/app/feature/medics/models/medic';


@Component({
  selector: 'app-prescriptions-list',
  templateUrl: './prescriptions-list.component.html',
  styleUrls: ['./prescriptions-list.component.css']
})
export class PrescriptionsListComponent implements OnInit {

  prescriptions: Prescription[];
  dateNow: string;
  date: Date;

  dateDebut: Date;
  dateFin: Date;
  medics: Medic[];

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

    let dialogRef = this.dialog.open(PrescriptionsNewFormComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
/*       this.prescrService.save(res);
 */    })
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
