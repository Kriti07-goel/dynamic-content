import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { posix } from 'path';
import { AppState } from 'src/app/shared/stores/app.state';
import { loadSuccessStory } from 'src/app/shared/stores/user-stories/user-stories.action';
import { selectStories, selectStoriesCount } from 'src/app/shared/stores/user-stories/user-stories.selector';

@Component({
  selector: 'success-stories',
  templateUrl: './success-stories.component.html',
  styleUrls: ['./success-stories.component.scss']
})
export class SuccessStoriesComponent implements OnInit, AfterViewInit{
  stories$: any;
  count$: any;
  stories: any;

  constructor(private store: Store<AppState>) { }
  
  ngOnInit() {
    
   
    this.stories$ = this.store.select(selectStories);
    this.count$ = this.store.select(selectStoriesCount);

  }
  ngAfterViewInit() {
    this.stories$.subscribe(t => {
      if(t.length) {
        this.stories = t;
        console.log(this.stories);
      }
      
    })


  }

}
