import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from "@angular/common";
import { MedicService } from '../../services/medic.service';
import { PosologiesNewFormComponent } from 'src/app/feature/posologie/pages/posologies-new-form/posologies-new-form.component';
import { Posologie } from 'src/app/feature/posologie/models/posologie';
import { Medic } from '../../models/medic';

@Component({
  selector: 'app-medics-new-form',
  templateUrl: './medics-new-form.component.html',
  styleUrls: ['./medics-new-form.component.css']
})
export class MedicsNewFormComponent implements OnInit {

  dateNow: string;
  date: Date;

  id: number;
  dateDebut: Date;
  dateFin: Date;

  nom: string;
  posologie: Posologie;
  form: FormGroup;

  constructor(
    private medicService: MedicService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PosologiesNewFormComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {

    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.date = new Date(this.dateNow);

    console.log("ngOnInit data : " + this.data)

    this.form = this.fb.group({
      nom: new FormControl('nom'),
      posologie: this.fb.array([
        this.fb.group({
          nomMedic: new FormControl('nomMedic'),
          nombreUnite: new FormControl('nombreUnite'),
          dateDebut: new FormControl('dateDebut'),
          dateFin: new FormControl('dateFin'),
          isMatin: new FormControl('isMatin'),
          isMidi: new FormControl('isMidi'),
          isSoir: new FormControl('isSoir'),
          isActive: new FormControl('isActive'),
        })
      ])
    })
  }

  openMedicFormDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      nom: this.form.get('nom').value
    };
    let dialogRef = this.dialog.open(PosologiesNewFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      this.posologie = res;
    })
  }

  isPosologieNull() {
    return this.posologie === undefined;
  }

  get medics() {
    const medicsArray = this.form.controls.medics as FormArray;
    return medicsArray;
  }

  returnPosologie() {
    console.log("medicsForm returnposo => " + this.medics)
    this.dialogRef.close(this.medics.value);
  }

  save() {
    this.dialogRef.afterClosed().subscribe(
      data => console.log("Dialog output:", data)
    );
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
