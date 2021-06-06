import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-durees-new-form',
  templateUrl: './durees-new-form.component.html',
  styleUrls: ['./durees-new-form.component.css']
})
export class DureesNewFormComponent implements OnInit {

  dureeForm: FormGroup;
  jusqueXForm: FormGroup;
  pendantXForm: FormGroup;

  dateNow: string;
  dateDebut: Date;

  durees: string[] = ['Pas de fin', 'Jusque date', 'Pendant X jours'];
  dataToReturn: string[] = [];

  constructor(
    private dialogRefFrequence: MatDialogRef<DureesNewFormComponent>,
    private fb: FormBuilder
  ) {

    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.dateDebut = new Date(this.dateNow);

    this.dureeForm = this.fb.group({
      dateDebut: new FormControl(this.dateNow),
      choixDuree: new FormControl(),
    });

    this.jusqueXForm = this.fb.group({
      dateFin: new FormControl(),
    });

    this.pendantXForm = this.fb.group({
      nbJour: new FormControl(),
    });
   }

  ngOnInit(): void {

  }

  saveDuree() {
    this.dataToReturn.push(this.dureeForm.value)
    if(this.choixDureeJusqueX){
      this.dataToReturn.push(this.jusqueXForm.value);
    } else if (this.choixDureePendantX){
      this.dataToReturn.push(this.pendantXForm.value);
    }
    this.dialogRefFrequence.close(this.dataToReturn);
  }

  choixDureePasDeFin() {
    return this.dureeForm.value.choixDuree == this.durees[0];
  }

  choixDureeJusqueX() {
    return this.dureeForm.value.choixDuree == this.durees[1];
  }

  choixDureePendantX() {
    return this.dureeForm.value.choixDuree == this.durees[2];
  }

}
