import { User } from './user.model';
import { Post } from './post.model';

export class Blog {
    constructor(
        public blogId?: number,
        public blogTitle?: string,
        public blogDescription?: string,
        public blogCreationDate?: Date,
        public blogCreatedBy?: User,
        public Posts?: Post[]
    ) {}
}