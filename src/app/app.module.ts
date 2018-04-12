import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { UserService } from './shared/user.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';
import { AuthGuard } from './auth/auth.guard';
import { User } from './shared/user.model';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [UserService, Http, AuthGuard, User],
  bootstrap: [AppComponent]
})
export class AppModule { }
