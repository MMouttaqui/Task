import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from '../album/album.component';
import { PhotoComponent } from '../photo/photo.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { UserComponent } from './user.component';

const userRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      { path: '', component: UserDisplayComponent },
      {
        path: 'albums',
        loadChildren: () =>
          import('../album/album.module').then((m) => m.AlbumModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
