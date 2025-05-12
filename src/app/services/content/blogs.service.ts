import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Category, Subjects , Comment} from 'src/app/models/blogs.model';
import { isPlatformServer } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { useTransferState } from '../../helpers/transfer-state.helper';

@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  private baseUrl = `${environment.apiUrl}`; 

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    private transferState: TransferState


  ) {}

  private handleError(error: any): Observable<never> {
    console.error(' SSR HTTP ERROR', {
      name: error?.name,
      message: error?.message,
      status: error?.status,
      url: error?.url,
      error: error?.error,
      stack: error?.stack
    });
    return throwError(() => new Error(error?.message || 'An error occurred'));
  }
  
  
  // private getHeaders() {
  //   const staticToken = '38|NfVcDYHH4Bu2902Hwb88ELt5nmHJlXmSUGa2pidS858f1bf9';
  
  //   return {
  //     headers: new HttpHeaders({
  //       Authorization: `Bearer ${staticToken}`,

  //     })
  //   };
  // }
  

  // private skipSSR<T>(callback: () => Observable<T>): Observable<T> {
  //   console.log('⛔ Skipping HTTP call in SSR for service:', callback.toString());

  //     return isPlatformServer(this.platformId) ? of([] as any) : callback();
  //   }

// blogs 
// ----------------  Category ------------- 
getCategory(): Observable<Category[]> {

  return useTransferState<Category[]>(
    this.platformId,
    this.transferState,
    'blog-categories',
    () => this.http.get<Category[]>(`${this.baseUrl}categories`
    )
  );
}

getOneCategoryById(id: number): Observable<Category> {

  return useTransferState<Category>(
    this.platformId,
    this.transferState,
    `category-${id}`,
    () => this.http.get<Category>(`${this.baseUrl}categories/${id}`
    )
  );
}
// ----------------  subject ------------- 

getSubjects(): Observable<Subjects[]> {

  return useTransferState<Subjects[]>(
    this.platformId,
    this.transferState,
    'subjects',
    () => this.http.get<Subjects[]>(`${this.baseUrl}subjects`
    )
  );
}

getOneSubjectById(id: number): Observable<Subjects> {


  return useTransferState<Subjects>(
    this.platformId,
    this.transferState,
    `subject-${id}`,
    () => this.http.get<Subjects>(`${this.baseUrl}subjects/${id}`
    )
  );
}

// -------------- comments ----------------
GetCommentsById(id: number): Observable<Comment> {

  return useTransferState<Comment>(
    this.platformId,
    this.transferState,
    `comment-${id}`,
    () => this.http.get<Comment>(`${this.baseUrl}comment/${id}`
    )
  );
}

addComment(id: number, comment: { content: string }): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}comment/${id}`, comment
  );
}


}