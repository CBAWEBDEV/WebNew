import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'newsandmedia', loadChildren: './landing-page1/landing-page1.module#LandingPage1Module' },
  { path: 'landing-page2', loadChildren: './landing-page2/landing-page2.module#LandingPage2Module' },
  { path: 'landing-page3', loadChildren: './landing-page3/landing-page3.module#LandingPage3Module' },
  { path: 'strategy', loadChildren: './landing-page4/landing-page4.module#LandingPage4Module' },
  { path: 'home', loadChildren: './landing-page5/landing-page5.module#LandingPage5Module' },
  // { path: 'landing-page6', loadChildren: './landing-page6/landing-page6.module#LandingPage6Module' },
  // { path: 'new', loadChildren: './landing-page7/landing-page7.module#LandingPage7Module' },

  // { path: 'landing-page6', loadChildren: './landing-page6/landing-page6.module#LandingPage6Module' },

  { path: 'portfolio', loadChildren: './landing-page6/landing-page6.module#LandingPage6Module' },
  { path: 'responsibility', loadChildren: './landing-page8/landing-page8.module#LandingPage8Module' },


    //  {path: 'portfolio', loadChildren: './our-cases/portfolio-2-columns/portfolio-2-columns.component#portfolio-2-columnsComponent'},


    // { path: 'responsibility', loadChildren: './landing-page8/landing-page8.module#LandingPage8Module' },


  { path: 'landing-page7', loadChildren: './landing-page7/landing-page7.module#LandingPage7Module' },
  { path: 'landing-page8', loadChildren: './landing-page8/landing-page8.module#LandingPage8Module' },
  { path: 'landing-page9', loadChildren: './landing-page9/landing-page9.module#LandingPage9Module' },


  { path: 'ourteam', loadChildren: './landing-page9/landing-page9.module#LandingPage9Module' },




  { path: 'disclaimers', loadChildren: './landing-page10/landing-page10.module#LandingPage10Module' },
  { path: 'landing-page11', loadChildren: './landing-page11/landing-page11.module#LandingPage11Module' },
  { path: 'our-cases', loadChildren: './our-cases/our-cases.module#OurCasesModule' },
  { path: 'blog', loadChildren: './blog/blog.module#BlogModule' },
  { path: 'about-us', loadChildren: './about/about.module#AboutModule' },
  { path: 'services', loadChildren: './service/service.module#ServiceModule' },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
    { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },


  {path: '', loadChildren: './landing-page5/landing-page5.module#LandingPage5Module'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
