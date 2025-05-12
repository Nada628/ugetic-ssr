import { Component, HostListener, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Social } from 'src/app/models/content.model';
import { ContentService } from 'src/app/services/content/content.service';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-sub-navbar',
  templateUrl: './sub-navbar.component.html',
  styleUrls: ['./sub-navbar.component.css']
})
export class SubNavbarComponent implements OnInit {
  isNavbarVisible: boolean = true;
  isScrolled = false;
  isAltStyle = false;

  social: Social[] = [];


  constructor(
    private contentService: ContentService,
    @Inject(PLATFORM_ID) private platformId: Object,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.fetchSocialLinks();
     this.checkAltStyleRoute(this.router.url);
    
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          this.checkAltStyleRoute(event.urlAfterRedirects);
        }
      });
  }

  fetchSocialLinks() {
    this.contentService.getSocialLinks().subscribe({
      next: (data: Social[]) => {
        this.social = data;
        console.log("test ssr", data)
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  @HostListener('window:scroll', [])
onWindowScroll() {
  if (isPlatformBrowser(this.platformId)) {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      this.isScrolled = scrollTop > 30; 
    }
  }
}


checkAltStyleRoute(url: string): void {
  const altRoutes = ['faq', 'usage-policy', 'privacy-policy', 'blogs','search'];
  this.isAltStyle = altRoutes.some(route => url.includes(route));
}

}
