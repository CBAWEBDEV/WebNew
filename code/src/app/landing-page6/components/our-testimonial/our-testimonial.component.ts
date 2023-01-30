import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-testimonial',
  templateUrl: './our-testimonial.component.html'
})
export class OurTestimonialComponent implements OnInit {

  
  titleSectionProp: any = {
    class: 'text-center',
    title: 'Testimonials',
    subTitle: '100+ Companies are Using Xamin',
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
      image: './assets/images/partners/dtiq.png',
      name:  'DTIQ',
      // time: 'September 26, 2019 ',
      title: 'PRESS',
      info:'Digital Alpha leads $200M investment to acquire majority stake in DTiQ',
      subtitle: "https://www.prnewswire.com/news-releases/digital-alpha-leads-200m-investment-to-acquire-majority-stake-in-dtiq-catalyzing-cisco-meraki-partnership-and-extending-dtiqs-market-leading-ai-cloud-and-automation-capabilities-301441587.html"

      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      image: './assets/images/partners/25.png',
      name:  'Unitas Global',
      // time: 'September 26, 2019 ',
      title: 'PRESS',
      info:'Digital Alpha completes the asset acquisition of Unitas Global connectivity business',
      subtitle: "https://www.businesswire.com/news/home/20220418005166/en/Digital-Alpha-Completes-the-Asset-Acquisition-of-Unitas-Globals-Connectivity-Business-a-Next-Generation-Networking-Platform"
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      image: './assets/images/partners/24.png',
      name:  'Welink',
      // time: 'September 26, 2019 ',
      title: 'PRESS',
      info: 'WeLink secures 185 m Million funding from Digital Alpha to revolutionize the future Ultra High Speed Wireless Broadband',
      subtitle: 'https://www.businesswire.com/news/home/20210107005328/en/WeLink-Secures-185-Million-Funding-from-Digital-Alpha-to-Revolutionize-the-Future-of-Ultra-High-Speed-Wireless-Broadband'
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
      image: './assets/images/partners/1.png',
      name:  'SHARE CARE',
      // time: 'September 26, 2019 ',
      title: 'PRESS',
      info: 'Cisco, Qwilt and Digital Alpha Define the Future of Content Delivery with New Open Caching Solution for Service Providers',
      subtitle: "https://newsroom.cisco.com/c/r/newsroom/en/us/a/y2020/m10/cisco-qwilt-and-digital-alpha-define-the-future-of-content-delivery-with-new-open-caching-solution-for-service-providers.html"
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      image: './assets/images/partners/27.png',
      name:  'SHARE CARE',
      info: 'Cisco, Qwilt and Digital Alpha bring open caching to Brazil via Tim partnership',
      subtitle: "https://www.fiercevideo.com/tech/cisco-qwilt-and-digital-alpha-bring-open-caching-to-brazil-via-tim-partnership",
      // time: 'September 26, 2019 ',
      title: 'PRESS',
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },


    {
      image: './assets/images/partners/26.png',
      name:  'SHARE CARE',
      // time: 'September 26, 2019 ',
      title: 'PRESS',
      info: 'Cisco, Qwilt and Digital Alpha launching cdn solution to improve streaming experience for its customers in Argentina',
      info2: 'Sharecare and Falcon Capital Acquisition Corp. Reach Agreement to Combine, Creating Publicly Traded Digital Health Company',
      subtitle: "https://www.qwilt.com/telecom-argentina-launching-new-cisco-qwilt-and-digital-alpha-cdn-solution-to-improve-streaming-experience-for-its-customers-in-argentina/",
      
      subtitle2:"https://www.prnewswire.com/news-releases/sharecare-and-falcon-capital-acquisition-corp-reach-agreement-to-combine-creating-publicly-traded-digital-health-company-301227530.html"
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      image: './assets/images/partners/9.png',
      name:  'SHARE CARE',
      info: 'Cisco, Qwilt and Digital Alpha Define the Future of Content Delivery with New Open Caching Solution for Service Providers',
      info2:'Qwilt Content Delivery Sharing for Publishers Transforms Media Delivery',
      subtitle: "https://www.qwilt.com/cisco-qwilt-and-digital-alpha-define-the-future-of-content-delivery-with-new-open-caching-solution-for-service-providers/",
      subtitle2:"https://www.qwilt.com/qwilt-content-delivery-sharing-for-publishers-transforms-media-delivery/",
      // time: 'September 26, 2019 ',
      title: 'PRESS',
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      image: './assets/images/partners/g.jpg',
      name:  'Google Station',
      // time: 'September 26, 2019 ',
      title: 'PRESS',
      desc: ' Google Station announcement at Mobile World Congress Barcelona',
      info: 'Google Station announcement at Mobile World Congress Barcelona',
      subtitle: "https://www.qwilt.com/telecom-argentina-launching-new-cisco-qwilt-and-digital-alpha-cdn-solution-to-improve-streaming-experience-for-its-customers-in-argentina/",
    },

