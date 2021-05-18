import { Component, Input, OnInit } from '@angular/core';
import { Posologie } from '../../models/posologie';
import { PosologieService } from '../../services/posologie.service';
import { MedicService } from 'src/app/feature/medics/services/medic.service';


@Component({
  selector: 'app-posologies-list',
  templateUrl: './posologies-list.component.html',
  styleUrls: ['./posologies-list.component.css']
})
export class PosologiesListComponent implements OnInit {


  @Input() id: number;

  posologies: Posologie[];

  constructor(private posoService: PosologieService, private medicService: MedicService) { }

  ngOnInit(): void {
    if (this.id === undefined) {
      this.posologies = this.posoService.findAll();
    }
    else {
      this.posologies = this.medicService.findAllPosologiesByMedicId(this.id)
    }
  }
}
