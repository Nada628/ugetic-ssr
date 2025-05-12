import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { reviews } from 'src/app/models/content.model';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  currentSlide = 0;
  totalSlides = 6; 
  visibleSlides = 3; 

  reviews: reviews[] = [];
  dots = new Array(this.totalSlides / this.visibleSlides).fill(0); 

  constructor(
    private contentService: ContentService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
    this.fetchReviews();
  }

  fetchReviews(): void {
    this.contentService.getReviews().subscribe(reviews => {
      this.reviews = reviews;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
    }
  }

  checkScreenSize() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth <= 768) {
        this.visibleSlides = 1;
      } else {
        this.visibleSlides = 3;
      }
      this.updateSlider();
    }
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide === 0) ? this.totalSlides - this.visibleSlides : this.currentSlide - 1;
    this.updateSlider();
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide >= this.totalSlides - this.visibleSlides) ? 0 : this.currentSlide + 1;
    this.updateSlider();
  }

  updateSlider() {
    if (isPlatformBrowser(this.platformId)) {
      const sliderTrack = document.querySelector('.slider-track') as HTMLElement;
      if (sliderTrack) {
        sliderTrack.style.transform = `translateX(-${this.currentSlide * (100 / this.visibleSlides)}%)`;
      }
    }
  }
}
