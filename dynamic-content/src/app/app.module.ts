import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Configuration } from 'msal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppSettings } from './shared/view-models/view-models';
import { MsalAngularConfiguration } from '@azure/msal-angular';
import { MsalModule } from '@azure/msal-angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MsalInterceptor } from '@azure/msal-angular';
import { MSAL_CONFIG, MSAL_CONFIG_ANGULAR } from '@azure/msal-angular';
import { MsalService } from '@azure/msal-angular';
import { BroadcastService } from '@azure/msal-angular';
import { AdHostDirective } from './shared/directives/ad-host.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GeneralModule } from './shared/stores/general/general.module';
import { GroceryListModule } from './shared/stores/grocery-list/grocery-list.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccessStoryModule } from './shared/stores/user-stories/user-stories.module';
import { CommonModule } from '@angular/common';
// export function MSALConfigFactory(settings: AppSettings): Configuration {
//   const redirectUri = settings.auth.redirectUri;
//   const postLogoutRedirectUri = settings.auth.postLogoutRedirectUri;

//   return {
//     auth: {
//       clientId: settings.auth.clientId,
//       authority: settings.auth.loginAuthority,
//       validateAuthority: false,
//       redirectUri: `${redirectUri || window.location.origin}`,
//       postLogoutRedirectUri: `${postLogoutRedirectUri || window.location.origin}`,
//       navigateToLoginRequestUrl: false
//     },
//     cache: {
//       cacheLocation: 'localStorage',
//       storeAuthStateInCookie: false, // set to true for IE 11
//     },
//   };
// }

// export function MSALAngularConfigFactory(settings: AppSettings): MsalAngularConfiguration {
//   const protectedResourceMap: [string, string[]][] = [
//     ['https://graph.microsoft.com/v1.0/me', ['user.read']],
//     [settings.api.baseApiUri, [settings.auth.clientId]]
//   ];

//   return {
//     popUp: false,
//     consentScopes: settings.auth.consentScopes,
//     unprotectedResources: ['appsettings.json'],
//     protectedResourceMap,
//     extraQueryParameters: {},
//   };
// }
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    GeneralModule,
    GroceryListModule,
    SuccessStoryModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // this.msalService.handleRedirectCallback((authError, response) => {
    //   if (authError) {
    //     console.error(authError);
    //   }
    // });
    // this.broadcastService.subscribe('msal:loginFailure', (payload) => {
    //   console.error('msal:loginFailure');
    //   console.error(payload);
    //   //this.msalService.loginRedirect();
    // });
    // this.broadcastService.subscribe('msal:acquireTokenFailure', (payload) => {
    //   console.error('msal:acquireTokenFailure');
    //   console.error(payload);
    //   //this.msalService.loginRedirect();
    // });
    // this.broadcastService.subscribe('msal:ssoFailure', (payload) => {
    //   console.error('msal:ssoFailure');
    //   console.error(payload);
    // });
    // this.broadcastService.subscribe('msal:loginSuccess', (payload) => {});
    // this.broadcastService.subscribe('msal:acquireTokenSuccess', (payload) => {});
    // this.broadcastService.subscribe('msal:ssoSuccess', (payload) => {});
  }
 }
