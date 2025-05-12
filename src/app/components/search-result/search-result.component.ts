import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from 'src/app/services/content/content.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  searchResults: any[] = [];
  searchTerm: string = '';

  constructor(
    private route: ActivatedRoute,
    private contentService: ContentService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'] || '';
      if (this.searchTerm) {
        this.search();
      }
    });
  }

  search() {
    this.contentService.Search(this.searchTerm).subscribe({
      next: (data) => {
        this.searchResults = data;
      },
      error: (err) => console.error('Error fetching search results:', err)
    });
  }

}
