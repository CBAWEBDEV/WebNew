import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-counter',
  templateUrl: './our-counter.component.html'
})
export class OurCounterComponent implements OnInit {

  List: any[] = [
    { title: 'AUM', number: '1Billion', icon: 'flaticon flaticon-cost'},
    { title: 'Portfolio Companies', number: '20', icon: 'flaticon flaticon-planning'},
    { title: 'Limited Partners', number: '10', icon: 'flaticon flaticon-customer'},
    { title: 'Successful Exits', number: '200', icon: 'flaticon flaticon-cost'}
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
