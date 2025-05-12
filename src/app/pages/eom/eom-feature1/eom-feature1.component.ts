import { Component, Input } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-eom-feature1',
  templateUrl: './eom-feature1.component.html',
  styleUrls: ['./eom-feature1.component.css']
})
export class EomFeature1Component {
  @Input() headerTextKey!: string;
  @Input() paragraphTextKey!: string;
  @Input() cards: { icon: string, captionKey: string }[] = [];
}
