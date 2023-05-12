import { Component } from '@angular/core';

export interface Todo {
  id?: string,
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoItems: Todo[] = [];

  addTodoHandler(todo: Todo) {
    this.todoItems.push({
      ...todo,
      id: `${this.todoItems.length + 1}`
    });
  }
}
