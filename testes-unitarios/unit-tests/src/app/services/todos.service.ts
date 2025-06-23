import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  apiUrl: string = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}
  
  getAllTodos(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${this.apiUrl}/todos`).pipe(
      map((response) => {
        return response;
      })
    )
  }

  getTodoById(id: number): Observable<ITodo> {
    return this.http.get<ITodo>(`${this.apiUrl}/todos/${id}`).pipe(
      map((todo) => {
        return todo;
      })
    )
  }
}
