import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-metallography-testing',
  templateUrl: './metallography-testing.component.html',
  styleUrls: ['./metallography-testing.component.css']
})
export class MetallographyTestingComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  contact() {
    this.router.navigate(['contact']);


  }

}
