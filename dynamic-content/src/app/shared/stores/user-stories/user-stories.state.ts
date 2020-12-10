import { EntityState } from '@ngrx/entity';

export class UserStories {
    id: number;
    name: string;
    image: string;
}

export interface UserStoryState extends EntityState<UserStories> {
}