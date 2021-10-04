import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/models/album';
import { User } from 'src/app/models/user';
import { AlbumsService } from 'src/app/services/albums.service';
@Component({
  selector: 'app-album-display',
  templateUrl: './album-display.component.html',
  styleUrls: ['./album-display.component.scss']
})
export class AlbumDisplayComponent implements OnInit {

  albums: Album[]=[];
  users: User[]=[];
  id!:number
  page:number =1;
  pageSize = 5;
  pageSizes = [3, 6, 9];

  constructor(
    private albumsService: AlbumsService,
    private activatedRoute:ActivatedRoute
  ) { }



  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => this.getAlbumByUserId(params.userId));

  }

  getAlbumByUserId(userId:number){
    this.albumsService.getAlbumByUserId(userId).subscribe(albumList => {
      this.albums = albumList
    })
  }

  // setUserName() {
  //   if (this.albums && this.users) {
  //     for (const album of this.albums) {
  //       for (const user of this.users) {
  //         if (album.userId === user.id) {
  //           album.title = user.name;
  //         }
  //       }
  //     }
  //   }
  // }



}
