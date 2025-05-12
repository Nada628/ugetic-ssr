import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  tabsData = [
    { id: 1, titleKey: 'store-tabs.tab1-title', descKey: 'store-tabs.tab1-desc', imageUrl: 'assets/images/home/store/التوافق-مع-الأجهزة-المتنوعة.jpg' },
    { id: 2, titleKey: 'store-tabs.tab2-title', descKey: 'store-tabs.tab2-desc', imageUrl: 'assets/images/home/store/التكامل-مع-منصات-البيع-الأخرى.jpg' },
    { id: 3, titleKey: 'store-tabs.tab3-title', descKey: 'store-tabs.tab3-desc', imageUrl: 'assets/images/home/store/الاشعارات.jpg' },
    { id: 4, titleKey: 'store-tabs.tab4-title', descKey: 'store-tabs.tab4-desc', imageUrl: 'assets/images/home/store/عروض-وخصومات.jpg' }
  ];
  tabsMetadata = [
       { header: 'خصائص لا نهائية تضمن زيادة مبيعاتك ', paragraph: '' },
  ];

  
  dynamicSectionData = {
    headerKey: 'store.dynamic-text',
    rotatingTextKeys: [
      'store.dynamic-text-p1',
      'store.dynamic-text-p2',
      'store.dynamic-text-p3',
      'store.dynamic-text-p4'
    ],
    staticTextKey: 'store.static-p',
    watchButtonKey: 'store.watch-btn',
    downloadButtonKey: 'store.download-btn',
    imageUrl: 'assets/images/home/store/main.png'
  };
  

}
