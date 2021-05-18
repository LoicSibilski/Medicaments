import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posologie } from '../../models/posologie';
import { PosologieService } from '../../services/posologie.service';

@Component({
  selector: 'app-posologies-detail',
  templateUrl: './posologies-detail.component.html',
  styleUrls: ['./posologies-detail.component.css']
})
export class PosologiesDetailComponent implements OnInit {

  posologie: Posologie;

  constructor(private posologieService: PosologieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.posologie = this.posologieService.findById(id);
  } 

}
