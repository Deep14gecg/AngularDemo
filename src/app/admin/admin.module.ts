import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes,CanActivate } from '@angular/router';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserService } from './adminShared/user.service';
import { BlogAdminService } from './adminShared/blog-admin.service';
import { BlogAdminComponent } from './blog-admin/blog-admin.component';
import { BlogAddComponent } from './blog-add/blog-add.component';
import { TruncPipe } from './adminShared/trunc.pipe';

const AdminRoutes: Routes =[
  {
    path : 'admin',
    component : AdminComponentComponent ,
    children : [
      { path : 'blog-admin',component : BlogAdminComponent , canActivate : [UserService] },
      { path : 'login', component : LoginComponent },
      { path : 'signup', component : SignUpComponent},
      { path : '' , component : AdminMenuComponent, canActivate : [UserService] }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AdminRoutes)
  ],
  declarations: [AdminComponentComponent, AdminMenuComponent, LoginComponent, SignUpComponent, BlogAdminComponent, BlogAddComponent, TruncPipe],
  exports : [
    RouterModule,TruncPipe
  ],
  providers : [UserService,BlogAdminService]

})
export class AdminModule { }
