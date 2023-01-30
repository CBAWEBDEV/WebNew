import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specializing2',
  templateUrl: './specializing2.component.html'
})
export class Specializing2Component implements OnInit {

  List: any[] = [
    {
      title: 'Rick Shrotri',
      subtitle:'Founder & Managing Partner',
      desc: 'Mr. Shrotri has been a technology and telecommunications investor for over two decades, managing industry shaping investments. Prior to founding Digital Alpha, Mr. Shrotri was Managing Director of Cisco’s Business Acceleration Team, where he focused on identifying and developing opportunities from Cisco’s sales pipeline that require equity financing. During his 10 years at Cisco Mr. Shrotri has worked on the growth strategy and investments, strategic partnerships, and managed a forum of executive reviews that include the firm’s most senior leadership. Prior to Cisco, Mr. Shrotri worked in the Seoul, Korea headquarters of Samsung, where he focused on external innovation strategy including M&A and JV structures for the semiconductor and mobility divisions. Mr. Shrotri also worked at Goldman Sachs focusing on tech/telecom investments in the Principal Investment Area (PIA). Mr. Shrotri holds degrees from the Wharton School at the University of Pennsylvania in Finance and International Relations, both summa cum laude, and an MBA from Harvard Business School, where he was a Baker Scholar.',
      // Prior to founding Digital Alpha, Mr. Shrotri was Managing Director of Ciscos Business Acceleration Team, where he focused on identifying and developing opportunities from Cisco’s sales pipeline that require equity financing.',

      href: '#'
    },
    {
      title: 'Karl Meyer',
      subtitle:'Partner',

      desc: 'Mr. Meyer has been a business development and operational leader in Silicon Valley at both growth stage and large companies for over two decades, during which he and Mr. Shrotri have worked together twice before.  At Incorta, Mr. Meyer started the business development function and also led both the HR and Finance functions. The business development function sourced over 70 percent of Incorta’s new revenue through 2021.  Prior to Incorta, Mr. Meyer led the Enterprise Business Development function at Kleiner Perkins as an Operating Partner.  Mr. Meyer also has experience at leading Silicon Valley firms, as he drove corporate initiatives at both HP and Cisco. Mr. Meyer drove the analytics and cloud strategies at HP, which were the company’s two fastest growing businesses. He also was a key team member in driving the cloud, cybersecurity, and emerging markets strategy at Cisco.  Earlier in Mr. Meyer’s career, he was in a business development role at two high growth firms. Linuxcare was funded by Kleiner Perkins and acquired by Computer Associates, now part of Broadcom. Mr. Meyer also led the business development function at XDegrees, which was acquired by Microsoft.  Mr. Meyer is a cum laude Economics graduate of Pomona College and studied abroad at University College, Oxford.',
      // href: '#'
    },
    {
      title: 'Vasa Babic',
      subtitle:'Deal Partner',

      desc: 'Mr. Babic has partnered with Mr. Shrotri for 5+ years in developing the Digital Alpha concept.  Mr. Babic has 25+ years global experience in the technology, telecoms and media sectors. He has a blend of expertise in Corporate Finance, Principal Investing, Corporate General Management and Strategic consultancy. His private practice has represented and advised several Global 500 companies on new investments, joint ventures and restructurings since 2009, as well as more performing more traditional strategic and operational consultancy work.  Prior to independent advisory work, Vasa was a Partner and COO of Hanover Investors, a public market control-based equity Fund. He has served as a Non-Executive Director of FTSE and AIM listed companies in the UK, including a full 7 year term at Scottish Television Group PLC, where he also chaired the Remuneration committee.  Vasa was previously the youngest Group Director at Vodafone, with a role leading post-merger integration, and the youngest partner worldwide in Oliver Wyman, a Strategy Consultancy, where he specialised in technology, telecoms and media. He has a degree in Economics from King’s College, Cambridge.',

      href: '#',

    },
    {
      title: 'Neil Sheridan',
      subtitle:'Principal',

 desc: 'Mr. Sheridan has a decade of investment experience at leading private equity and investment banking firms.  Prior to joining Digital Alpha, Mr. Sheridan was a Vice President at San Francisco-based private equity firm Golden Gate Capital, where he focused on technology investments across the software, information services, and technology-enabled services ecosystems.  Previously, Mr. Sheridan was an Investment Banking Analyst at Greenhill & Company’s New York office, where he focused on M&A and restructuring transactions. Mr. Sheridan is a graduate with honors from New York University’s Stern School of Business, where he majored in finance and economics and studied abroad in London and Hong Kong. He is a CFA Charterholder.',
      // href: '#'
    },
    {
      title: 'Abraham Oler',
      subtitle:'Managing Director and Chief Legal Officer',

      desc: 'Abraham (Avi) Oler, CFA is Digital Alpha’s Managing Director and Chief Legal Officer. Avi has been an advisor to Digital Alpha and its portfolio companies since inception and has known the Managing Partner for more than two decades. Avi was previously a corporate attorney with Kirkland & Ellis LLP, where he concentrated his practice on the structuring, formation, and operations of private equity funds. Most recently, Avi led the legal function of two publicly listed companies, where he also led the corporate development function and managed licensing, M&A, and financing transactions. Earlier in his career, Avi was a financial research analyst at the Center for Financial Research & Analysis, and an investment banker in the Financial Institutions Group with Lehman Brothers in London. Avi earned his J.D. and MBA degrees with distinction from Northwestern University School of Law and the Kellogg School of Management. He earned an M.Sc. in Politics of the World Economy from the London School of Economics and Political Science, a B.S.in Economics and a B.A. in International Relations magna cum laude from the University of Pennsylvania and the Wharton School.  Avi is a CFA Charterholder. ',

    },

    {
      title: 'Andy Alcon, CPA',
      subtitle:'Chief Financial Officer',

      desc: 'Mr. Alcon has been CFO for Digital Alpha since inception.  He has 33+ years experience overseeing accounting, reporting, treasury and investor relations.  Previously, Andy was CFO for Crosspoint Venture Partners, a prominent Silicon Valley firm.  He has experience in SEC requirements associated with the investment industry.  Mr. Alcon began his career at Peat, Marwick & Mitchell & Co.  Crosspoint raised over $1.8 billion for large institutions and strategics across 11 funds, distributing $9.4+ billion during his tenure.',

    },


    {
      title: 'Dave Ward',
      subtitle:'Operating Partner',

    desc: 'Mr.Ward is an industry pioneer, having most recently served as CTO and Chief Architect of Cisco’s ~$50 Billion networking business.  He is one of two individuals to be both Cisco and Juniper Fellows, during a distinguished career where he has overseen the development of innovations covering networking orchestration & automation, virtualized & cloud-native services, cloud networking & security.  Mr. Ward has unique expertise in 5G and IoT technologies that are important to Digital Alpha’s investment strategy.  Mr. Ward currently serves as CEO of Packet Fabric.',
      // href: '#'
    },
    {
      title: 'Jeff Frazier',
      subtitle:'Operating Partner',

      desc: 'Mr. Frazier began his career as a Special Agent for the FBI, managing the agency’s congressionally funded portfolio.  He has senior executive experience at both Microsoft, where he ran the Public Sector business, and Cisco, where he managed Government Affairs reporting into the Chairman’s Office of Cisco.  Mr. Frazier advises Digital Alpha on public sector opportunities, including Smart Cities, which are a key focus area for the Digital Alpha Funds.  He currently serves in an advisory function to Quantela and COO of Pyron, Inc.',
      // href: '#'
    },
    {
      title: 'Scott A. Puopolo',
      subtitle:'Operating Partner',

      desc: 'Mr. Puopolo is a 35-year veteran of the Technology and Telecommunications Products and Service Industry.  Most recently Scott was the Chief Executive Officer of Telestream, a leading provider of world-class on-demand and live digital video tools, workflow solutions, and network quality monitoring solutions.  Prior to Telestream, Mr. Puopolo was the Executive Vice President and General Manager of iconectiv’s Information Solutions business unit, the leading neutral provider of seamless and secure information, software and services, which enable the interconnection of networks, devices, and applications.  Previously Mr. Puopolo partnered extensively with Mr. Shrotri at Cisco, holding senior leadership positions including Leader of the Service Provider Go-To-Market for Cisco’s IOT Solutions and Global Leader of strategic business development functions used by the CEO and senior executives to develop joint business opportunities with Cisco’s strategic partners.  Mr. Puopolo spent 14 years at Accenture where he was Managing Partner for Accenture’s North American Telecommunications Strategy Practice, and ran the Communications, Media and High Technology Strategy Practice for Canada and the U.S. Eastern Region.  Mr. Puopolo graduated cum laude from Harvard College where he was a Charles J. Paine Scholar and a Harvard College Scholar. He received his Master of Business Administration from the Wharton School of the University of Pennsylvania.',
      // href: '#'
    },

    {
      title: 'Ed Olsen',
      subtitle:'Operating Partner',

     desc: 'Mr. Olsen has decades of experience in digital advertising, having run the largest digital advertising agency in Silicon Valley prior to joining Cisco Systems, Inc. At Cisco Mr. Olsen was responsible for Content and Monetization Services tied to Sports and Entertainment, City Projects, and other digital infrastructure venues. He has led projects and teams worldwide that have received over 200 awards in recognition of their accomplishments as innovators. Mr. Olsen’s 18 years of Digital ROI and Sales Generation activities are important to Digital Alpha’s Revenue Sharing portfolio of opportunities.  Mr. Olsen currently drives monetization activities in North America for Quantela and assists selected DA portfolio companies on monetization plans worldwide.',
      // href: '#'
    },
    {
      title: 'Terry Whalen',
      subtitle:'Senior Director, Portfolio Operations',

      desc: 'Mr. Whalen brings over a decade of experience in driving incremental revenue at high-growth companies through global technology partnerships at companies like Amazon, Google, and Microsoft.  Prior to joining Digital Alpha, Mr. Whalen led Incorta’s cloud partnership program where he spearheaded a new joint offer with Microsoft that resulted in a new revenue stream for Incorta and closed several brand name logos within the first quarter after the offer’s launch. Mr. Whalen’s efforts led to Incorta winning Microsoft’s 2020 Partner of the Year award out of a pool of over 300 companies.  Previously, Mr. Whalen leveraged his passion for sales and marketing excellence at a division of Accenture where he helped companies like Amazon, Microsoft, Qlik, and Rackspace establish and execute go-to-market initiatives that led to accelerated revenue growth.  Mr. Whalen graduated Brigham Young University with degrees in Economics and Business Strategy.',
      href: '#'
    },
    {
      title: 'Shiju Rajagopalan',
      subtitle: 'Senior Director, Portfolio Operations',

      desc:'Mr. Shiju Rajagopalan has over two decades of experience as a business development and operations executive. In these roles Mr. Shiju has achieved consistent revenue growth using his consultative sales skills, joint solutioning & building partnerships with global service organizations. Prior to joining Digital Alpha, Mr. Shiju led a global system integration partnership program for a Silicon Valley firm where he built joint go-to-market offers with partners like Accenture, TCS, Infosys and Wipro. Previously, Mr. Shiju leveraged his passion for sales and customer relations at Wipro to position digital service offerings across customers like Cisco, Uber, LinkedIn, Micron, Sony, Netflix. Mr. Shiju graduated from Calicut University with degree in Computer Science.',

      href: '#'
    },


    {
      title: 'Rahim Ladak ',
      subtitle:'Associate      ',

      desc: 'Mr. Ladak has 4 years of experience working at leading private equity and investment banking firms.  Prior to joining Digital Alpha, Mr. Ladak was an Associate at DW Healthcare Partners, a healthcare private equity firm, where he evaluated control-oriented investments of companies in the healthcare space.  Prior to DWHP, he was an Investment Banking Analyst at Credit Suisse, where he worked on M&A and financing transactions.  Mr. Ladak graduated with an Honors in Business Administration with distinction from Western University’s Ivey School of Business.',
      href: '#'
    },

    {
      title: 'Jesús R. Vega',
      subtitle:'CPA Controller, Director of Finance',

  desc: 'He has 10+ years experience of audit experience in the private and public sector with focus on internal controls over financial reporting and financial statements.  Prior to joining Digital Alpha, Mr. Vega was a Senior Manager at leading professional firm Deloitte, where he focused on improving economic margins, growing the business, finding efficiencies and maintaining quality standards.  Previously, Jesús was an Experienced Senior Manager at the second-largest professional services firm PwC, where he led audit teams on areas of expertise and technical knowledge.  Industries served over his career includes technology, banking, manufacturing, distribution, insurance, and investment management.  Mr. Vega graduated Summa Cum Laude with a degree in Master in Business Administration (MBA) and a Bachelor in Business Administration (BBA) with majors in Accounting and Finance; both from the University of Puerto Rico, Río Piedras Campus.',
      href: '#'
    },
    {
      title: 'Dalvin Hernández-Pérez',
      subtitle:'Financial Analyst',

    desc: 'Mr. Hernández-Pérez started his career working in the public sector in the areas of compliance, regulation, auditing and advising for more than 10 years.  He, then worked as an Auditor in a CPA boutique firm in Puerto Rico with whom he engaged in Single Audits, Accounting and Advising to small businesses, local governments, and Governmental Agencies of the Commonwealth of Puerto Rico.  Mr. Hernández-Pérez has a legal background and worked at a boutique law firm in Puerto Rico aiding elected officials, local businesses, and private clients for more than 5 years. He also worked for a Financial Industry Fortune 500 company before joining Digital Alpha.  Mr. Hernández-Pérez holds a bachelor’s degree in Accounting, a Juris Doctor degree, and a Master’s degree in Finance, where he graduated top of the class.',
      href: '#'
    },

    {
      title: 'Natalie Topham-Smith',
      subtitle:'Investor Relations',

      desc: 'Ms. Topham-Smith has joined Digital Alpha after a two decade career at top investment firms, including Soros Group, Kohlberg, Kravis and Roberts (KKR), and Blackstone Group.  Ms. Topham-Smith started her career at Morgan Stanley in London.  Ms. Topham-Smith studied at the London School of Economics, focused on Economic Principles and International Economics.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
