import { PostState } from './postState.model';
import { User } from './user.model';

export class Post {
    constructor(
        public postId?: number,
        public postTitle?: string,
        public postText?: string,
        public postPublicationDate?: Date,
        public postState?: PostState,
        public postUser?: User
    ) {}
}