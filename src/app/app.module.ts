import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponentComponent } from './post-list-component/post-list-component.component';
import { PostListItemComponentComponent } from './post-list-item-component/post-list-item-component.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import { SinglePostComponentComponent } from './singlepostcomponent/singlepostcomponent.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PostService } from './services/post.service';
import { AuthGuard } from './auth.guard/auth.guard';
import { RegisterComponent } from './register/register.component';
import { JwtInterceptor } from './jwt.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { fakeBackendProvider } from './fake-backend.interceptor';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './services/contact.service';
import {NewUserComponent} from './new-user/new-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: 'posts/:id', component: SinglePostComponentComponent },
  { path: 'posts', component: PostListComponentComponent },
  { path: 'new', canActivate: [AuthGuard], component: NewPostComponentComponent },
  { path: 'login', component: AuthComponent },
  { path: 'home', component: HomeComponent },
  { path: 'new-user', component: NewUserComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found' }
]

@NgModule({
  declarations: [
    AlertComponent,
    AppComponent,
    PostListComponentComponent,
    PostListItemComponentComponent,
    AuthComponent,
    NewPostComponentComponent,
    FourOhFourComponent,
    RegisterComponent,
    AlertComponent,
    HomeComponent,
    ContactComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    PostService,
    ContactService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true },
    fakeBackendProvider
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
