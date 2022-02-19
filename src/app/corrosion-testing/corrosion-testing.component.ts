import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-corrosion-testing',
  templateUrl: './corrosion-testing.component.html',
  styleUrls: ['./corrosion-testing.component.css']
})
export class CorrosionTestingComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  contact() {
    this.router.navigate(['contact']);
  }


}
