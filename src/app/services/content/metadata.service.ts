import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of , tap} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { SEO } from 'src/app/models/metadata.model';
import { isPlatformServer } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { useTransferState } from '../../helpers/transfer-state.helper';



@Injectable({
  providedIn: 'root',
})
export class MetaDataService {
  private baseUrl = `${environment.apiUrl}`; 
  private SEO_KEY = makeStateKey<SEO[]>('seo-data');


  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object,
    private transferState: TransferState,


  ) {}

// --------------------  general -----------------------

private handleError(error: any): Observable<never> {
  console.error('🔴 SSR HTTP ERROR', {
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

  //   return isPlatformServer(this.platformId) ? of([] as any) : callback();
  // }

//   --------------------- SEO ----------------------
getSEO(): Observable<SEO[]> {
  // console.log('[SSR] get seo ...');


  return useTransferState<SEO[]>(
    this.platformId,
    this.transferState,
    'seo-data',
    () => this.http.get<SEO[]>(`${this.baseUrl}seos`
    )
  );

}

}