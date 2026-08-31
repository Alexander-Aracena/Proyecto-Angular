import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from '../../models/task.interface';
import { Subscription } from 'rxjs';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-deleted-tasks',
  templateUrl: './deleted-tasks.component.html',
  styleUrl: './deleted-tasks.component.css'
})
export class DeletedTasksComponent implements OnInit, OnDestroy {
  tasksDeleted: Task[] = [];
  private taskDeletedSub!: Subscription;

  constructor(private service: TasksService) {}

  ngOnInit(): void {
    this.tasksDeleted = this.service.getTasksDeleted();
    this.taskDeletedSub = this.service.tasksDeletedChanged.subscribe((taskDeleted: Task[]) => {
      this.tasksDeleted = taskDeleted;
    });
  }

  ngOnDestroy(): void {
    this.taskDeletedSub.unsubscribe();
  }

  returnTask(task: Task): void {
    this.service.returnTaskDeleted(task);
  }
}
