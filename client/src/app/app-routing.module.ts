import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CatPageComponent } from './cat-page/cat-page.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'following', component: HomePageComponent },
  { path: 'search', component: SearchComponent },
  { path: 'liked', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/edit', component: EditProfileComponent },
  { path: 'user/:id', component: UserProfileComponent },
  { path: 'cat/:id', component: CatPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
