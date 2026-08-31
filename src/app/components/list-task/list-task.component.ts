import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Task } from '../../models/task.interface';
import { TasksService } from '../../services/tasks.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {
  tasks: Task[] = [];
  tasksUpload: Task[] = [];
  view: boolean = true;
  private subscription!: Subscription;

  constructor(private service: TasksService, private router: Router) {
    this.tasks = this.service.getTasks();
    this.subscription = this.service.taskChanged.subscribe(
      task => {
        this.tasks = task;
      }
    );
    this.router.events.subscribe(() => {
      if (this.router.url !== '/tasks') {
        this.view = false;
      } else {
        this.view = true;
      }
    });
  }

  completeTask(task: Task): void {
    this.service.completeTask(task.id);
  }

  editTask(id: number): void {
    this.router.navigate([`/edit/${id}`]);
  }

  deleteTask(id: number): void {
    this.service.deleteTask(id);
  }

  detailsTask(id: number): void {
    this.router.navigate([`tasks/details/${id}`]);
  }
}
