import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private postService: PostService) { }

  get currentUser(): User { return this.postService.currentUser; }

  ngOnInit() {
  }

}
