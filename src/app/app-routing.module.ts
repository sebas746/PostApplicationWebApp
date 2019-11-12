import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post/post-list/post-list.component';
import { LoginComponent } from './post/login/login.component';
import { PostCreateComponent } from './post/post-create/post-create.component';


const routes: Routes = [
  { path: "", component: PostListComponent },
  { path: "*", component: PostListComponent },
  { path: "PostListComponent", component: PostListComponent },
  { path: "login", component: LoginComponent },
  { path: "createPost", component: PostCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
