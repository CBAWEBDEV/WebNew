import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner',
  templateUrl: './partner.component.html'
})
export class PartnerComponent implements OnInit {

  List: any[] = [
    {
      image: './assets/images/partners/25.png',
      name:  'Unitas Global',
      // time: 'September 26, 2019 ',
      title: 'Press',
      info:'Unitas Global',
      subtitle: "https://www.businesswire.com/news/home/20220418005166/en/Digital-Alpha-Completes-the-Asset-Acquisition-of-Unitas-Globals-Connectivity-Business-a-Next-Generation-Networking-Platform"
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      image: './assets/images/partners/9.png',
      name:  'Welink',
      // time: 'September 26, 2019 ',
      title: 'Press',
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    // {
    //   img: './assets/images/partners/1.png',
    //   name:  'British Telecom',
    //   // time: 'September 26, 2019 ',
    //   title: 'Press',
    //   // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    // },
    {
      image: './assets/images/partners/26.png',
      name:  'SHARE CARE',
      info: 'Tim Brazil',
      subtitle: "https://www.fiercevideo.com/tech/cisco-qwilt-and-digital-alpha-bring-open-caching-to-brazil-via-tim-partnership",
      // time: 'September 26, 2019 ',
      title: 'Press',
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      image: './assets/images/partners/27.png',
      name:  'SHARE CARE',
      // time: 'September 26, 2019 ',
      title: 'Press',
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
