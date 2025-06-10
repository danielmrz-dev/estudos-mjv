import { TestBed } from '@angular/core/testing';

import { PhotoBoardService } from './photo-board.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

const mockData = {
  api: 'http://localhost:3000/photos',
  data: [
    {
      id: 1,
      description: "exemplo 1",
      src: ''
    },
    {
      id: 2,
      description: "exemplo 2",
      src: ''
    }
  ]
}

describe(PhotoBoardService.name, () => {
  let service: PhotoBoardService;
  let httpController: HttpTestingController;
  let prot = PhotoBoardService.prototype;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    }).compileComponents();
    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpController.verify())

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`${prot.getPhotos.name}() should return list of photos with description in uppercase`, (done: DoneFn) => {
    service.getPhotos().subscribe((photos) => {
      expect(photos[0].description).toBe("EXEMPLO 1");
      expect(photos[1].description).toBe("EXEMPLO 2");
      done();
    });
    const req = httpController.expectOne(mockData.api);
    req.flush(mockData.data);
  });
  
});
