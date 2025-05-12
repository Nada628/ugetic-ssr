import { Component, Input, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-block-faq',
  templateUrl: './block-faq.component.html',
  styleUrls: ['./block-faq.component.css']
})
export class BlockFaqComponent {
  
  @Input() title: string = 'faq.title';
  @Input() faqs: { question: string, answer: string }[] = [];
  @Input() imageSrc: string = '../../../assets/images/home/faq/faq.jpg';

  constructor(
    private translate: TranslateService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  ngOnInit(): void {
    this.generateStructuredData();
  }

  generateStructuredData(): void {
    this.translate.get([
      'faq.question1', 'faq.answer1',
      'faq.question2', 'faq.answer2',
      'faq.question3', 'faq.answer3'
    ]).subscribe(translations => {
      const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": translations['faq.question1'],
            "acceptedAnswer": {
              "@type": "Answer",
              "text": translations['faq.answer1']
            }
          },
          {
            "@type": "Question",
            "name": translations['faq.question2'],
            "acceptedAnswer": {
              "@type": "Answer",
              "text": translations['faq.answer2']
            }
          },
          {
            "@type": "Question",
            "name": translations['faq.question3'],
            "acceptedAnswer": {
              "@type": "Answer",
              "text": translations['faq.answer3']
            }
          }
        ]
      };

      const script = this.renderer.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(faqJsonLd, null, 2);
      this.renderer.appendChild(this.document.head, script);
    });
  }
}
