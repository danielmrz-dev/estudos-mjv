import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpErrorResponse, provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { IPost } from '../interfaces/post.interface';
import { postListMock } from '../shared/mocks/posts.mock';

describe('ApiService', () => {
  let service: ApiService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        ApiService
      ],
    });
    service = TestBed.inject(ApiService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a list of posts', () => {
    let posts: IPost[] | undefined;
    service.getPosts().subscribe((response) => {
      posts = response;
    });
    const req = httpController.expectOne('https://jsonplaceholder.typicode.com/posts');
    req.flush(postListMock);
    expect(posts).toEqual(postListMock);
  });

  it('should create a post', () => {
    let posts: IPost[] | undefined;
    service.createPost(postListMock[2]).subscribe((response) => {
      posts = [response];
    });
    const req = httpController.expectOne('https://jsonplaceholder.typicode.com/posts');
    req.flush(postListMock[2]);
    expect(posts).toEqual([postListMock[2]]);
  });

  it('should pass the correct body', () => {
    let posts: IPost[] | undefined;
    service.createPost(postListMock[2]).subscribe((response) => {
      posts = [response];
    });
    const req = httpController.expectOne('https://jsonplaceholder.typicode.com/posts');
    req.flush(postListMock[2]);
    expect(posts).toEqual([postListMock[2]]);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ post: postListMock[2] });
  });

  it('should throw an error if the request fails', () => {
    let errorResponse: HttpErrorResponse | undefined;
    service.createPost(postListMock[2]).subscribe({
      next: () => {
        fail('Success should not be called');
      },
      error: (error) => {
        errorResponse = error
      }
    });
    const req = httpController.expectOne('https://jsonplaceholder.typicode.com/posts');
    req.flush('Erro', {
      status: 422,
      statusText: 'Unprocessible entity'
    });
    if (!errorResponse) {
      throw new Error('Error needs to be defined')
    }
    expect(errorResponse.status).toBe(422);
    expect(errorResponse.statusText).toBe('Unprocessible entity');

  });
  
  
});
