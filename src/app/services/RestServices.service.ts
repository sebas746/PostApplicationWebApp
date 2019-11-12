import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post.model';
import { PostState } from '../models/postState.model';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RestService {

    constructor(private http: HttpClient) {
        this.getPosts();
        this.getPendingPosts();
    }
    getPosts() {
        let url = environment.GetPosts;
        this.http.get<Post[]>(url)
            .subscribe(response =>
                this.posts = response
            );
    }

    getPendingPosts() {
        let url = environment.GetPendingPosts;
        this.http.get<Post[]>(url)
            .subscribe(response =>
                this.pendingPosts = response
            );
    }

    checkUser(user: User) : Observable<User> {
        let url = environment.CheckUser;
        return this.http.post<User>(url, user);
    }

    createPost(post: Post) {
        let url = environment.CreatePost;
        this.http.post<Post>(url, post)
            .subscribe(response =>
                this.getPosts()
            );
    }

    currentUser: any;
    posts: Post[] = [];
    pendingPosts: Post[] = [];
}