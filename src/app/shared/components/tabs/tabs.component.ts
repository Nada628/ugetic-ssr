import { Component, Input , OnInit} from '@angular/core';

interface Tab {
  id: number;
  titleKey: string;
  descKey: string;
  imageUrl: string;
}

interface tabMetadata {
  header: string;
  paragraph: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  @Input() tabs: Tab[] = []; 
  @Input () tabsMetadata: tabMetadata[] = [];
  @Input() parentComponent: string = '';
  
  selectedTab: number = 1;

  selectTab(tabId: number) {
    this.selectedTab = tabId;
  }


  
}
