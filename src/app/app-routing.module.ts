import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from "./pages/user/user.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { PostComponent } from "./pages/post/post.component";
import { CommentComponent } from "./pages/comment/comment.component";
import { TrendingComponent } from "./pages/trending/trending.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'profile/:id',
    component: ProfileComponent
  },
  {
    path:'post',
    component: PostComponent
  },
  {
    path: 'post/user/:id',
    component: PostComponent
  },
  {
    path: 'post/comment/:id',
    component: CommentComponent
  },
  {
    path: 'trending',
    component: TrendingComponent
  },
  {
    path: 'post/tag/:tag',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
