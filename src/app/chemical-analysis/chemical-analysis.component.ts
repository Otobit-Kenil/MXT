import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chemical-analysis',
  templateUrl: './chemical-analysis.component.html',
  styleUrls: ['./chemical-analysis.component.css']
})
export class ChemicalAnalysisComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  contact() {
    this.router.navigate(['contact']);


  }

}
