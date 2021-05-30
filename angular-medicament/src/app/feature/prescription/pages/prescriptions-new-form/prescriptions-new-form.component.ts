import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from "@angular/common";
import { Medic } from 'src/app/feature/medics/models/medic';
import { PrescriptionService } from '../../services/prescription.service';
import { Posologie } from 'src/app/feature/posologie/models/posologie';
import { MedicsNewFormComponent } from 'src/app/feature/medics/pages/medics-new-form/medics-new-form.component';
import { Prescription } from '../../models/prescription';


@Component({
  selector: 'app-prescriptions-new-form',
  templateUrl: './prescriptions-new-form.component.html',
  styleUrls: ['./prescriptions-new-form.component.css']
})
export class PrescriptionsNewFormComponent implements OnInit {

  dateNow: string;
  date: Date;

  id: number;
  dateDebut: Date;
  dateFin: Date;

  nom: string;
  prescription: Prescription;
  form: FormGroup;
  listeMedics: Medic[];

  constructor(
    private prescService: PrescriptionService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PrescriptionsNewFormComponent>,
    private dialog: MatDialog) {
      this.listeMedics = [];
      this.id = prescService.getNextId();
      this.prescription = {'id': this.id, 'dateDebut':null, 'dateFin': null, 'medics': []}
  }

  ngOnInit() {

    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.date = new Date(this.dateNow);

    this.form = this.fb.group({
      dateDebut: new FormControl('dateDebut'),
      dateFin: new FormControl('dateFin'),
    });

  }

  openMedicFormDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    let dialogRef = this.dialog.open(MedicsNewFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      console.log("res => " + res.nom)
      const medicTmp = res;
      this.listeMedics.push(medicTmp);
    })
  }

  save() {
    this.dialogRef.afterClosed().subscribe(
      data => {
        console.log("data prescr => "+ JSON.stringify(data) )
        const tmp = data;
        this.prescription = tmp;
      })
      this.listeMedics.forEach(medic=>{
        this.prescription.medics.push(medic);
      })
      this.prescription.dateDebut = this.form.get('dateDebut').value;
      this.prescription.dateFin = this.form.get('dateFin').value;
    this.dialogRef.close(this.prescription);
  }

  close() {
    this.dialogRef.close();
  }
}
