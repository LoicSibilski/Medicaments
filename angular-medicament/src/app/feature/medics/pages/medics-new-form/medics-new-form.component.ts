import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from "@angular/common";
import { MedicService } from '../../services/medic.service';
import { PosologiesNewFormComponent } from 'src/app/feature/posologie/pages/posologies-new-form/posologies-new-form.component';
import { Posologie } from 'src/app/feature/posologie/models/posologie';

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

  nom:string;
  posologie: Posologie;

  form: FormGroup;

  constructor(
    private medicService: MedicService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<MedicsNewFormComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) data) {

    this.dateDebut = data.dateDebut;

    this.id = medicService.getNextId();
  }

  ngOnInit() {

    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.date = new Date(this.dateNow);

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
      nom: this.nom,
      posologie: this.posologie,
    };
    this.dialog.open(PosologiesNewFormComponent, dialogConfig);

  }

  get questions() {
    const medicsArray = this.form.controls.questions as FormArray;
    return medicsArray;
  }

  returnPosologie() {
    this.dialogRef.close(this.questions.value);
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
