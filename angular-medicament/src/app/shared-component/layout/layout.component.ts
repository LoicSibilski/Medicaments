import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {


  layoutBrand = "Medical";
  @Input() layoutText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
