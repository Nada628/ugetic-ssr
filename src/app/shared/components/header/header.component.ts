import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  
@Input() headerKey: string = '';
@Input() rotatingTextKeys: string[] = [];
@Input() staticTextKey: string = ''; 
@Input() watchButtonKey: string = ''; 
@Input() downloadButtonKey: string = ''; 
@Input() imageUrl: string = '';
@Output() downloadFile = new EventEmitter<void>();  


onDownloadClick() {
  this.downloadFile.emit();  
}
}
