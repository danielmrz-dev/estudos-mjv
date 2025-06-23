import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoListComponent } from './photo-list.component';
import { PhotoBoardService } from '../../../shared/services/photo-board.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { buildPhotoList } from '../../../shared/utils/test/build-photo-list';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';


describe('PhotoListComponent', () => {
  let component: PhotoListComponent;
  let fixture: ComponentFixture<PhotoListComponent>;
  let debugEl: DebugElement;
  let service: PhotoBoardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoListComponent],
      providers: [
        PhotoBoardService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    service = TestBed.inject(PhotoBoardService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('(DOM) should display board when data arrives', () => {
    const photos = buildPhotoList();
    spyOn(service, 'getPhotos').and.returnValue(of(photos));
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    expect(board).withContext('Não deve ser nulo: ').not.toBeNull();
    const loader = fixture.nativeElement.querySelector('.spinner');
    expect(loader).withContext('Deve ser nulo: ').toBeNull();
  });

  it('(DOM) should display spinner while waiting for data to arrive', () => {
    spyOn(service, 'getPhotos').and.returnValue(of());
    fixture.detectChanges();
    const board = fixture.nativeElement.querySelector('app-photo-board');
    expect(board).withContext('Deve ser nulo: ').toBeNull();
    const loader = fixture.nativeElement.querySelector('.spinner');
    expect(loader).withContext('Não deve ser nulo: ').not.toBeNull();
  });
  
});
