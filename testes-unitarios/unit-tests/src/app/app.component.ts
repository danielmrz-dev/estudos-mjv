import { Component, OnInit } from '@angular/core';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  constructor(private readonly todosService: TodosService) {}

  ngOnInit(): void {
    this.todosService.getAllTodos().subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (error) => {
        console.log(error);
      }
    });

    this.todosService.getTodoById(2).subscribe({
      next: (response) => {
        console.log(response);
        
      },
      error: (error) => {
        console.log(error);
      }
    })
  }
}
