import 'zone.js/node';
import './src/server-polyfills';

import { APP_BASE_HREF } from '@angular/common';
import { ngExpressEngine } from '@nguniversal/express-engine';
import { CommonEngine } from '@nguniversal/common/engine';
import * as express from 'express';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { AppServerModule } from './src/main.server';

// إضافة هذا الاستيراد
import { REQUEST, RESPONSE } from '@nguniversal/express-engine/tokens';

export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), 'dist/Ugetic-new/browser');
  const commonEngine = new CommonEngine();
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index.html';

  // تكوين محرك Express لاستخدام Angular Universal
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // تخدم الملفات الثابتة من مجلد dist
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // التعامل مع طلبات API إذا كانت موجودة
  // إضافة هذا الجزء لتمرير طلبات API إلى الخادم الخلفي إذا كنت تستخدم واحدًا
  server.use('/api', (req, res, next) => {
    // إعادة توجيه طلبات API إلى الخادم الخلفي إذا لزم الأمر
    // يمكنك استخدام http-proxy-middleware أو طرق أخرى
    next();
  });

  // كل الطلبات الأخرى يتم معالجتها بواسطة Angular Universal
  server.get('*', (req, res, next) => {
    const { protocol, originalUrl, headers } = req;
    const host = headers.host || 'localhost:4200';

    // إنشاء URL مطلق
    const absoluteUrl = `${protocol}://${host}${originalUrl}`;

    commonEngine
      .render({
        bootstrap: AppServerModule,
        documentFilePath: join(distFolder, indexHtml),
        url: absoluteUrl,
        publicPath: distFolder,
        providers: [
          { provide: APP_BASE_HREF, useValue: req.baseUrl },
          // إضافة طلب HTTP واستجابة إلى DI container
          { provide: REQUEST, useValue: req },
          { provide: RESPONSE, useValue: res }
        ]
      })
      .then((html) => res.send(html))
      .catch((err) => {
        console.error('Error occurred:', err);
        next(err);
      });
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4200;
  const port2 =process.env['PORT'] 
  const server = app();
  server.listen(port, () => {

    console.log(process.env)
    
    console.log(`Node Express server listening on http://localhost:${port}, ${port2}` );
  });
}

// تحقق مما إذا كان هذا الملف هو الذي تم تنفيذه مباشرة
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';