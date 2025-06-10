import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { PhotoBoardService } from '../../../shared/services/photo-board.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { buildPhotoList } from '../../../shared/utils/test/build-photo-list';
import { Observable, of } from 'rxjs';
import { DebugElement } from '@angular/core';
import { IPhoto } from '../../../shared/interfaces/photo.interface';
import { PhotoBoardMockService } from '../../../shared/utils/test/photo-board-mock.service';


describe('PhotoListComponent Mock Provider', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhotoListComponent
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        // { 
        //   provide: PhotoBoardService, 
        //   useValue: { 
        //     getPhotos(): Observable<IPhoto[]> {
        //       return of(buildPhotoList());
        //     }
        //   }
        // },
        { 
          provide: PhotoBoardService, 
          useClass: PhotoBoardMockService
        },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(DOM) should display board when data arrives', () => {
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    expect(board).withContext('Não deve ser nulo: ').not.toBeNull();
    const loader = fixture.nativeElement.querySelector('.spinner');
    expect(loader).withContext('Deve ser nulo: ').toBeNull();
  });
  
});
