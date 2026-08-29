import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from './models/task.interface';
import { TasksService } from './services/tasks.service';
import { ApiService } from './services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  tasksUpload: Task[] = [];
  private subscription!: Subscription;

  constructor(private service: TasksService, private serviceAPI: ApiService) {
    this.subscription = this.service.taskChanged.subscribe(
      task => {
        this.tasks = task;
      }
    );
  }

  ngOnInit(): void {
    this.tasks = this.service.getTasks();
    this.serviceAPI.loadTask().subscribe(
      data => {
        if (Array.isArray(data)) {
          this.tasksUpload = data;
        }
      },
      error => {
        console.error('Error al cargar tarea desde la API', error);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addTask(task: Task): void {
    //this.tasks.push(task);
    this.service.addTask(task);
  }

  markTaskCompleted(task: Task): void {
    //task.completed = !task.completed;
    this.service.completeTask(task.id);
  }

  deleteTask(id: number): void {
    //this.tasks = this.tasks.filter(task => task.id !== id);
    this.service.deleteTask(id);
  }
}
