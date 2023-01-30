import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html'
})
export class OurBlogComponent implements OnInit {

  titleSectionProp: any = {
    class: 'text-center',
    title: 'Digital Alpha',
    subTitle: 'Press',
    desc:'It is a long established fact that a reader will be distracted'
  };

  List: any[] = [
    {
      img: './assets/images/about-us/1.png',
      name:  'HTML',
      time: 'September 26, 2019 ',
      title: '',
      desc: '“',
    },
    {
      img: './assets/images/about-us/25.png',
      name:  'Design',
      time: 'September 26, 2019 ',
      title: '',
      desc: '',
    },
    {
      img: './assets/images/about-us/9.png',
      name:  'HTML',
      time: 'September 26, 2019 ',
      title: '',
      desc: '',
    },
    {
      img: './assets/images/about-us/27.png',
      name:  'CSS',
      time: 'September 26, 2019 ',
      title: '',
      desc: '',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
