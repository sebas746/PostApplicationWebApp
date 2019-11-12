import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';
import { User } from 'src/app/models/user.model';
import { RestService } from 'src/app/services/RestServices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulary: FormGroup;
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private restService: RestService,
    private postService: PostService
  ) { }

  ngOnInit() {
    this.createForm();
  }

  get form() { return this.formulary.controls; }
  get currentUser(): User { return this.postService.currentUser; }

  createForm() {
    this.formulary = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      anonymousCheck: [false]
    });
  }

  checkValidUser(userResponse: User) {
    if(userResponse.userId > 0) {
      this.postService.currentUser = userResponse;
      this.router.navigateByUrl("/");
    }
  }

  submit() {
    this.isSubmitted = true;    

    if (this.formulary.get('anonymousCheck').value) {
      this.postService.currentUser = this.postService.createAnonymousUser();
      this.router.navigateByUrl("/");
    }

    if (this.form.invalid) {
      return;
    }

    let user = new User(
      null,
      this.formulary.get("username").value,
      this.formulary.get('password').value,
    );

    this.restService.checkUser(user).subscribe(userResponse => {
      this.checkValidUser(userResponse);
    }, _ => {
      
    });
      
  }
}
