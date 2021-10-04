import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserRoutingModule } from './user-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { BackButtonComponent } from '../back-button/back-button.component';



@NgModule({
  declarations: [UserComponent, UserDisplayComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserRoutingModule,
    NgxPaginationModule,

  ],
  exports: [UserComponent, UserDisplayComponent],
})
export class UserModule {}
