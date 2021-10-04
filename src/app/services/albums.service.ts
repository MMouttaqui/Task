import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from '../models/album';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private albumsUrl: string = 'https://jsonplaceholder.typicode.com/albums'
  constructor(
    private http: HttpClient
  ) { }

 getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.albumsUrl}?_sort=views&_order=desc`);
  }

  getAlbumByUserId(userId:number){
    return this.http.get<Album[]>(`${this.albumsUrl}?userId=${userId}`);
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.albumsUrl}/${id}`);
  }


  createAlbum(Album: Album): Observable<Album> {
    return this.http.post<Album>(this.albumsUrl, Album, httpOptions);
  }

  updateAlbum(id:number,Album:Album):Observable<Album>{
    return this.http.put<Album>(`${this.albumsUrl}/${id}`,Album);
  }

  updateAlbumUserId(userId:number,Album:Album):Observable<Album>{
    return this.http.put<Album>(`${this.albumsUrl}?userId=${userId}`,Album);
  }

  deleteAlbum(id:number){
    return this.http.delete(`${this.albumsUrl}/${id}`);
  }



}
