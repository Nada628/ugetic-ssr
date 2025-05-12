import { Component } from '@angular/core';
import { ContentService } from 'src/app/services/content/content.service';
import { Social } from 'src/app/models/content.model';

@Component({
  selector: 'app-give-us-call',
  templateUrl: './give-us-call.component.html',
  styleUrls: ['./give-us-call.component.css']
})
export class GiveUsCallComponent {
    supportNumber:number=201070714795
    infoNumber:number=201011115145
    social: Social[] = [];

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
