// src/server-polyfills.ts - النسخة المبسطة
global['XMLHttpRequest'] = require('xhr2');

// لا نحاول تعريف navigator أو window أو document