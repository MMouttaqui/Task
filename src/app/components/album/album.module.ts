import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumComponent } from './album.component';
import { CreateEditAlbumComponent } from './create-edit-album/create-edit-album.component';
import { AlbumDisplayComponent } from './album-display/album-display.component';
import { AlbumRoutingModule } from './album-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { PhotoComponent } from '../photo/photo.component';
import { BackButtonComponent } from '../back-button/back-button.component';


@NgModule({
  declarations: [
    AlbumComponent,
    CreateEditAlbumComponent,
    AlbumDisplayComponent,
    PhotoComponent,
    BackButtonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlbumRoutingModule,
    NgxPaginationModule,

  ],
  exports: [
    AlbumComponent,
    CreateEditAlbumComponent,
    AlbumDisplayComponent,
    PhotoComponent,
    BackButtonComponent
  ],
})
export class AlbumModule {}
