import { Component, Input, OnInit } from '@angular/core';
import { Posologie } from '../../models/posologie';
import { PosologieService } from '../../services/posologie.service';
import { MedicService } from 'src/app/feature/medics/services/medic.service';
import { formatDate } from "@angular/common";;


@Component({
  selector: 'app-posologies-list',
  templateUrl: './posologies-list.component.html',
  styleUrls: ['./posologies-list.component.css']
})
export class PosologiesListComponent implements OnInit {


  @Input() id: number;

  posologies: Posologie[];
  fromMedicList: boolean = false;
  dateNow: string;
  date: Date;

  constructor(private posoService: PosologieService, private medicService: MedicService) { }

  ngOnInit(): void {
    if (this.id === undefined) {
      this.posologies = this.posoService.findAllCurrentDate();
    }
    else {
      this.posologies = this.medicService.findAllPosologiesByMedicIdWithCurrentDate(this.id)
      this.fromMedicList = true;
    }

    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.date = new Date(this.dateNow);
  }

  dateNowBetweenPrescrDates(posologie: Posologie) {
    return posologie.dateDebut <= this.date && this.date <= posologie.dateFin
  }

  getHistorique() {
    if (this.fromMedicList){
      this.posologies = this.medicService.findAllPosologiesByMedicId(this.id);
    }else{
      this.posologies = this.posoService.findAll();
    }
    
  }

  getCurrent() {
    if (this.fromMedicList){
      this.posologies = this.medicService.findAllPosologiesByMedicIdWithCurrentDate(this.id);
    }else{
      this.posologies = this.posoService.findAllCurrentDate();
    }
  }
}
