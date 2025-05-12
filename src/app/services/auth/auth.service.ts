import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = environment.apiUrl;
  private tokenKey = 'authToken';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(this.hasToken());

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  private hasToken(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem(this.tokenKey);
    }
    return false;
  }

  private setSession(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.tokenKey, token);
      this.isAuthenticatedSubject.next(true);
    }
  }

  // private skipSSR<T>(callback: () => Observable<T>): Observable<T> {
  //   console.log('⛔ Skipping HTTP call in SSR for service:', callback.toString());

  //   return isPlatformServer(this.platformId) ? of([] as any) : callback();
  // }

  get isAuthenticated$(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.authUrl}/api/login`;
    const body = { email, password };

    return this.http.post(url, body).pipe(
      tap((response: any) => {
        this.setSession(response.token);
      })
    );
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.tokenKey);
    }
    return null;
  }

  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.tokenKey);
      this.isAuthenticatedSubject.next(false);
      this.router.navigate(['/login']);
    }
  }
}