    {
      image: './assets/images/partners/p.png',
      name:  'Packet Fabric',
      // time: 'September 26, 2019 ',
      title: 'PRESS',
      info: 'Chris Dedicoat joins PacketFabric Board of Directors as chairman',
      info2:'PacketFabric names former Cisco Executive Dave Ward as its new CEO',
      subtitle: "https://www.lightreading.com/services/chris-dedicoat-joins-packetfabric-board-of-directors-as-chairman/d/d-id/762784?/",
      subtitle2: "https://www.fiercetelecom.com/telecom/packetfabric-names-former-cisco-executive-ward-as-its-new-ceo"
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      image: './assets/images/partners/7.png',
      name:  'PRYON',
      // time: 'September 26, 2019 ',
      title: 'PRESS',
      info: 'Pyron an AI Technology company announces Series A 20M Equity funding round',
      subtitle: "https://pryon.com/2019/06/11/pryon-announces-20m-equity-round/",
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      image: './assets/images/partners/10.png',
      name:  'Working Group Two',
      // time: 'September 26, 2019 ',
      title: 'PRESS',
      info: 'Telenor and Cisco Strengthen Partnership to Support Critical Infrastructure Transitions for Telcos Scale Joint Venture WG2 for Global Operations',
      info2: 'Norways Telenor Seeks Salvation in the Cloud with spinout WG2',
      
      subtitle: "https://www.globenewswire.com/news-release/2020/06/25/2053226/0/en/Telenor-and-Cisco-Strengthen-Partnership-to-Support-Critical-Infrastructure-Transitions-for-Telcos-Scale-Joint-Venture-WG2-for-Global-Operations.html",
      subtitle2: "https://www.reuters.com/article/idUSKCN1GD5JA"

      
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },

    {
      image: './assets/images/partners/cloudian.png',
      name:  'Cloudian',
      // time: 'September 26, 2019 ',
      title: 'PRESS',
      info: 'Cloudian secures $125m Joint Venture Commitment with Digital Alpha',
      info2: 'Cisco & Cloudian Collaborate to Create Scale-Out Enterprise Object Storage Solutions',
      subtitle: "https://www.globenewswire.com/news-release/2018/02/28/1401078/0/en/Cloudian-Secures-Funding-Commitment-of-125-Million-in-Joint-Venture-with-Digital-Alpha-to-Power-Enterprise-Object-Storage-Growth.html",
      subtitle2:"https://cloudian.com/blog/cisco-cloudian-create-scale-out-object-storage-solutions/"
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
    {
      image: './assets/images/partners/5.png',
      name:  'Sharecare',
      // time: 'September 26, 2019 ',
      title: 'PRESS',
      info: 'Sharecare and Digital Alpha announce a strategic collaboration',
      info2: 'Sharecare and Falcon Capital Acquisition Corp. Reach Agreement to Combine, Creating Publicly Traded Digital Health Company',

      subtitle: "https://www.prnewswire.com/news-releases/sharecare-and-digital-alpha-announce-a-strategic-collaboration-to-strengthen-the-nexus-of-healthcare-and-digital-infrastructure-across-america-301231713.html",
      subtitle2: "https://www.prnewswire.com/news-releases/sharecare-and-falcon-capital-acquisition-corp-reach-agreement-to-combine-creating-publicly-traded-digital-health-company-301227530.html"
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },
   
    
    {
      image: './assets/images/partners/6.png',
      name:  'CONNEXIN',
      // time: 'September 26, 2019 ',
      title: 'Press',
      info: 'Smart Cities Race Steps up a Gear with £10m Connexin Investment',
      exit:'Exited 2019',
      subtitle: "https://venturebeat.com/2017/10/15/smart-cities-race-steps-up-a-gear-with-10m-connexin-investment/",
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
      image: './assets/images/partners/11.png',
      name:  'JetStream Software',
      // time: 'September 26, 2019 ',
      title: 'Press',
      info: 'JetStream Software Secures Funding Led by Digital Alpha to Advance Disaster Recovery as a Service, Cloud Data Protection',

      subtitle: "https://www.jetstreamsoft.com/2019/05/28/jetstream-software-secures-series-a-funding-led-by-digital-alpha-to-advance-draas-and-cloud-data-protection/",
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
    },

    {
      image: './assets/images/partners/ukcloud.png',
      name:  'UK Cloud',
      // time: 'September 26, 2019 ',
      title: 'Press',
      info: 'UKCloud secures investment from Digital Alpha',
info2:'UKCloud awarded an expanded presence on G-Cloud 11 with new and improved multi-cloud services',
      subtitle: "https://ukcloud.com/hub/news/ukcloud-secures-investment-from-digital-alpha-to-accelerate-the-expansion-of-its-high-security-multi-cloud-platform/",
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
      subtitle2:"https://www.socpub.com/articles/ukcloud-awarded-expanded-presence-g-cloud-11-new-and-improved-multi-cloud-services-16584"
    },
    {
      image: './assets/images/partners/quantela.jpg',
      name:  'Quantela',
      // time: 'September 26, 2019 ',
      title: 'Press',
      info: 'Quantela receives $10m Equity Investment From Digital Alpha to Scale its Global Business',
      info2:'World Economic Forum Awards Quantela Inc. the Coveted Technology Pioneer',

      subtitle: "https://www.prnewswire.com/news-releases/quantela-a-smart-city-automation-and-ai-leader-announces-a-10m-equity-investment-from-digital-alpha-to-scale-its-global-business-828415024.html",
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
      subtitle2:"https://www.prnewswire.com/in/news-releases/world-economic-forum-awards-quantela-inc-the-coveted-technology-pioneer--827359253.html"

    },
    {
      image: './assets/images/partners/cimcon.jpg',
      name:  'Cimcon Lighting',
      // time: 'September 26, 2019 ',
      title: 'Press',
      exit:'Exited 2021',
      info: 'Cimcon receives 33 million in funding to extend its reach to smart cities.',
info2:'Platform provider aims to lower smart city set-up costs',
      subtitle: "https://www.prnewswire.com/news-releases/cimcon-receives-33-million-in-funding-to-extend-the-reach-of-its-smart-cities-solutions-300914826.html",
      // desc: 'They bring to you a host of beautifully created infographics that contain the latest digital marketing.',
      subtitle2:"https://www.smartcitiesworld.net/news/news/platform-provider-aims-to-lower-smart-city-set-up-costs-4566"
    },


  ]
  constructor() { }

  ngOnInit() {
  }

}
