import { Component, HostListener, OnDestroy, OnInit, ChangeDetectorRef, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TranslationService } from 'src/app/services/translate.service';
import { ContentService } from '../../../app/services/content/content.service';
import { Page } from 'src/app/models/content.model';
import { NavigationEnd, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy, AfterViewInit {
  navbarScrolled = false;
  isAltStyle = false;
  isNavbarOpen = false;
  isMobile: boolean = false;
  searchTerm: string = '';
  hasPrograms: boolean = false;
  currentLanguageImage!: string;
  placeholderText: string = ' ما الذي تبحث عنه ؟ ...';
  isTyping = false;
  currentPlaceholder: string = '';
  currentIndex: number = 0;
  typingSpeed: number = 80;
  isSearchBoxVisible = false;
  isExpanded = false;
  expandTimeout: any;
  logo = '../../../assets/images/home/ugitech--logo-02.png';
  pages: Page[] = [];
  hiddenPages: Page[] = [];
  loginPage: Page | undefined;

  constructor(
    private translationService: TranslationService,
    private localStorageService: LocalStorageService,
    private contentService: ContentService,
    public router: Router,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {

     this.checkAltStyleRoute(this.router.url);

  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.checkAltStyleRoute(event.urlAfterRedirects);
    }
  });
    const lang = this.localStorageService.getItem('lang') || 'en';
    this.setLanguageImage(lang);
    this.fetchMenu();

    if (isPlatformBrowser(this.platformId)) {
      this.checkMobile();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.addEventListener('click', this.onDocumentClick);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      document.removeEventListener('click', this.onDocumentClick);
    }
  }

  fetchMenu() {
    this.contentService.getPages().subscribe({
      next: (data: any[]) => {
        this.pages = data.filter(page => page.to_menu === 1).sort((a, b) => a.order - b.order);

        const programs: Page = {
          id: 999,
          title: 'برامجنا',
          link: '#',
          content: '',
          to_menu: 1,
          order: '2.5'
        };

        this.pages.splice(2, 0, programs);
        this.hiddenPages = data.filter(page => page.to_menu === 0);
        this.loginPage = this.hiddenPages.find(page => page.link === '/login');
        this.hasPrograms = this.pages.some(page => page.title === 'برامجنا');
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  performSearch() {
    if (!this.searchTerm.trim()) return;
    this.router.navigate(['/search'], { queryParams: { q: this.searchTerm } });
  }

  animatePlaceholder(): void {
    this.isTyping = true;
    if (this.currentIndex < this.placeholderText.length) {
      this.currentPlaceholder += this.placeholderText.charAt(this.currentIndex);
      this.currentIndex++;
      this.cdr.detectChanges();
      setTimeout(() => this.animatePlaceholder(), this.typingSpeed);
    } else {
      setTimeout(() => {
        this.isTyping = false;
        this.currentPlaceholder = '';
        this.cdr.detectChanges();
      }, 1000);
    }
  }

  clearPlaceholder(): void {
    if (!this.isTyping) {
      this.currentPlaceholder = '';
    }
  }

  transalte(lang: string) {
    this.translationService.switchLang(lang);
    this.localStorageService.setItem('lang', lang);
    this.setLanguageImage(lang);
  }

  private setLanguageImage(lang: string) {
    const languageImages: { [key: string]: string } = {
      'en': '../../../assets/icons/Flag_of_the_United_Kingdom.svg.png',
      'ar': '../../../assets/icons/world.png'
    };
    this.currentLanguageImage = languageImages[lang];
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      const scrollPosition = window.pageYOffset;
      if (scrollPosition > 50) {
        this.navbarScrolled = true;
        this.logo = '../../../assets/images/home/logoblack.png';
      } else {
        this.navbarScrolled = false;
        this.logo = '../../../assets/images/home/ugitech--logo-02.png';
      }
    }
  }

  @HostListener('window:resize', [])
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.checkMobile();
    }
  }

  checkMobile() {
    if (isPlatformBrowser(this.platformId)) {
      this.isMobile = window.innerWidth < 500;
    }
  }

  toggleSearchBox(event: MouseEvent) {
    if (isPlatformBrowser(this.platformId)) {
      event.stopPropagation();

      if (this.isSearchBoxVisible) {
        this.isExpanded = false;
        this.searchTerm = '';

        setTimeout(() => {
          this.isSearchBoxVisible = false;
        }, 1000);
        return;
      }

      this.isSearchBoxVisible = true;
      this.isExpanded = false;
      this.currentPlaceholder = '';
      this.currentIndex = 0;
      this.isTyping = false;

      if (this.expandTimeout) {
        clearTimeout(this.expandTimeout);
      }

      this.expandTimeout = setTimeout(() => {
        this.isExpanded = true;

        setTimeout(() => {
          this.animatePlaceholder();
        }, 1000);
      }, 1000);
    }
  }

  onDocumentClick = (event: MouseEvent) => {
    if (isPlatformBrowser(this.platformId)) {
      if (this.isSearchBoxVisible && !(event.target instanceof HTMLInputElement)) {
        this.isSearchBoxVisible = false;
        this.isExpanded = false;
        clearTimeout(this.expandTimeout);
      }
    }
  }

  toggleNavbar() {
  this.isNavbarOpen = !this.isNavbarOpen;
}

checkAltStyleRoute(url: string): void {
  const altRoutes = ['faq', 'usage-policy', 'privacy-policy', 'blogs','search'];
  this.isAltStyle = altRoutes.some(route => url.includes(route));
}
}
