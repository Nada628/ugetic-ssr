import { Component } from '@angular/core';

@Component({
  selector: 'app-software-development',
  templateUrl: './software-development.component.html',
  styleUrls: ['./software-development.component.css']
})
export class SoftwareDevelopmentComponent {
  tabsData = [
    { id: 1, titleKey: 'التكامل مع منصات الإدارة المختلفة', descKey: 'برامجنا تدعم الربط مع الأنظمة المحاسبية، أنظمة الموارد البشرية، وإدارة العملاء، لضمان تدفق البيانات بسهولة', imageUrl: 'assets/images/software/التكامل مع منصات الإدارة المختلفة.svg' },
    { id: 2, titleKey: 'تحليل وإعداد التقارير المالية:', descKey: 'نظام متكامل يوفر لك تقارير مالية دقيقة لمساعدتك في اتخاذ القرارات الصحيحة.', imageUrl: 'assets/images/software/تحليل وإعداد التقارير المالية.svg' },
    { id: 3, titleKey: 'إدارة الفواتير والمدفوعات', descKey: ' إمكانية  إصدار الفواتير الإلكترونية وربطها بأنظمة الضرائب المعتمدة', imageUrl: 'assets/images/software/إدارة-الفواتير-والمدفوعات.jpg' },
    { id:4, titleKey:'إدارة المخزون', descKey:'نظام ذكي لمتابعة حركة المنتجات وإدارة مستويات المخزون بكفاءة', imageUrl:'assets/images/software/إدارة المخزون.svg'}

  ];
  tabsMetadata = [
       { header: 'أنظمة مخصصة وفق احتياجاتك', paragraph: 'نسعى إلى تلبية احتياجات مؤسستك بشكل احترافي واسلوب علمي ومنهجي، ما يساهم في تطويرها وإدارتها بفاعلية.' },
  ]
  dynamicSectionData = {
    headerKey: 'نبتكر برامج وأنظمة إدارية ومحاسبية تعزز',
    rotatingTextKeys: [
      'إنتاجيتك',
      'كفاءة عملياتك',
      'نجاح أعمالك',
      'تفوقك التكنولوجي'
    ],
    staticTextKey: 'هل تبحث عن تصميم نظام إداري أو محاسبي يُحدث نقلة نوعية في أعمالك؟ نقدم لك حلول برمجية مخصصة تلبي احتياجاتك، مع تصميم عصري وتجربة مستخدم استثنائية',
    watchButtonKey: 'اطلب نظامك الآن',
    downloadButtonKey: 'شاهد فيديو',
    imageUrl: 'assets/images/software/software development-main.svg'
  };
  
  featureTwoData = {
    headerKey: 'تصميم سهل وسلس لأنظمتك الإدارية',
    descKey: 'نوفر لك برامج محاسبية وإدارية متجاوبة وسلسة تعمل بكفاءة على مختلف الأجهزة، مما يضمن سهولة إدارتها من أي مكان وفي أي وقت ',
    items: [
      { headerKey: 'أداء سريع واستجابة عالية ', iconColor: '#d3a00f' },
      { headerKey: 'تكامل مع أنظمة الدفع المتنوعة', iconColor: '#d3a00f' },
      { headerKey: 'أمان متقدم لحماية بيانات المستخدمين', iconColor: '#d3a00f' },
     
    ],
    imageUrl: 'assets/images/software/تصميم سهل وسلس لأنظمتك الإدارية- يوجيتك.svg'
  };
  
  
  featureThreeData = {
    headerKey: 'مواصفات متكاملة تدعم أعمالك',
    descKey: '',
    items: [
      { headerKey: 'استضافة قوية وموثوقة', descKey: 'نوفر لك استضافة سحابية موثوقة من أفضل مزودي الخدمة لضمان تشغيل سلس وآمن لأنظمتك. ', icon: 'assets/images/software/استضافة قوية وموثوقة-يوجيتك.svg' },
      { headerKey: 'تكامل مع الأنظمة الأخرى', descKey: 'تدعم برامجنا التكامل مع أنظمة المحاسبة والمخزون والمبيعات، والموارد البشرية.', icon: 'assets/images/software/تكامل مع الأنظمة الأخرى-يوجيتك.svg' },
      { headerKey: 'تحديد نموذج الأعمال', descKey: 'نساعدك في وضع business model لنظامك، وترجمته إلى صورة واقعية من خلال برامج figma أو adobe XD r قبل البدء في التنفيذ', icon: 'assets/images/software/تحديد نموذج أعمال - يوجيتك.svg' },

    ],
    imageUrl: 'assets/images/software/مواصفات متكاملة تدعم أعمالك-يوجيتك.svg'
  };

  featureCards = [
    { icon: 'assets/images/software/دعم أكثر من لغة.svg', captionKey: 'دعم أكثر من لغة. ' },
    { icon: 'assets/images/software/واجهة سهلة الاستخدام- يوجيتك.svg', captionKey: 'واجهة سهلة الاستخدام' },
    { icon: 'assets/images/software/إدارة متكاملة للحسابات والمخازن.svg', captionKey: 'إدارة متكاملة للحسابات والمخزون.' },
    { icon: 'assets/images/software/تقارير تحليلية دقيقة يوجيتك.svg', captionKey: 'تقارير تحليلية دقيقة' },
    { icon: 'assets/images/software/تكامل مع أنظمة الضرائب والفواتير الإلكترونية - يوجيتك.svg', captionKey: 'تكامل مع أنظمة الضرائب والفواتير الإلكترونية' },
    { icon: 'assets/images/software/إدارة العملاء والموظفين والموردين-يوجيتك.svg', captionKey: 'إدارة العملاء والموظفين والموردين داخل الفروع المختلفة' }

  ];
}
