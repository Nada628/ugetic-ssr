import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';
import { ContentService } from 'src/app/services/content/content.service';
import { FaqCategory, FaqResponse } from 'src/app/models/content.model';


@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FAQPageComponent {
  @ViewChild('scrolledSection') scrolledSection!: ElementRef;
  faqsGeneral: any[] = [];
  faqsSupport: any[] = [];
  faqsFollowUp: any[] = [];

  constructor(
      private scroll: ScrollService,
      private contentService: ContentService
    ){}
    
    ngOnInit(): void {
      this.fetchFaqs();
    }
  
    fetchFaqs(): void {
      this.contentService.getFAQ().subscribe(
        (response: any) => {  
          if (response && response.data) {

            console.log('API Response:', response); 
            

            const followUpCategory = response.data.find((category: any) => category.name.includes("أسئلة المتابعة"));
            console.log('FollowUp Category:', followUpCategory); 
            this.faqsFollowUp = followUpCategory ? followUpCategory.questionAndAnswer : [];
            console.log('FollowUp FAQs:', this.faqsFollowUp);  
            
            this.faqsGeneral = this.filterFaqsByCategory(response.data, 'الأسئلة العامة');
            this.faqsSupport = this.filterFaqsByCategory(response.data, 'أسئلة الدعم الفني');
            this.faqsFollowUp = this.filterFaqsByCategory(response.data, 'أسئلة المتابعة');

            console.log('FollowUp FAQs:', this.faqsFollowUp);
          }
        },
        (error) => {
          console.error('Error fetching FAQs:', error);
        }
      );
    }
    
  
    filterFaqsByCategory(data: any[], categoryName: string): any[] {
      const category = data.find((item) => item.name.includes(categoryName));
      return category ? category.questionAndAnswer : [];  
    }
    scrollTo() {
      this.scroll.scrollToElement(this.scrolledSection?.nativeElement);
    }
}
