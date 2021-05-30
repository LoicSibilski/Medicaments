import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from "@angular/common";
import { PosologieService } from '../../services/posologie.service';
import { Posologie } from '../../models/posologie';
import { Medic } from 'src/app/feature/medics/models/medic';

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
    @Inject(MAT_DIALOG_DATA) public medicData: Medic) {
    console.log("this.data posologie construct=> " + medicData.nom);
    this.id = posoService.getNextId();
    console.log("poso constru id => " + this.id)
  }

  ngOnInit() {

    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.date = new Date(this.dateNow);

    this.form = this.fb.group({
      nomMedic: new FormControl(),
      nombreUnite: new FormControl(),
      dateDebut: new FormControl(),
      dateFin: new FormControl(),
      isMatin: new FormControl(),
      isMidi: new FormControl(),
      isSoir: new FormControl(),
      isActive: new FormControl(),
    })
  }


  save() {
    this.dialogRef.afterClosed().subscribe(data => {
      this.posologie = data;
    })
    console.log("form value poso => " + this.form.value);
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

  formatPosologie(data: Posologie) {
    if (this.posologie.dateDebut === null) {
      this.posologie.dateDebut = this.date;
    }
    if (this.posologie.isActive === undefined) {
      this.posologie.isActive = false;
    }
    if (this.posologie.isMatin === undefined) {
      this.posologie.isMatin = false;
    }
    if (this.posologie.isMidi === undefined) {
      this.posologie.isMidi = false;
    }
    if (this.posologie.isSoir === undefined) {
      this.posologie.isSoir = false;
    }
  }

}