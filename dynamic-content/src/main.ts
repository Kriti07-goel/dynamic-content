import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { API_BASE_URL } from './app/shared/view-models/config/api.config';
import { AppSettings } from './app/shared/view-models/view-models';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

window
  .fetch('assets/appsettings.json')
  .then((res) => res.json())
  .then((resp: AppSettings) => {
    platformBrowserDynamic([
      { provide: AppSettings, useValue: resp },
      { provide: API_BASE_URL, useValue: resp.api.baseApiUri },
    ])
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  });

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
