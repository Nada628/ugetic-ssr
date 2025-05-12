import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogsService } from '../../services/content/blogs.service';
import { Subjects , Comment} from 'src/app/models/blogs.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit{
  blog: Partial<Subjects> ={};
  blogs: Subjects[] = [];

  comments: Comment[] = []; 
  commentForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  id:number = 0;
  

  constructor(
    private blogsService: BlogsService,
    private route: ActivatedRoute,
    private fb: FormBuilder

  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number(params['id']); 
      this.loadBlog(this.id); 
      this.fetchComments(this.id); 
    });
  
    this.fetchBlogs();
  
    this.commentForm = this.fb.group({
      content: ['', [Validators.required]]  
    });
  }
  

  loadBlog(id: number): void {
    this.blogsService.getOneSubjectById(id).subscribe({
      next: (data) => {
        this.blog = data;
      },
      error: (err) => {
        console.error('Error loading blog:', err);
      },
    });
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

  fetchComments(id: number): void {
    this.blogsService.GetCommentsById(id).subscribe(
      (response: any) => {
        if (response.success) {
          this.comments = response.data;
        }
      },
      (error) => {
        console.error('Error fetching comments:', error);
      }
    );

  }

   addComment(id: number): void {
    if (this.commentForm.invalid) {
      this.errorMessage = 'من فضلك ادخل التعليق';
      return;
    }

    const commentContent = this.commentForm.value.content;

    this.blogsService.addComment(this.id, { content: commentContent }).subscribe(
      (response) => {
        if (response.success) {
          this.successMessage = 'تم إضافة التعليق بنجاح';
          this.fetchComments(this.id); 
          this.commentForm.reset(); 
        } else {
          this.errorMessage = 'خطأ في إضافة التعليق';
        }
      },
      (error) => {
        console.error('Error adding comment:', error);
      }
    );
  }
  

}
