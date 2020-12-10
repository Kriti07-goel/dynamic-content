import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroJobAdComponent } from './ads/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './ads/hero-profile/hero-profile.component';
import { AdHostDirective } from 'src/app/shared/directives/ad-host.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GroceryListModule } from 'src/app/shared/widgets/grocery-list/grocery-list.module';
import { SuccessStoriesComponent } from './success-stories/success-stories.component';
import { SuccessStoryModule } from 'src/app/shared/stores/user-stories/user-stories.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent, AdHostDirective, SuccessStoriesComponent],
  imports: [
      RouterModule.forChild(routes),
      GroceryListModule,
      CommonModule,
      SuccessStoryModule,
      FlexLayoutModule
  ],
  exports: [SuccessStoriesComponent],
   entryComponents: [
    HeroProfileComponent,
    HeroJobAdComponent  ]
})
export class HomeModule { }
