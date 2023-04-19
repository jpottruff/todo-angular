import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    {id: 'todo1', text: 'eat apples'},
    {id: 'todo2', text: 'bake bread'},
    {id: 'todo3', text: 'walk dog'},
  ];  
}
