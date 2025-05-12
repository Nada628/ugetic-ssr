import { Component, ElementRef, ViewChild } from '@angular/core';
import { ScrollService } from 'src/app/services/scroll.service';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent {
    @ViewChild('scrolledSection') scrolledSection: ElementRef | undefined;

    constructor(
      private scroll: ScrollService
    ){}
  
    cards = [
      {
        title: '100% Remote',
        icon: 'bi bi-laptop', 
        content: 'نحن نعمل على إنشاء واجهات وظيفية وبديهية للجميع.'
      },
      {
        icon: 'bi bi-star',
        title: ' النمو الوظيفى',
        content: 'نحن نعمل على إنشاء واجهات وظيفية وبديهية للجميع.'
      },
      {
        icon: 'bi bi-bookmark',
        title: ' ساعات مرنة',
        content: 'نحن نعمل على إنشاء واجهات وظيفية وبديهية للجميع.'
      },
      {
        icon: 'bi bi-laptop', 
        title: '100% Remote',
        content: 'نحن نعمل على إنشاء واجهات وظيفية وبديهية للجميع.'
      },
      {
        icon: 'bi bi-gear',
        title: ' النمو الوظيفى',
        content: 'نحن نعمل على إنشاء واجهات وظيفية وبديهية للجميع.'
      },
      {
        icon: 'bi bi-flag',
        title: ' ساعات مرنة',
        content: 'نحن نعمل على إنشاء واجهات وظيفية وبديهية للجميع.'
      }
    ];


    jobs = [
      {
        title: 'Lead Backend Developer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        location: 'San Francisco',
        type: 'Full time',
        salary: '8k-10k'
      },
      {
        title: 'Senior Project Manager',
        description: 'Pellentesque habitant morbi tristique senectus et netus.',
        location: 'New York',
        type: 'Part time',
        salary: '6k-8k'
      },
      {
        title: 'Data Scientist',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'Remote',
        type: 'Full time',
        salary: '9k-11k'
      }
    ];
  scrollTo() {
    this.scroll.scrollToElement(this.scrolledSection?.nativeElement);
  }

}
