import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-blog-two-column',
  templateUrl: './blog-two-column.component.html',
})
export class BlogTwoColumnComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Our Portfolio",
    img:"logo.png"

  };
  grid : string = "6";

  List: any[] = [

    {
      img: './assets/images/partners/25.png',
      name:  'Unitas Global',
      // time: 'September 26, 2019 ',
      title: 'Press',
      url: "https://www.businesswire.com/news/home/20220418005166/en/Digital-Alpha-Completes-the-Asset-Acquisition-of-Unitas-Globals-Connectivity-Business-a-Next-Generation-Networking-Platform"
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      img: './assets/images/partners/24.png',
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
      img: './assets/images/partners/20.png',
      name:  'SHARE CARE',
      // time: 'September 26, 2019 ',
      title: 'Press',
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      img: './assets/images/partners/21.png',
      name:  'SHARE CARE',
      // time: 'September 26, 2019 ',
      title: 'Press',
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      img: './assets/images/partners/22.png',
      name:  'SHARE CARE',
      // time: 'September 26, 2019 ',
      title: 'Press',
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },

    {
      img: './assets/images/partners/g.jpg',
      name:  'Google Station',
      // time: 'September 26, 2019 ',
      title: 'Press',
      desc: ' Google Station announcement at Mobile World Congress Barcelona',
    },

    {
      img: './assets/images/partners/p.png',
      name:  'Packet Fabric',
      // time: 'September 26, 2019 ',
      title: 'Press',
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      img: './assets/images/partners/7.png',
      name:  'PRYON',
      // time: 'September 26, 2019 ',
      title: 'Press',
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      img: './assets/images/partners/10.png',
      name:  'Working Group Two',
      // time: 'September 26, 2019 ',
      title: 'Press',
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },

    {
      img: './assets/images/partners/cloud.jpg',
      name:  'Cloudian',
      // time: 'September 26, 2019 ',
      title: 'Press',
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
   
    
    {
      img: './assets/images/partners/6.png',
      name:  'CONNEXIN',
      // time: 'September 26, 2019 ',
      title: 'Press',
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    // {
    //   img: './assets/images/partners/7.png',
    //   name:  'PRYON',
    //   // time: 'September 26, 2019 ',
    //   title: 'Press',
    //   desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    // },
    // {
    //   img: './assets/images/partners/10.png',
    //   name:  'Working Group Two',
    //   // time: 'September 26, 2019 ',
    //   title: 'Press',
    //   desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    // },
    {
      img: './assets/images/partners/11.png',
      name:  'JetStream Software',
      // time: 'September 26, 2019 ',
      title: 'Press',
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },

  ];
  
  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }
}
