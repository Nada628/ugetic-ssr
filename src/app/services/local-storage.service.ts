import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  
  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  getItem(name: string): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(name) ?? 'ar';
    }
    return 'ar';
  }

  setItem(name: string, value: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(name, value);
    }
  }
}
