import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-mechanical-testing',
  templateUrl: './mechanical-testing.component.html',
  styleUrls: ['./mechanical-testing.component.css']
})
export class MechanicalTestingComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  contact() {
    this.router.navigate(['contact']);


  }

}
