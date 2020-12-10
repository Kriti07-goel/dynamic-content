import { GroceryItem } from './grocery-list/grocery-list.state';
import { UserStories } from './user-stories/user-stories.state';

export class AppState {
    groceries: GroceryItem[];
    stories: UserStories[];
}
