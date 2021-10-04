import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PhotoComponent } from './components/photo/photo.component';

const routes: Routes = [
  { path: '', redirectTo:'/users', pathMatch: 'full' },
  // {
  //   path: 'posts',
  //   loadChildren: () =>
  //     import('./components/post/post.module').then((m) => m.PostModule),
  // },
  {
    path: 'users',
    loadChildren: () =>
      import('./components/user/user.module').then((m) => m.UserModule),
  },
  { path: 'photos', component: PhotoComponent },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
