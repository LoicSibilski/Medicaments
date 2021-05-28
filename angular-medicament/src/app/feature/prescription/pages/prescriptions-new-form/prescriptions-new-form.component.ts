import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from "@angular/common";
import { Medic } from 'src/app/feature/medics/models/medic';
import { PrescriptionService } from '../../services/prescription.service';
import { Posologie } from 'src/app/feature/posologie/models/posologie';
import { MedicsNewFormComponent } from 'src/app/feature/medics/pages/medics-new-form/medics-new-form.component';


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
  posologie: Posologie;

  form: FormGroup;
  medics= new  FormArray([]);

  constructor(
    private prescService: PrescriptionService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PrescriptionsNewFormComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) data) {

    this.dateDebut = data.dateDebut;

    this.id = prescService.getNextId();
  }

  ngOnInit() {

    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.date = new Date(this.dateNow);

    this.form = this.fb.group({
      dateDebut: new FormControl('dateDebut'),
      dateFin: new FormControl('dateFin'),
      medics: this.fb.array([
        this.fb.group({
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
      ])
    });
  }

  openMedicFormDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      nom: this.nom,
      posologie: this.posologie,
    };
    this.dialog.open(MedicsNewFormComponent, dialogConfig);

  }

  get questions() {
    const medicsArray = this.form.controls.questions as FormArray;
    return medicsArray;
  }


  addMore() {
    let formg = this.fb.group({
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
    this.medics.push(formg);
  }

  returnMedics() {
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
