import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from 'src/app/models/photo';
import { PhotosService } from 'src/app/services/photos.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
  photos!:Photo[];
  id!:number;
  page:number =1;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private photosService:PhotosService,
    private activatedRoute:ActivatedRoute,
    private location: Location) { }


  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => this.getPhotoByAlbumId(params.albumId));
  }

  getPhotoByAlbumId(albumId:number){
    this.photosService.getPhotosByAlbumId(albumId).subscribe(photoList => {
      this.photos = photoList
    })
  }
  // backClicked() {
  //   this.location.back();
  // }

}
