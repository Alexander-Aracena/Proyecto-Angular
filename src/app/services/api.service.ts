import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  APIurl = 'https://jsonplaceholder.typicode.com/todos';

  loadTask(): Observable<Task> {
    return this.http.get<Task>(this.APIurl);
  }
}
