import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html'
})
export class UsageComponent implements OnInit {
  titleSectionProp: any = {
    class: 'text-left',
    // title: 'Purpose',
    subTitle: 'Purpose',
    description:'At Digital Alpha (“DA”) we believe that our fiduciary responsibility requires careful consideration of the impact our investments can have on environmental, social and governance (“ESG”) matters. DA believes a tailored approach to ESG issues for each of our portfolio companies will create value for not only our LPs, but for many other stakeholders.'
    // description: 'At Digital Alpha (“DA”) we believe that our fiduciary responsibility requires careful consideration of the impact our investments can have on environmental, social and governance (“ESG”) matters. DA believes a tailored approach to ESG issues for each of our portfolio companies will create value for not only our LPs, but for many other stakeholders. DA appreciates that tracking, collecting and reporting on ESG requires significant resources, however, we see that the incorporation of ESG is way of creating longer term sustainable growth for our portfolio companies. DA’s investments are predominantly ‘green’; developing technology and jobs related to the mission critical infras'
  };

  List: any[] = [
    {
      // title: 'Data Visualization Practices to Improve',
      // icon: 'fa fa-database',
      // desc: 'DA appreciates that tracking, collecting and reporting on ESG requires significant resources, however, we see that the incorporation of ESG is way of creating longer term sustainable growth for our portfolio companies. DA’s investments are predominantly ‘green’; developing technology and jobs related to the mission critical infrastructure needed in today’s modern world.'
    },
    {
      // title: 'Focused on Actionable Insights',
      // icon: 'fa fa-align-left',
      // desc: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}


