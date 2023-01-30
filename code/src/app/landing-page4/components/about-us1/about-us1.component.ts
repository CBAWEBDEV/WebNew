import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us1',
  templateUrl: './about-us1.component.html'
})
export class AboutUs1Component implements OnInit {

titleSectionProp: any = {
    class: 'text-left',
    title: 'Digital Alpha Advisors LLC ',
    subTitle: 'Our Strategy',
    description: 'A pioneering approach to enabling digital infrastructure.'
  };

  constructor() { }

  ngOnInit() {
  }

}
