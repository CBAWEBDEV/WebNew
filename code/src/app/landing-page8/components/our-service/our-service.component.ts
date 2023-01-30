import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html'
})
export class OurServiceComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Portfolio ',
    subTitle: 'Examples',
  };

  List: any[] = [
{
    title: 'Welink',
    href: "https://welink.com/2022/08/24/forbes-on-the-acp-welink-founder-kevin-ross-continues-efforts-to-close-the-digital-divide/",
    desc: 'Welink provides powerful connectivity to address the digital divide in cities accross America.',
    image: './assets/images/fancybox/8.png',
    bg_img: './assets/images/fancybox/bg-7-2.png',
},
    {
      title: 'Quantela',
      desc: 'Quantela has developed a contact tracing solution for covid-19 management for municipalities.',
      image: './assets/images/fancybox/9.png',
      bg_img: './assets/images/fancybox/bg-7-2.png',
      href: "https://www.quantela.com/",

    },
    {
      title: 'Packet Fabric',
      desc: 'PacketFabric is providing essential connectivity services across the United States as business, governments and schools move critical functions online during the pandemic.',
      image: './assets/images/fancybox/8.png',
      bg_img: './assets/images/fancybox/bg-7-2.png',
      href: "https://packetfabric.com/",

    },
    {
      title: 'UK Cloud',
      desc: 'UKCloud, a sovereign data cloud portfolio company, is now providing the first carbon negative cloud services in the UK.',
      image: './assets/images/fancybox/7.png',
      bg_img: './assets/images/fancybox/bg-7-2.png',
      href:"https://www.cio.com/article/306656/ukcloud-operates-a-sovereign-multi-cloud-platform-that-addresses-the-needs-of-the-uks-government-agencies-and-healthcare-and-defense-sectors.html"
    },


  ];
  constructor() { }

  ngOnInit() {
  }

}
