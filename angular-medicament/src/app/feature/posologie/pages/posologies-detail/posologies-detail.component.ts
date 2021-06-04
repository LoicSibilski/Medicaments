import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posologie } from '../../models/posologie';
import { PosologieService } from '../../services/posologie.service';
import { formatDate } from "@angular/common";;

@Component({
  selector: 'app-posologies-detail',
  templateUrl: './posologies-detail.component.html',
  styleUrls: ['./posologies-detail.component.css']
})
export class PosologiesDetailComponent implements OnInit {

  posologie: Posologie;
  dateNow: string;
  date: Date;
  constructor(private posologieService: PosologieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.posologie = this.posologieService.findById(id);
    this.dateNow = formatDate(new Date(), 'yyyy-MM-dd', 'en_US');
    this.date = new Date(this.dateNow);
  }
  dateNowBetweenPrescrDates() {
    return this.posologie.dateDebut <= this.date && this.date <= this.posologie.dateFin
  }

}
