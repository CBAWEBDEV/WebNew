import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-counter',
  templateUrl: './our-counter.component.html'
})

export class OurCounterComponent implements OnInit {


  List: any[] = [
    {
      number: 1.5,
      title: '+ Billion AUM',
      image: './assets/images/logo.png'
    },
    {
      number: 15,
      title: 'Portfolio Companies',
      image: './assets/images/logo.png'
    },
    {
      number: 6,
      title: 'Minority Founder Investments',
      image: './assets/images/logo.png'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
