import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ServerTransferStateModule } from '@angular/platform-server';

// إنشاء Interceptor للتعامل مع المسارات النسبية
import { Injectable, Inject } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Injectable()
export class ServerStateInterceptor implements HttpInterceptor {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // إذا كنا على الخادم والطلب يستخدم مسارًا نسبيًا
    if (isPlatformServer(this.platformId) && req.url.startsWith('/')) {
      // إضافة المضيف المطلق
      const serverUrl = 'http://localhost:4200'; // قم بتغيير هذا إلى عنوان API الخاص بك
      const absoluteUrl = `${serverUrl}${req.url}`;
      
      // إنشاء نسخة جديدة من الطلب مع URL مطلق
      const serverReq = req.clone({
        url: absoluteUrl
      });
      
      return next.handle(serverReq);
    }
    
    return next.handle(req);
  }
}

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ServerTransferStateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => new TranslateHttpLoader(http, '/assets/i18n/', '.json'),
        deps: [HttpClient]
      }
    })

  ],
  providers: [
    // إضافة Interceptor للتعامل مع المسارات النسبية في الطلبات HTTP
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerStateInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}