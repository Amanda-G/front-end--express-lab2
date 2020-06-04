import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './interfaces/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiURL: string = "http://localhost:3000";
  constructor(private http: HttpClient) { }


  getTodos(): any {
    return this.http.get(`${this.apiURL}/todo-items`)
  }

  addTask(task: Todo): any {
    return this.http.post(`${this.apiURL}/todo-items`, task)
  }

  deleteTask(id: number): any {
    return this.http.delete(`${this.apiURL}/todo-items/${id}`)
  }

  updateTask(id: number, task: Todo): any {
    return this.http.put(`${this.apiURL}/todo-items/${id}`, task)
  }
}
