import { TestBed } from '@angular/core/testing';
import { TodosService } from './todos.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { environment } from '../../environments/environment';
import { ITodo } from '../models/todo.interface';

describe('TodosService', () => {
  let service: TodosService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TodosService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(TodosService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpController.verify();
  })

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });

  // it('should return all todos', (done: DoneFn) => {
  //   service.getAllTodos().subscribe((list) => {
  //     expect(list).toBeTruthy();
  //     expect(list.length).toEqual(100);
  //     done();
  //   })
  //   httpController.expectOne(`${environment.apiUrl}/todos`);
  // });

  it('should return one todo', (done: DoneFn) => {
    service.getTodoById(2).subscribe((todo) => {
      expect(todo.id).toEqual(2);
      done();
    })
    httpController.expectOne(`${environment.apiUrl}/todos/2`).flush({
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    });
  });
  
});
