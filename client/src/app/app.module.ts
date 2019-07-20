// External modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ComposeBoxComponent } from './compose-box/compose-box.component';




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
    ComposeBoxComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
