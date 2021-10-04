import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from './app-routing.module';

// App Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PhotoComponent } from './components/photo/photo.component';
import { HomeComponent } from './components/home/home.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
// Component Module
import { UserModule } from './components/user/user.module';
import { AlbumModule} from './components/album/album.module';

// Services
import { AlbumsService } from './services/albums.service';
import { PhotosService } from './services/photos.service';
import { UsersService } from './services/users.service';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    UserModule,
    NgxPaginationModule,
    AlbumModule,
    FilterPipeModule
  ],
  providers: [UsersService, AlbumsService, PhotosService],
  bootstrap: [AppComponent],
  exports:[BackButtonComponent]
})
export class AppModule { }
