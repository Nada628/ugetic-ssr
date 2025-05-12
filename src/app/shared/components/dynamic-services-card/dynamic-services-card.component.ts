import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-services-card',
  templateUrl: './dynamic-services-card.component.html',
  styleUrls: ['./dynamic-services-card.component.css']
})
export class DynamicServicesCardComponent {
  @Input() title: string='';
  @Input() desc1: string='';
  @Input() desc2: string='';

  @Input() card1Title: string = '';
  @Input() card1Desc1: string = '';
  @Input() card1Image: string = '';

  @Input() card2Title: string = '';
  @Input() card2Desc1: string = '';
  @Input() card2Image: string = '';

  @Input() card3Title: string = '';
  @Input() card3Desc1: string = '';
  @Input() card3Image: string = '';
}
