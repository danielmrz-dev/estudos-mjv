import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { buildPhotoList } from './build-photo-list';
import { IPhoto } from '../../interfaces/photo.interface';

@Injectable()
export class PhotoBoardMockService {
    getPhotos(): Observable<IPhoto[]> {
        return of(buildPhotoList());
    }
}
