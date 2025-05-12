import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from 'src/app/models/content.model';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ContentService } from 'src/app/services/content/content.service';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  @ViewChild('scrolledSection') scrolledSection!: ElementRef;

  services: Service[] = [];
  names: string[] = [];
  steps = [
    { number: 1, title: 'أعلى جودة', description: 'خدمات عالية الجودة صُمّمت في باقات متنوعة ومتعددة، وبأسعار ذكية ومرنة حيث تناسب المؤسسات والشركات صغيرة ومتوسطة وكبيرة الحجم' },
    { number: 2, title: 'فريق العمل', description: 'نسعى دائما لاقتناء أفضل الخبرات والكفاءات في كافة نواحي العمل التقني لنحقق الأعمال المطلوبة من كافة نواحيها بنفس مستوى الابداع والتميز' },
    { number: 3, title: 'فريق الدعم', description: 'خدمة الدعم الفني على مدار الساعة وطوال أيام الأسبوع، عبر نظام الدعم الفني المتقدم المصمم لراحة العملاء و التحدث هاتفيا مع أحد من افراد فريق الدعم, متوفر باللغتين العربية والانجليزية.' }
  ];

  tabsData = [
    { id: 1, titleKey: 'services.tabs.tab1-title', descKey: 'services.tabs.tab1-desc', imageUrl: 'assets/images/home/services/services/برنامج-إدارة-المكاتب-الهندسية-.png' },
    { id: 2, titleKey: 'services.tabs.tab2-title', descKey: 'services.tabs.tab2-desc', imageUrl: 'assets/images/home/services/services/برنامج-حسابات-مبسط.png' },
    { id: 3, titleKey: 'services.tabs.tab3-title', descKey: 'services.tabs.tab3-desc', imageUrl: 'assets/images/home/services/services/برنامج-يوجيتك-للشكاوي.png' },
    { id: 4, titleKey: 'services.tabs.tab4-title', descKey: 'services.tabs.tab4-desc', imageUrl: 'assets/images/home/services/services/برنامج--يوجيتك-CRM.png' }
  ];
  tabsMetadata = [
    { header: 'services.tabs.header', paragraph: 'services.tabs.desc' },
]
  constructor(
     private router: Router,
     private ContentService: ContentService,
     private authService: AuthService ,
     private scroll: ScrollService

   ) {}

 ngOnInit(): void {
  this.fetchServices();
  }

fetchServices() {
    this.ContentService.getServices().subscribe({
      next: (data: Service[]) => {
        this.services = data;
        this.names = data.map((card) => card.name);

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
