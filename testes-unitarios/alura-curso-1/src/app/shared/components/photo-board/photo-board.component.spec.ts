import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoBoardComponent } from './photo-board.component';
import { DebugElement, SimpleChange, SimpleChanges } from '@angular/core';
import { buildPhotoList } from '../../utils/test/build-photo-list';

describe(PhotoBoardComponent.name, () => {

  let prot = PhotoBoardComponent.prototype;
  let component: PhotoBoardComponent;
  let fixture: ComponentFixture<PhotoBoardComponent>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoBoardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display rows and columns when (@Input photos) has value', () => {
    component.photos = buildPhotoList();
    fixture.detectChanges();
    const changes: SimpleChanges = {
      photos: new SimpleChange([], component.photos, true)
    }
    component.ngOnChanges(changes);
    expect(component.rows.length).withContext('Number of rows: ').toBe(2);
    expect(component.rows[0].length).withContext('Number of columns: ').toBe(4);
  });
});
