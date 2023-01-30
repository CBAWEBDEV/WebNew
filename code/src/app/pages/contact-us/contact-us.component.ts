import { Component, OnInit } from '@angular/core';
import {PluginsService} from "../../xamin/plugins.service";
import { topMenuBarItems } from '../../../constants/menu';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
})
export class ContactUsComponent implements OnInit {

  logoImage = './assets/images/logo.png';
  contactInfo: any = {
    contactNumber: '+0123456789',
    email: 'support@iqnonicthemes.com'
  };
  public navItems: any = topMenuBarItems;

  data : any = {
    title:"Contact us",
    img:"logo.png"
  };

  List : any[] =[
    {
      title:"Karl Meyer",
      address:"Partner",
      address1:" karl@dalphafund.com      "
    },

    {
      title:"Natalie Topham-Smith",
      address:"Investor Relations",
      address1:"natalie@dalphafund.com"
    }

  ]

  constructor(private plugins: PluginsService) { }

  ngOnInit() {
    const current = this;
    setTimeout(function() {
      current.plugins.index();
    }, 200);
  }

}
