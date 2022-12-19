import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ResetComponent } from './reset/reset.component';
import { UploadComponent } from './upload/upload.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'post/:id', component: PostComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'search', component: SearchComponent },
  { path: 'reset', component: ResetComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
