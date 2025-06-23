import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { IPhoto } from '../interfaces/photo.interface';

@Injectable({
  providedIn: 'root'
})
export class PhotoBoardService {

  constructor(private readonly http: HttpClient) { }

  getPhotos(): Observable<IPhoto[]> {
    return this.http.get<IPhoto[]>('http://localhost:3000/photos').pipe(
      map(photos => {
        return photos.map(photo => {
          return { ...photo, description: photo.description.toUpperCase() }
        })
      })
    ).pipe(tap(photos => console.log(photos)));
  }
}
