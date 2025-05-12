import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LoginComponent } from './pages/login/login.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { SingleBlogComponent } from './pages/single-blog/single-blog.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { StoreComponent } from './pages/store/store.component';
import { WebsiteComponent } from './pages/website/website.component';
import { EOMComponent } from './pages/eom/eom.component';
import { FAQPageComponent } from './pages/faq-page/faq-page.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ApplyJopComponent } from './pages/apply-jop/apply-jop.component';
import { UsagePolicyComponent } from './pages/usage-policy/usage-policy.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { AppsComponent } from './pages/apps/apps.component';
import { SoftwareDevelopmentComponent } from './pages/software-development/software-development.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , data:{page: 'home'}},
  { path: 'about-us', component: AboutUsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'single-blog/:id', component: SingleBlogComponent },
  { path: 'privacy-policy', component:PrivacyPolicyComponent },
  { path: 'usage-policy', component:UsagePolicyComponent },
  { path: 'faq', component:FAQPageComponent },
  { path: 'careers', component:CareersComponent },
  { path: 'apply-jop', component:ApplyJopComponent },
  { path: 'search', component:SearchResultComponent },

  { path: 'store', component:StoreComponent  },
  { path: 'website', component:WebsiteComponent },
  { path: 'eom', component:EOMComponent},
  { path: 'apps', component:AppsComponent},
  { path: 'software', component:SoftwareDevelopmentComponent},




  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }





