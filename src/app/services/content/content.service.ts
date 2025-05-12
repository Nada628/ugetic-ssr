import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Client, Service, Social , Page, Contact, reviews, FaqResponse} from '../../models/content.model';
import { Subjects } from 'src/app/models/blogs.model';
import { isPlatformServer } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { TransferState } from '@angular/platform-browser';
import { useTransferState } from 'src/app/helpers/transfer-state.helper';


@Injectable({
  providedIn: 'root',
})
export class ContentService {
  private baseUrl = `${environment.apiUrl}`; 

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    private transferState: TransferState
  ) {}

  private handleError(error: any): Observable<never> {
    console.error('🔴 SSR HTTP ERROR', {
      name: error?.name,
      message: error?.message,
      status: error?.status,
      statusText: error?.statusText,
      url: error?.url,
      error: error?.error,
      stack: error?.stack
    });
    return throwError(() => new Error(error?.message || 'An error occurred'));
  }
  
  
  
  // private getHeaders(): { headers: HttpHeaders } {
  //   const staticToken = 'Bearer 38|NfVcDYHH4Bu2902Hwb88ELt5nmHJlXmSUGa2pidS858f1bf9';
  //   const headers = new HttpHeaders()
  //     .set('Authorization', staticToken)
  //     .set('Accept', 'application/json')
      
  //     // .set('Origin', 'https://ugetic.com')
  //     // .set('User-Agent', 'Angular-SSR/Node')
  //     ;

  
  //   return { headers };
  // }
  
  
  
  // private skipSSR<T>(callback: () => Observable<T>): Observable<T> {
  //   console.log('⛔ Skipping HTTP call in SSR for service:', callback.toString());

  //   return isPlatformServer(this.platformId) ? of([] as any) : callback();
  // }


  // ----------------- Clients ----------------- //

  getClients(): Observable<Client[]> {
    console.log('[SSR] Fetching clients...');

    return useTransferState<Client[]>(
      
      this.platformId,
      this.transferState,
      'clients',
      () => this.http.get<Client[]>(`${this.baseUrl}clients`
      )
    );
  }

  getClientById(id: number): Observable<Client> {
 
    return useTransferState<Client>(
      this.platformId,
      this.transferState,
      `client-${id}`,
      () => this.http.get<Client>(`${this.baseUrl}clients/${id}`
      )
    );
  }

  

  // ----------------- Services ----------------- //

 getServices(): Observable<Service[]> {
  

    return useTransferState<Service[]>(
      this.platformId,
      this.transferState,
      'services',
      () => this.http.get<Service[]>(`${this.baseUrl}services`
      )
    );
  }

  getServiceById(id: number): Observable<Service> {


    return useTransferState<Service>(
      this.platformId,
      this.transferState,
      `service-${id}`,
      () => this.http.get<Service>(`${this.baseUrl}services/${id}`
      )
    );
  }

 

    // ----------------- Social-media ----------------- //
    getSocialLinks(): Observable<Social[]> {
      const url = `${this.baseUrl}socialMedia`;

    
      if (isPlatformServer(this.platformId)) {
        
      }
    
      return this.http.get<Social[]>(url).pipe(
        tap(() => {
          if (isPlatformServer(this.platformId)) {
            // console.log('✅ SSR Response OK from:', url);
          }
        }),
        catchError((error) => {
          if (isPlatformServer(this.platformId)) {
            console.error('❌ SSR Request failed:', {
              url,
              error,
            });
          }
          return this.handleError(error);
        })
      );
    }
    
  
    getOneSocialLink(id: number): Observable<Social> {

      return useTransferState<Social>(
        this.platformId,
        this.transferState,
        `socialMedia-${id}`,
        () => this.http.get<Social>(`${this.baseUrl}socialMedia/${id}`
        )
      );
    }
  


// ----------------- Slider ----------------- //

getSlider(): Observable<any[]> {


  return useTransferState<any[]>(
    this.platformId,
    this.transferState,
    'sliders',
    () => this.http.get<any[]>(`${this.baseUrl}sliders`
    )
  );
}



// ----------------- Pages ------------------//
getPages(): Observable<Page[]> {
 

  return useTransferState<Page[]>(
    this.platformId,
    this.transferState,
    'pages',
    () => this.http.get<Page[]>(`${this.baseUrl}pages`
    )
  );
}
getOnePage(id: number): Observable<Page> {


  return useTransferState<Page>(
    this.platformId,
    this.transferState,
    `page-${id}`,
    () => this.http.get<Page>(`${this.baseUrl}pages/${id}`
    )
  );
}

// ------------- contact-us --------------

addContacts(data: FormData): Observable<Contact> {
  return this.http.post<Contact>(`${this.baseUrl}contacts`, data
  );
}

// ----------------- reviews ----------------- //

getReviews(): Observable<reviews[]> {
 

  return useTransferState<reviews[]>(
    this.platformId,
    this.transferState,
    'reviews',
    () => this.http.get<reviews[]>(`${this.baseUrl}reviews`
    )
  );
}

// --------------- search  --------------- //
Search(keyword: string): Observable<Subjects[]> {
 


  return useTransferState<Subjects[]>(
    this.platformId,
    this.transferState,
    `search-${keyword}`,
    () => this.http.get<Subjects[]>(`${this.baseUrl}subjects/search?keyword=${keyword}`
    )
  );
}

// --------------- FAQ  --------------- //

getFAQ(): Observable<any[]> {

  return useTransferState<any[]>(
    this.platformId,
    this.transferState,
    'faq',
    () => this.http.get<any[]>(`${this.baseUrl}question`
    )
  );
}

}
