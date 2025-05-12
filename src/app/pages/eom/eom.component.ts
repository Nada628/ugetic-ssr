import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eom',
  templateUrl: './eom.component.html',
  styleUrls: ['./eom.component.css']
})
export class EOMComponent {
  tabsData = [
    { id: 1, titleKey: 'eom-tabs.tab1-title', descKey: 'eom-tabs.tab1-desc', imageUrl: 'assets/images/home/eom/إدارة-المشاريع-الهندسية.png' },
    { id: 2, titleKey: 'eom-tabs.tab2-title', descKey: 'eom-tabs.tab2-desc', imageUrl: 'assets/images/home/eom/التقارير-الهندسية.png' },
    { id: 3, titleKey: 'eom-tabs.tab3-title', descKey: 'eom-tabs.tab3-desc', imageUrl: 'assets/images/home/eom/الاشراف-الهندسي.png' },
  ];
  tabsMetadata = [
       { header: 'eom-tabs.header', paragraph: 'eom-tabs.pragraph' },
  ];

  dynamicSectionData = {
    headerKey: ' خصم 20% على برنامج إدارة المكاتب الهندسية برنامجنا يجعلك',
    rotatingTextKeys: [
      'eom.dynamic-text-p1',
      'eom.dynamic-text-p2',
      'eom.dynamic-text-p3',
      'eom.dynamic-text-p4'
    ],
    staticTextKey: 'eom.static-p',
    watchButtonKey: 'تجربة مجانية+ خصم 20%',
    downloadButtonKey:'تحميل ملف التعريف',
    imageUrl: 'assets/images/home/eom/مميزات-تمنحك-المزيد-من-التحكم.png'
  };

  constructor(private http: HttpClient) {}


  // downloadFile() {
  //   const apiUrl = 'https://newapi.ecmpp.com/v5/api/version/show';
  
  //   this.http.get(apiUrl).subscribe((response: any) => {
  //     console.log('API Response:', response);
  
  //     if (response?.data?.exe_url) {
  //       const a = document.createElement('a');
  //       a.href = response.data.exe_url;
  //       a.download = 'downloadedFile.rar';
  //       document.body.appendChild(a);
  //       a.click();
  //       document.body.removeChild(a);
  //     } else {
  //       console.error('No exe_url found in the response.');
  //     }
  //   }, error => {
  //     console.error('Error fetching the data:', error);
  //   });
  // }
  
  downloadFile() {
    const exeUrl = 'https://newapi.ecmpp.com/storage/appFile/Tvd7U9seL0LHPduMjL3TE8vJdbjg3HMmtLcFuXOE.rar';
    
    const a = document.createElement('a');
    a.href = exeUrl;
    a.download = 'downloadedFile.rar';  
    a.click();
  }
  
  featureCards = [
    { icon: 'assets/images/home/eom/إدارة المشاريع الهندسية.svg', captionKey: 'eom-feature-one.card1' },
    { icon: 'assets/images/home/eom/الاشراف الهندسي.svg', captionKey: 'eom-feature-one.card2' },
    { icon: 'assets/images/home/eom/الدعم الهندسي.svg', captionKey: 'eom-feature-one.card3' },
    { icon: 'assets/images/home/eom/إدارة شؤون الموظفين .svg', captionKey: 'eom-feature-one.card4' },
    { icon: 'assets/images/home/eom/إدارة العملاء.svg', captionKey: 'eom-feature-one.card5' },
    { icon: 'assets/images/home/eom/نظام حسابات مبسط.svg', captionKey: 'eom-feature-one.card6' },
  ];
  
}
