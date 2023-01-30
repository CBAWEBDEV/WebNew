import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-partner',
  templateUrl: './our-partner.component.html'
})
export class OurPartnerComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Environmental, Social, Governance ',
  };

  List : any[] = [
    {
      img:  '1.png',
    },
    {
      img:  '27.png',
    },
    {
      img:  '9.png',
    },  
    {
      img:  '24.png',
    },
    {
      img:  '26.png',
    },
    {
      img:  '25.png',
    },
    {
      img:  '4.png',
    },
    {
      img:  '6.png',
    },
    {
      img:  '7.png',
    },
    {
      img:  '10.png',
    },
    {
      img:  '11.png',
    },
    {
      img:  'p.png',
    }
  ];
  
  hover : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
