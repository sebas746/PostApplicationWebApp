import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private router: Router) { }

    createAnonymousUser() : User {
        let user = new User(
            9999,
            "Anonymous",
            "",
            "",
            ""
        );

        return user;
    }

    checkLoggedUser() {
        if(this.currentUser.userId == 0) {
            this.router.navigateByUrl("login");
          }
    }

    currentUser: User = new User(0, '', '');
}