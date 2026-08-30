import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from './models/task.interface';
import { TasksService } from './services/tasks.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  tasksUpload: Task[] = [];
  open: boolean = false;
  private subscription!: Subscription;

  constructor(private service: TasksService, private router: Router) {
    this.subscription = this.service.taskChanged.subscribe(
      task => {
        this.tasks = task;
      }
    );
  }

  ngOnInit(): void {
    this.tasks = this.service.getTasks();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addTask(task: Task): void {
    this.service.addTask(task);
  }

  openTask(): void {
    this.open = true;
    this.router.navigate(['/create']);
  }

  markTaskCompleted(task: Task): void {
    this.service.completeTask(task.id);
  }

  deleteTask(id: number): void {
    this.service.deleteTask(id);
  }
}
