import { Component } from '@angular/core';

@Component({
  selector: 'website-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent {
  tabsData = [
    { id: 1, titleKey: 'التكامل مع المنصات التسويقية الأخرى', descKey: 'الرابط بين المنصات المختلفة، هو أمر ضروري لأي علامة تجارية، ولأنها تساعد في التسويق لها بشكل كبير، وتزيد من انتشارها بشكل كبير', imageUrl: 'assets/images/website/التكامل-مع-المنصات-التسويقية-الأخرى.png' },
    { id: 2, titleKey: 'تحسين محركات البحث (SEO )', descKey: 'نقدم لك موقعا متوافق مع اشتراطات محركات البحث، مما يضمن لك الظهور بالنتائج البحثية الأولى.', imageUrl: 'assets/images/website/تحسين-محركات-البحث.png' },
    { id: 3, titleKey: 'توفير وسائل الدفع المتنوعة', descKey: ' تقديم خيارات دفع متعددة لتسهيل عمليات الشراء عبر الإنترنت.', imageUrl: 'assets/images/website/توفير-وسائل-الدفع-المتنوعة.png' },
    { id:4, titleKey:'نشر المحتوى', descKey:'إمكانية نشر محتوى تعليمي أو معلوماتي، مما يساعد في جذب العملاء.', imageUrl:'assets/images/website/نشر-المحتوى.png'},
    { id:5, titleKey:'مراجعات وتقييمات', descKey:'تعتبر أداة حيوية لتحسين تجربة المستخدم وتعزيز الثقة في العلامات التجارية.', imageUrl:'assets/images/website/مراجعات-وتقييمات.png'},

  ];
  tabsMetadata = [
       { header: 'صمم موقعك بالشكل الذي تريده', paragraph: 'نستخدم أفضل لغات البرمجة بما يضمن أمان واستقرار موقعك ' },
  ]
  dynamicSectionData = {
    headerKey: 'نبتكر مواقع إلكترونية تعزز',
    rotatingTextKeys: [
      'تواجدك الرقمي',
      'تجربة عملائك',
      'نجاح أعمالك',
      'تفوقك التكنولوجي'
    ],
    staticTextKey: 'هل تبحث عن تصميم موقع إلكتروني يبرز علامتك التجارية ويحقق أهدافك؟ نقدم لك خدمات تصميم مواقع مخصصة تلبي احتياجاتك، مع تصميم عصري وتجربة مستخدم مميزة',
    watchButtonKey: 'انشئ موقعك الآن',
    downloadButtonKey: 'شاهد فيديو',
    imageUrl: 'assets/images/website/تصميم-متجاوب-وسلس.png'
  };
  
  featureTwoData = {
    headerKey: 'تصميم متجاوب وسلس',
    descKey: 'نوفر لك موقع الكترونيا سلس ومتجاوب مع جميع المتصفحات والشاشات المختلفة، فيمكنك تصفحه من خلال الحاسوب الشخصي أو الهاتف أو التابلت وغيرها من الأجهزة الأخرى، بجانب العديد من المميزات الأخرى التي تدعم تجربة المستخدم. ',
    items: [
      { headerKey: 'موقع الكتروني سريع التحميل. ', iconColor: '#d3a00f' },
      { headerKey: 'طرق دفع متنوعة', iconColor: '#d3a00f' },
      { headerKey: 'موقع يتمتع بقدر عال من تشفير البيانات والمعلومات', iconColor: '#d3a00f' },
     
    ],
    imageUrl: 'assets/images/website/تصميم-متجاوب-وسلس.png'
  };
  
  
  featureThreeData = {
    headerKey: 'مواصفات متكاملة تخدم عملك',
    descKey: '',
    items: [
      { headerKey: 'باقات استضافة متنوعة', descKey: 'نوفر لك إمكانية حجز استضافة موقعك الإلكتروني، واستفد من جودة الخدمة التي نحصل عليها من شركائنا مثل جوجل وأمازون. ', icon: 'assets/images/website/باقات استضافة متنوعة.svg' },
      { headerKey: 'حجز الدومين', descKey: 'نساعدك في تحديد اسم الدومين المناسب لعلامتك التجارية، بما يساهم في تحسين ظهور موقعك أمام عملائك المناسبين. .', icon: 'assets/images/website/حجز الدومين.svg' },
      { headerKey: 'ايميلات رسمية واحترافية ', descKey: 'نوفر لك عدد لا نهائي من الايميلات الرسمية الخاصة بالموظفيين داخل شركتك، والتحكم بها ومراقبتها أيضا. ', icon: 'assets/images/website/ايميلات رسمية واحترافية.svg' }
    ],
    imageUrl: 'assets/images/website/مواصفات-متكاملة-تخدم-عملك.png'
  };

  featureCards = [
    { icon: 'assets/images/website/دعم أكثر من لغة.svg', captionKey: 'دعم أكثر من لغة. ' },
    { icon: 'assets/images/website/واجهة سهلة الاستخدام.svg', captionKey: 'واجهة سهلة الاستخدام' },
    { icon: 'assets/images/website/سابقة الأعمال copy.svg', captionKey: 'نشر سابقة الأعمال' },
    { icon: 'assets/images/website/المدونة.svg', captionKey: 'مدونة الكترونية' },
    { icon: 'assets/images/website/التكامل مع السوشيال ميديا.svg', captionKey: 'التكامل مع السوشيال ميديا' },
    { icon: 'assets/images/website/أمان البيانات والمعلومات.svg', captionKey: 'أمان البيانات والمعلومات' },
  ];
}
