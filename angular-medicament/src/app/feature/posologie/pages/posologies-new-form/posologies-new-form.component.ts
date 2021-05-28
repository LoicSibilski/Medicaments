import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from "@angular/common";
import { PosologieService } from '../../services/posologie.service';
import { Posologie } from '../../models/posologie';
@Component({
  selector: 'app-posologies-new-form',
  templateUrl: './posologies-new-form.component.html',
  styleUrls: ['./posologies-new-form.component.css']
})
export class PosologiesNewFormComponent implements OnInit {

  dateNow: string;
  date: Date;

  posologie: Posologie;

  id: number;
  nomMedic: string;
  nombreUnite: number;
  dateDebut: Date;
  dateFin: Date;
  isMatin: boolean;
  isMidi: boolean;
  isSoir: boolean;
  isActive: boolean;




  form: FormGroup;

  constructor(
    private posoService: PosologieService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PosologiesNewFormComponent>,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) data) {

    this.dateDebut = data.dateDebut;

    this.id = posoService.getNextId();
  }

  ngOnInit() {

    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.date = new Date(this.dateNow);

    this.form = this.fb.group({
      nomMedic: new FormControl('nomMedic'),
      nombreUnite: new FormControl('nombreUnite'),
      dateDebut: new FormControl('dateDebut'),
      dateFin: new FormControl('dateFin'),
      'isMatin': new FormControl('isMatin'),
      isMidi: new FormControl('isMidi'),
      isSoir: new FormControl('isSoir'),
      isActive: new FormControl('isActive'),
    })
  }

  openMedicFormDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    dialogConfig.data = {
      nomMedic : this.nomMedic,
      nombreUnite : this.nombreUnite,
      isMatin : this.isMatin,
      isMidi : this.isMidi,
      isSoir : this.isSoir,
      isActive : this.isActive,

    };
    this.dialog.open(PosologiesNewFormComponent, dialogConfig);

  }

  returnPosologie() {
    this.dialogRef.close(this.posologie);
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