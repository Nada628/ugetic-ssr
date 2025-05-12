import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-call-to-action',
  templateUrl: './home-call-to-action.component.html',
  styleUrls: ['./home-call-to-action.component.css']
})
export class HomeCallToActionComponent {
   @Input() title: string='';
   @Input() button: string=''


}
