import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = new BehaviorSubject<string>('ar'); // Default language
  languageChanged = this.currentLang.asObservable();

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  switchLang(lang: string): void {
    this.translate.use(lang);
    
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }

    this.currentLang.next(lang); // Emit the new language to subscribers
  }

  getCurrentLang(): string {
    return this.currentLang.getValue(); // Safely access the current language value
  }
}
