import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../todo.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  constructor(private service: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.service.getTodos().subscribe(response => {
      this.todos = response;
      console.log(this.todos)
    })
  }

  addTask(form: NgForm): void {
    let todo = form.value;
    todo.completed = false
    console.log(todo);
    this.service.addTask(todo).subscribe(() => {
      this.getTodos();
      form.reset();
    });
  }

  deleteTask(id: number): void {
    this.service.deleteTask(id).subscribe(() => {
      this.getTodos();
    })
  }

  updateTask(task: Todo): void {
    task.completed = true;
    this.service.updateTask(task.id, task).subscribe(() => {
      this.getTodos();
    })
  }

}
