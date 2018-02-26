import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminModule } from './admin/admin.module';
import { UserService } from './admin/adminShared/user.service';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    HomeComponent,
    NavbarComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    RouterModule.forRoot([
      {path : 'post/:id' , component : BlogDetailComponent},
      { path: '' , component : HomeComponent },
      { path : '**' , component : ErrorComponent }
    ])
  ],
  exports : [
    RouterModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
