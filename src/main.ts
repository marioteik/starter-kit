import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from '@app/app.module';
import { environment as env } from '@env/environment';
import { hmrBootstrap } from './hmr';

if (env.production) {
  enableProdMode();
}

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule);

if (env.hmr) {
  hmrBootstrap(module, bootstrap);
} else {
  bootstrap().catch((err) => console.error(err));
}
