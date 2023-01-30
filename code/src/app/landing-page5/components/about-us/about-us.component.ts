import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Digital Alpha',
    subTitle: 'Investing in the digital future'
  };
  
  List: any[] = [
    {
      title: 'Next Gen Networks',
      subtitle: 'Next Generation Broadband Networks, delivering programmability, automation, and new services to businesses and governments worldwide.',
      image: './assets/images/image.jpg'
    },
    {
      title: 'Cloud',
      subtitle: 'Cloud based data management platforms focused on security, privacy, and sovereignty delivered through innovative core and edge infrastructure.                                                   ',
      
      image: './assets/images/image.jpg'
    },
    {
      title: 'Internet of Things',
      subtitle: 'IoT platforms for urban infrastructure and smart city solutions partnering closely with utilities and municipalities worldwide. ',
      image: './assets/images/image.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
