import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent} from './album.component';
import {CreateEditAlbumComponent } from './create-edit-album/create-edit-album.component';

import {AlbumDisplayComponent } from './album-display/album-display.component';
import { PhotoComponent } from '../photo/photo.component';

const albumRoutes: Routes = [
  {path: '', component: AlbumComponent,
  children:[
    {path:'',component: AlbumDisplayComponent},
    {path:'add-album',component:CreateEditAlbumComponent},
    {path:'edit-album',component:CreateEditAlbumComponent},
    {path:'photos',component:PhotoComponent}

  ]},

]

@NgModule({
  imports: [RouterModule.forChild(albumRoutes)],
  exports: [RouterModule]
})
export class AlbumRoutingModule { }
