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
  fromMedicList: boolean = true;
  dateNow: string;
  date: Date;

  constructor(private posoService: PosologieService, private medicService: MedicService) { }

  ngOnInit(): void {
    if (this.id === undefined) {
      this.posologies = this.posoService.findAll();
    }
    else {
      this.posologies = this.medicService.findAllPosologiesByMedicId(this.id)
      this.fromMedicList = false;
    }

    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.date = new Date(this.dateNow);
  }
  dateNowBetweenPrescrDates(posologie: Posologie) {
    return posologie.dateDebut <= this.date && this.date <= posologie.dateFin
  }
}
