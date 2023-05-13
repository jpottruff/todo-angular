import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../app.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() items: Todo[] = [];  
  @Output() onDelete = new EventEmitter<Todo>()

  clickHandler(item: Todo) {
    this.onDelete.emit(item);
  }
}
