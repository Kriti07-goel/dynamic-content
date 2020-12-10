import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AdHostDirective } from 'src/app/shared/directives/ad-host.directive';
import { AdService } from 'src/app/shared/services/ad.service';
import { AppState } from 'src/app/shared/stores/app.state';
import { loadGroceryList } from 'src/app/shared/stores/grocery-list/grocery-list.actions';
import { loadSuccessStory } from 'src/app/shared/stores/user-stories/user-stories.action';
import { AdItem } from 'src/app/shared/view-models/home-view-model';
import { AdComponent } from './ads/ad.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ads: AdItem[];
  currentAdIndex: any = -1;
  @ViewChild(AdHostDirective, {static: true}) adHost: AdHostDirective;
  interval: any;
  constructor( private adService: AdService, 
               private componentFactoryServiceResolver: ComponentFactoryResolver, 
               private store: Store<AppState>) { }
 

  ngOnInit() {
    this.store.dispatch(loadGroceryList());
    this.store.dispatch(loadSuccessStory());
    this.ads = this.adService.getAds();
    this.loadComponents();
    this.getAds();
  }
  loadComponents() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adToLoad = this.ads[this.currentAdIndex];
    const componentFactory = this.componentFactoryServiceResolver.resolveComponentFactory(adToLoad.component);
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    const containerRef = viewContainerRef.createComponent<AdComponent>(componentFactory);
    containerRef.instance.data = adToLoad.data;

  }
  getAds() {
    this.interval = setInterval(() => {
      this.loadComponents();
    }, 3000);
  }

}
