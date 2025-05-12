import { Component, ViewChild, ElementRef, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';
import { Service } from 'src/app/models/content.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContentService } from 'src/app/services/content/content.service';
import { ScrollService } from 'src/app/services/scroll.service';
import { reviews } from 'src/app/models/content.model';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit{

  @ViewChild('scrolledSection') scrolledSection: ElementRef | undefined;
  services: Service[] = [];
  names: string[] = [];
  cards: { name: string, img: string }[] = [];
  images: string[] = [
    "../../../assets/images/home/about-us/about us/تصميم وتطوير البرامج الإدارية.svg",
    "../../../assets/images/home/about-us/about us/تصميم المواقع.svg",
    "../../../assets/images/home/about-us/about us/تصميم المتاجر .svg",
    "../../../assets/images/home/about-us/about us/تصميم التطبيقات.svg"
  ];

  testimonials:reviews[] = [];
   constructor(
      private router: Router,
      private ContentService: ContentService,
      private authService: AuthService ,
      private scroll: ScrollService,
      @Inject(PLATFORM_ID) private platformId: object
      
    ) {}
  
    
  
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
    AOS.init({
      duration: 600,
      once: false,
    });
  }
    this.fetchServices();
    this.fetchReviews();
  }
  fetchReviews():void {
    this.ContentService.getReviews().subscribe(reviews => {
      this.testimonials = reviews;
    }
    );
  }

  fetchServices() {
    this.ContentService.getServices().subscribe({
      next: (data: Service[]) => {
        this.services = data;
        // this.names = data.map((card) => card.name);

        this.cards = data.map((service, index) => ({
          name: service.name, 
          img: this.images[index] || this.images[this.images.length - 1]  //static from my images arr
        }));
      
        
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }
  scrollTo() {
    this.scroll.scrollToElement(this.scrolledSection?.nativeElement);
  }
}
