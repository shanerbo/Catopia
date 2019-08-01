import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CatPageComponent } from './cat-page/cat-page.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'following', component: HomePageComponent },
  { path: 'liked', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/edit', component: EditProfileComponent },
  { path: 'user/:id', component: UserProfileComponent },
  { path: 'cat', component: CatPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
