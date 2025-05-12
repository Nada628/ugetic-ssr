import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  tabsData = [
    { id: 1, titleKey: 'tabs.tab1-title', descKey: 'tabs.tab1-desc', imageUrl: 'assets/images/home/المشاريع-الهندسية.png' },
    { id: 2, titleKey: 'tabs.tab2-title', descKey: 'tabs.tab2-desc', imageUrl: 'assets/images/home/الاشراف-الهندسي.png' },
    { id: 3, titleKey: 'tabs.tab3-title', descKey: 'tabs.tab3-desc', imageUrl: 'assets/images/home/الدفع-الالكتروني.png' },
    { id: 4, titleKey: 'tabs.tab4-title', descKey: 'tabs.tab4-desc', imageUrl: 'assets/images/home/الدفع-الالكتروني.png' }
  ];
  tabsMetadata = [
       { header: 'tabs.header', paragraph: 'tabs.pragraph' },
  ]
  dynamicSectionData = {
    headerKey: 'home.dynamic-text',
    rotatingTextKeys: [
      'home.dynamic-text-p1',
      'home.dynamic-text-p2',
      'home.dynamic-text-p3',
      'home.dynamic-text-p4'
    ],
    staticTextKey: 'home.static-p',
    watchButtonKey: 'home.watch-btn',
    downloadButtonKey: 'home.download-btn',
    imageUrl: 'assets/images/home/MAIN.png'
  };
  
  featureTwoData = {
    headerKey: 'feature-two.header',
    descKey: 'feature-two.desc',
    items: [
      { headerKey: 'feature-two.item-1', iconColor: '#d3a00f' },
      { headerKey: 'feature-two.item-2', iconColor: '#d3a00f' },
      { headerKey: 'feature-two.item-3', iconColor: '#d3a00f' },
      { headerKey: 'feature-two.item-4', iconColor: '#d3a00f' },
      { headerKey: 'feature-two.item-5', iconColor: '#d3a00f' },
      { headerKey: 'feature-two.item-6', iconColor: '#d3a00f' },
      { headerKey: 'feature-two.item-7', iconColor: '#d3a00f' }
    ],
    imageUrl: 'assets/images/home/موقع-وتطبيق-متكاملين-لتسويق-مكتبك-بطرق-مبتكرة.png'
  };
  
  
  featureThreeData = {
    headerKey: 'feature-three.header',
    descKey: 'feature-three.desc',
    items: [
      { headerKey: 'feature-three.item-1-header', descKey: 'feature-three.item-1-desc', icon: 'assets/images/home/إدارة المشاريع الهندسية.svg' },
      { headerKey: 'feature-three.item-2-header', descKey: 'feature-three.item-2-desc', icon: 'assets/images/home/نظام حسابات مبسط.svg' },
      { headerKey: 'feature-three.item-3-header', descKey: 'feature-three.item-3-desc', icon: 'assets/images/home/نظام إدارة العملاء.svg' }
    ],
    imageUrl: 'assets/images/home/نظام-إدارة-المكاتب-الهندسية-يوفر-لك-كل-ما-تحتاجه.png'
  };
  
  
}
