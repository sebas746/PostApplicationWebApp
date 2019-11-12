import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/RestServices.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  formulary: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private restService: RestService, private postService: PostService) { }

  get form() { return this.formulary.controls; }
  get currentUser(): User { return this.postService.currentUser; }

  ngOnInit() {
    this.postService.checkLoggedUser();
    this.createForm();
  }

  createForm() {
    this.formulary = this.formBuilder.group({
      postTitle: ['', Validators.required],
      postText: ['', Validators.required]
    });
  }

  submit() {
    this.isSubmitted = true;
    
    if (this.form.invalid) {
      return;
    }

    let post = new Post(0,
      this.formulary.get("postTitle").value,
      this.formulary.get("postText").value,
      null,
      null,
      this.currentUser
      );
    
    this.restService.createPost(post);
   
  }
}
