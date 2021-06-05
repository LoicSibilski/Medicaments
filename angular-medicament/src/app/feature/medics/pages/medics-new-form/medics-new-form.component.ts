import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { formatDate } from "@angular/common";
import { MedicService } from '../../services/medic.service';
import { Medic } from '../../models/medic';

@Component({
  selector: 'app-medics-new-form',
  templateUrl: './medics-new-form.component.html',
  styleUrls: ['./medics-new-form.component.css']
})
export class MedicsNewFormComponent implements OnInit {

/*   dateNow: string;
  date: Date;

  id: number;
  dateDebut: Date;
  dateFin: Date;

  medic: Medic;
  posologie: Posologie;
  form: FormGroup; */

  constructor(
/*     private medicService: MedicService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PosologiesNewFormComponent>,
    private dialog: MatDialog, */
    ) { }

  ngOnInit() {
/*     this.medic = { 'id': this.id, 'nom': null, posologies: [] }
    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.date = new Date(this.dateNow);

    this.form = this.fb.group({
      nom: new FormControl(),
    }) */
  }

  openMedicFormDialog() {
/*     const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    console.log("this.form.get('nom').value => " + this.form.get('nom').value)
    dialogConfig.data = {
      nom: this.form.get('nom').value
    };
    let dialogRef = this.dialog.open(PosologiesNewFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(res => {
      const posoTmp = res;
      this.posologie = posoTmp;
    }) */
  }

  isPosologieNull() {
/*     return this.posologie === undefined;
 */  }

  saveDuree() {
/*     this.dialogRef.afterClosed().subscribe(
      data => {
        const tmp = data;
        this.medic = tmp;
      })
    this.medic.nom = this.form.get('nom').value;
    this.medic.posologies.push(this.posologie);
    this.dialogRef.close(this.medic); */
  }

  close() {
/*     this.dialogRef.close();
 */  }

}
