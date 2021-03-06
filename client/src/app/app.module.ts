// External modules 👌
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

// Our own stuff ❤
import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PhotoCardComponent } from './photo-card/photo-card.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { PhotoService } from './services/photo.service';
import { SearchService } from './services/search.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ComposeBoxComponent } from './compose-box/compose-box.component';
import { FollowModalComponent } from './follow-modal/follow-modal.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CatProfileComponent } from './cat-profile/cat-profile.component';
import { CatPageComponent } from './cat-page/cat-page.component';
import { AddCatModalComponent } from './add-cat-modal/add-cat-modal.component';
import { SearchComponent } from './search/search.component';
import { CatService } from './services/cat.service';
import { UserService } from './services/user.service';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    PhotoCardComponent,
    LeftPanelComponent,
    RightPanelComponent,
    LoginComponent,
    UserProfileComponent,
    ComposeBoxComponent,
    FollowModalComponent,
    EditProfileComponent,
    CatProfileComponent,
    CatPageComponent,
    AddCatModalComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    FlashMessagesModule.forRoot()
  ],
  providers: [
    LoginService,
    PhotoService,
    CatService,
    UserService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
