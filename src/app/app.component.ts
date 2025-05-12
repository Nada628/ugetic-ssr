import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import AOS from 'aos';
import { LocalStorageService } from './services/local-storage.service';
import { TranslationService } from './services/translate.service';
import { MetaDataService } from './services/content/metadata.service';
import { SEO } from './models/metadata.model';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lang =  this.localStorageService.getItem('lang')
  SEO: SEO[] = [];

  constructor(
    private localStorageService: LocalStorageService,
    private translationService: TranslationService,
    private metaService: MetaDataService,
    @Inject(PLATFORM_ID) private platformId: object
    ) 
     { 
      
     }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1200,
      });
    }
    if (isPlatformBrowser(this.platformId)) {
      this.translationService.switchLang(this.lang);
    }
        this.getMetaData()
  }


  getMetaData() {
    this.metaService.getSEO().subscribe({
      next: (data: SEO[]) => {
        this.SEO = data;
  
        if (data) {
          const metadata = Array.isArray(data) 
            ? data.find((item: SEO) => item.id === 8)  // index page , id == 8
            : null;
            // console.log('Metadata with ID 8:', metadata); 
          if (metadata) {
            this.updateMetaTags(metadata);
          }
        }
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }
  

  private updateMetaTags(metadata: any): void {
    if (typeof document !== 'undefined') {
      const descriptionMeta = document.querySelector('meta[name="description"]');
      if (descriptionMeta) {
        descriptionMeta.setAttribute('content', metadata.description || '');
      }
  
      const keywordsMeta = document.querySelector('meta[name="keywords"]');
      if (keywordsMeta) {
        keywordsMeta.setAttribute('content', metadata.key_words || '');
      }
    }
  }
  

}

