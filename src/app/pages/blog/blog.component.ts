import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BlogsService } from 'src/app/services/content/blogs.service';
import { Subjects, Comment } from 'src/app/models/blogs.model';
import { ScrollService } from 'src/app/services/scroll.service';
import { ActivatedRoute  } from '@angular/router';
import { error } from 'jquery';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  blogs: Subjects[] = [];
  comment: Comment | null = null;
  searchKeyword: string = '';
  @ViewChild('scrolledSection') scrolledSection!: ElementRef;

  constructor(
    private blogsService: BlogsService,
    private scroll: ScrollService,
    private route: ActivatedRoute

  ){}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchBlogs();

  }

  fetchBlogs(){
    this.blogsService.getSubjects().subscribe({
      next: (data: Subjects[]) => {
        this.blogs = data.map(c => {
          return {
            ...c,
            // Format the created_at field to display only day, month, and year
          };
        });
  
      },
      error: (error) => {
        console.error('Error fetching data:', error);
        
      }
    });
  }


  scrollTo() {
    this.scroll.scrollToElement(this.scrolledSection?.nativeElement);
  }
}
