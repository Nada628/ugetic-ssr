import { Inject, Injectable, NgModule, NO_ERRORS_SCHEMA, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TrustedByComponent } from './components/trusted-by/trusted-by.component';
import { featureOneComponent } from './components/feature-one/feature-one.component';
import { FeatureTwoThreeComponent } from './components/featureTwoThree/featureTwoThree.component';
import { TabsComponent } from './shared/components/tabs/tabs.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { BlockFaqComponent } from './components/block-faq/block-faq.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { GiveUsCallComponent } from './components/give-us-call/give-us-call.component';
import { LoginComponent } from './pages/login/login.component';
import { BlogComponent } from './pages/blog/blog.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { PriceCardComponent } from './components/price-card/price-card.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SingleBlogComponent } from './pages/single-blog/single-blog.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { HomeCallToActionComponent } from './components/home-call-to-action/home-call-to-action.component';
import { OurMissionAndVissionComponent } from './components/our-mission-and-vission/our-mission-and-vission.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { StoreComponent } from './pages/store/store.component';
import { WebsiteComponent } from './pages/website/website.component';
import { EOMComponent } from './pages/eom/eom.component';
import { EomFeature1Component } from './pages/eom/eom-feature1/eom-feature1.component';
import { EomFeatureTwoThreeComponent } from './pages/eom/eom-feature-two-three/eom-feature-two-three.component';
import { StoreFeatureOneComponent } from './pages/store/store-feature-one/store-feature-one.component';
import { StoreFeatureTwoThreeComponent } from './pages/store/store-feature-two-three/store-feature-two-three.component';
import { CarouselModule } from 'primeng/carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { PopUpFormComponent } from './components/pop-up-form/pop-up-form.component';
import { FAQPageComponent } from './pages/faq-page/faq-page.component';
import { AccordionModule } from 'primeng/accordion';
import { JoinUsBlockComponent } from './components/join-us-block/join-us-block.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ApplyJopComponent } from './pages/apply-jop/apply-jop.component';
import { WavesShapeComponent } from './components/waves-shape/waves-shape.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FeedbackComponent } from './shared/components/feedback/feedback.component';
import { UsagePolicyComponent } from './pages/usage-policy/usage-policy.component';
import { DynamicFormComponent } from './shared/components/dynamic-form/dynamic-form.component';
import { SubNavbarComponent } from './components/sub-navbar/sub-navbar.component';
import { DynamicServicesCardComponent } from './shared/components/dynamic-services-card/dynamic-services-card.component';
import { PopUpOffersComponent } from './shared/components/pop-up-offers/pop-up-offers.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { isPlatformServer, NgOptimizedImage } from '@angular/common';
import { DiscountSectionComponent } from './pages/eom/discount-section/discount-section.component';
import { AppsComponent } from './pages/apps/apps.component';
import { SoftwareDevelopmentComponent } from './pages/software-development/software-development.component';
import { Observable } from 'rxjs';


@Injectable()
export class AbsoluteUrlInterceptor implements HttpInterceptor {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // إذا كنا في وضع الخادم ويبدأ URL بـ '/'
    if (isPlatformServer(this.platformId) && (req.url.startsWith('/') || req.url.startsWith('./') || req.url.startsWith('../'))) {
      let serverUrl = 'http://localhost:4200'; // استبدلها بعنوان الخادم الخاص بك
      
      // إذا كان الطلب يبدأ بـ ./
      if (req.url.startsWith('./')) {
        const updatedUrl = req.url.replace('./', '/');
        const absoluteUrl = `${serverUrl}${updatedUrl}`;
        return next.handle(req.clone({ url: absoluteUrl }));
      }
      
      // إذا كان الطلب يبدأ بـ ../
      if (req.url.startsWith('../')) {
        const updatedUrl = req.url.replace('../', '/');
        const absoluteUrl = `${serverUrl}${updatedUrl}`;
        return next.handle(req.clone({ url: absoluteUrl }));
      }
      
      // إذا كان الطلب يبدأ بـ /
      const absoluteUrl = `${serverUrl}${req.url}`;
      return next.handle(req.clone({ url: absoluteUrl }));
    }
    
    return next.handle(req);
  }
}

export function createTranslateLoader(http: HttpClient) {
  // إذا كنا بحاجة إلى معالجة الترجمة بشكل خاص للـ SSR
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    TrustedByComponent,
    featureOneComponent,
    FeatureTwoThreeComponent,
    TabsComponent,
    ReviewsComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    OurTeamComponent,
    BlockFaqComponent,
    ServicesComponent,
    ContactUsComponent,
    GiveUsCallComponent,
    LoginComponent,
    BlogComponent,
    PricingComponent,
    PriceCardComponent,
    SingleBlogComponent,
    PrivacyPolicyComponent,
    HomeCallToActionComponent,
    OurMissionAndVissionComponent,
    SideBarComponent,
    NavigationBarComponent,
    StoreComponent,
    WebsiteComponent,
    EOMComponent,
    EomFeature1Component,
    EomFeatureTwoThreeComponent,
    StoreFeatureOneComponent,
    StoreFeatureTwoThreeComponent,
    PopUpFormComponent,
    FAQPageComponent,
    JoinUsBlockComponent,
    CareersComponent,
    ApplyJopComponent,
    WavesShapeComponent,
    FeedbackComponent,
    UsagePolicyComponent,
    DynamicFormComponent,
    SubNavbarComponent,
    DynamicServicesCardComponent,
    PopUpOffersComponent,
    SearchResultComponent,
    DiscountSectionComponent,
    AppsComponent,
    SoftwareDevelopmentComponent

  ],

  imports: [
    BrowserModule,
    FormsModule,
    SlickCarouselModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientModule,
    CarouselModule,
    ReactiveFormsModule,
    AccordionModule,
    NgOptimizedImage,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
  

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, '/assets/i18n/', '.json'),
        deps: [HttpClient]
      }
    }),
    

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AbsoluteUrlInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
