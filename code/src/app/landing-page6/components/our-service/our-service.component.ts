import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html'
})
export class OurServiceComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'OUR FOCUS',
    subTitle: 'Investing in the Digital Future'
  };

  List: any[] = [
    { 
      id: 'tab-software-development',
      title: 'Content',
      subtitle: 'Digital Alpha Strategy Content',
      image: './assets/images/services/6-1.png',
      tabImage : './assets/images/services/16.jpg',
      active: true
    },
    { 
      id: 'tab-application-services',
      title: 'Content',
      subtitle: 'Digital Alpha Strategy Content',
      image: './assets/images/services/6-2.png',
      tabImage : './assets/images/services/14.png'
    },
    { 
      id: 'tab-data-analytics',
      title: 'Content',
      subtitle: 'Digital Alpha Strategy Content',
      image: './assets/images/services/6-3.png',
      tabImage : './assets/images/services/13.png'
    },
    { 
      id: 'tab-help-desk',
      title: 'Content',
      subtitle: 'Digital Alpha Strategy Content',
      image: './assets/images/services/6-4.png',
      tabImage : './assets/images/services/14.png'
    }
  ];

  tabActive(id) {
    // @ts-ignore
    const jquery = window.$;
    jquery('.tab-content').find('.active').removeClass('active show');
    jquery('#' + id).addClass('active show');
  }
  constructor() { }

  ngOnInit() {
  }

}
