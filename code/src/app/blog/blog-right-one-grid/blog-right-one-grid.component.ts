import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';

@Component({
  selector: 'app-blog-right-one-grid',
  templateUrl: './blog-right-one-grid.component.html',
})
export class BlogRightOneGridComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Right Sidebar Grid 1",
    img:"04.png"
  };
  grid : string = "12";

  List: any[] = [
    {
      img: './assets/images/about-us/02.png',
      name:  'HTML',
      time: 'September 26, 2019 ',
      title: 'Build Construction',
      desc: '“They bring to you a host of beautifully created infographics that contain the latest digital marketing ',
    },
    {
      img: './assets/images/about-us/03.png',
      name:  'Design',
      time: 'September 26, 2019 ',
      title: 'Life Lack Meaning',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      img: './assets/images/about-us/04.png',
      name:  'HTML',
      time: 'September 26, 2019 ',
      title: 'Construction industry',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing',
    },
    {
      img: './assets/images/about-us/05.png',
      name:  'CSS',
      time: 'September 26, 2019 ',
      title: 'Content Marketing',
      desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    }
  ];
  
  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }
}
