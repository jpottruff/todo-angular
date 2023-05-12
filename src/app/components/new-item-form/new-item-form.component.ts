import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../../app.component';

@Component({
  selector: 'app-new-item-form',
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.css']
})
export class NewItemFormComponent {
  @Output() onAddTodo = new EventEmitter<Todo>();

  onSubmit(form: NgForm) {
    const newTodo = {
      id: undefined,  // * This really isn't necessary in angular vs. react world
      text: form.value.newItemText
    }
    this.onAddTodo.emit(newTodo)
    form.resetForm();
  }
}
