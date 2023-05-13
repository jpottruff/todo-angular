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
      id: `${Date.now()}`
    });
  }

  deleteTodoHandler(deletedItem: Todo) {
    this.todoItems = this.todoItems.filter(item => item.id !== deletedItem.id)
  }
}
