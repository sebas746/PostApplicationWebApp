import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { RestService } from 'src/app/services/RestServices.service';
import { PostService } from 'src/app/services/post.service';
import { User } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private restService: RestService,
    private router: Router,
    private postService: PostService) { }

  get posts(): Post[] { return this.restService.posts; }
  get currentUser(): User { return this.postService.currentUser; }

  ngOnInit() {
    this.postService.checkLoggedUser();
  }

  editPost(post: Post) {
    console.log(post);
  }

  deletePost(post: Post) {
    this.restService.deletePost(post.postId);
  }

  createPost() {
    this.router.navigateByUrl("createPost");
  }
}
