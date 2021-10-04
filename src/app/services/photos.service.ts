import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo';

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  private photosUrl: string = 'https://jsonplaceholder.typicode.com/photos';
  constructor(
    private http: HttpClient
  ) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.photosUrl)
  }

  getPhotosByAlbumId(albumId:number){
    return this.http.get<Photo[]>(`${this.photosUrl}?albumId=${albumId}`);
  }
}
