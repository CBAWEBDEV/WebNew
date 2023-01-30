import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-six-projects',
  templateUrl: './section-six-projects.component.html'
})
export class SectionSixProjectsComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'OUR PROJECTS',
    subTitle: 'Projects in Different Domain of Industry'
  };
  navigation: boolean = true;
  List: any[] = [
    // {
    //   title: 'UK Cloud',
    //   subtitle: '.',
    //   image: './assets/images/partners/1.png'
    // },
    // {
    //   title: 'JetStream',
    //   subtitle:"https://www.tradingview.com/chart/6AfSgpbI/?symbol=CME_MINI%3ANQ1%21",
    //   image: './assets/images/partners/3.png'
    // },
    // {
    //   title: 'British Telecom',
    //   subtitle: '.',
    //   image: './assets/images/partners/4.png'
    // },
    // {
    //   title: 'Working Group Two',
    //   subtitle: '.',
    //   image: './assets/images/partners/2.png'
    // },
    
   
    {
      image: './assets/images/logo.png',
      name:  'Cimcon Lighting',
      // time: 'September 26, 2019 ',
      title: 'Press',
      info: 'Digital Alpha Announces Closing of Second Digital Infrastructure Fund at Over $1 Billion',
// info2:'Platform provider aims to lower smart city set-up costs',
      subtitle: "https://www.prnewswire.com/news-releases/digital-alpha-announces-closing-of-second-digital-infrastructure-fund-at-over-1-billion-301272788.html",
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
      // subtitle2:"https://www.smartcitiesworld.net/news/news/platform-provider-aims-to-lower-smart-city-set-up-costs-4566"
    },
    {
      image: './assets/images/logo.png',
      name:  'Cimcon Lighting',
      // time: 'September 26, 2019 ',
      title: 'Press',
      info: 'Roundtable discussion: Navigating digital, infrastructures hottest sector',
// info2:'Platform provider aims to lower smart city set-up costs',
      subtitle: "https://www.infrastructureinvestor.com/roundtable-navigating-digital-infras-hottest-sector/",
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
      // subtitle2:"https://www.smartcitiesworld.net/news/news/platform-provider-aims-to-lower-smart-city-set-up-costs-4566"
    },



  ]
  constructor() { }

  ngOnInit() {
  }

}

