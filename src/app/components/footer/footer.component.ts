import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';
import { Social } from 'src/app/models/content.model';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  social: Social[] = [];
  cairoNumber: string = "+201011115145";
  KFSNumber: string = "+201011115145";
  

  constructor(
    private contentService: ContentService,
  ) {}

  ngOnInit(): void {
    this.fetchSocialLinks();
  }

  fetchSocialLinks() {
    this.contentService.getSocialLinks().subscribe({
      next: (data: Social[]) => {
        this.social = data;
      
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        
      }
    });
  }
}
