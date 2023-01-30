import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Responsibility',
    subTitle: 'Our ESG Strategy',
  };
  List: any[] = [

    {
      title: 'Holistic ESG',
      desc: 'DA integrates ESG considerations from the start of a portfolio company’s due diligence all the way through to its exit. We identify and monitor the most relevant ESG issues that directly reflect our portfolio companies’ unique operations. This integrated approach, in our opinion, drives the greatest ESG impact.',
      image: './assets/images/fancybox/25.png',
      arrow_image: './assets/images/fancybox/arrow-7.png',
      arrowbg_img: './assets/images/fancybox/bg-7-1.png',
    },
    {
      title: 'Transparency and Governance      ',
      desc: 'DA has developed a Responsible Investment Policy (RIP) which we believe incorporates industry leading practices in both the reporting and governance of our portfolio companies. DA aims to utilise independent standards-setting organization such as the “Sustainability Accounting Standards Board” and “Institutional Limited Partners Association Principals 3.0” to integrate industry specific frameworks and policies which best achieve our ESG goals.',
      image: './assets/images/fancybox/24.png',
      arrow_image: './assets/images/fancybox/arrow-7.png',
      arrowbg_img: './assets/images/fancybox/bg-7-1.png',
    },
    {
      title: 'The Future of ESG Practices      ',
      desc: 'DA will continually strive to achieve the best ESG reporting practices and regularly participates in responsible investment conferences. DA is keen to play a leading role in ESG and Impact investing as drivers of relevance in the deals of the future.      ',
      image: './assets/images/fancybox/26.png',
      arrow_image: './assets/images/fancybox/arrow-7.png',
      arrowbg_img: './assets/images/fancybox/bg-7-1.png',
    },
    // {
    //   title: 'Prediction',
    //   desc: 'It is a long established fact that a fre ader will be distracted by the .',
    //   image: './assets/images/fancybox/7-4.png',
    //   arrowbg_img: './assets/images/fancybox/bg-7-1.png',
    // }
  ];


  constructor() { }

  ngOnInit() {
  }

}
