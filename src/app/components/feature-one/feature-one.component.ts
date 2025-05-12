import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import AOS from 'aos';
import { Service } from 'src/app/models/content.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-feature-one',
  templateUrl: './feature-one.component.html',
  styleUrls: ['./feature-one.component.css']
})
export class featureOneComponent implements OnInit {
  services: Service[] = [];
  names: string[] = [];

  constructor(
    private router: Router,
    private ContentService: ContentService,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: object,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 2000,
        once: true,
      });
    }
    this.fetchServices();
  }

  fetchServices() {
    this.ContentService.getServices().subscribe({
      next: (data: Service[]) => {
        this.services = data;
        this.names = data.map(card => card.name);
        this.injectStructuredData(this.names);
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }

  injectStructuredData(serviceNames: string[]): void {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": serviceNames.map((name, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Service",
          "name": name,
          "description": name,
          "provider": {
            "@type": "Organization",
            "name": "يوجيتك"
          }
        }
      }))
    };

    const script = this.renderer.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData, null, 2);
    this.renderer.appendChild(this.document.head, script);
  }
}
