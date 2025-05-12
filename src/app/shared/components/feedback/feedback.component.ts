import { AfterViewInit, Component, ElementRef, ViewChild , Input} from '@angular/core';
import { reviews } from 'src/app/models/content.model';

declare var bootstrap: any;  

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements AfterViewInit {

  @Input() items: reviews[] = [];
  @Input() carouselId: string = 'carouselExampleControls';
  @ViewChild('carousel', { static: false }) carouselElement!: ElementRef;

  ngAfterViewInit(): void {
    new bootstrap.Carousel(this.carouselElement.nativeElement, {
      interval: false, 
      ride: false
    });
  }
}
