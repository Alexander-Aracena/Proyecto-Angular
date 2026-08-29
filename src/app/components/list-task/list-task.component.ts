import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrl: './list-task.component.css'
})
export class ListTaskComponent {
  @Input('listTask') tasks: Task[] = [];
  @Input() tasksUpload: Task[] = [];
  @Output() taskCompleted: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() taskDeleted: EventEmitter<number> = new EventEmitter<number>();

  completeTask(task: Task): void {
    this.taskCompleted.emit(task);
  }

  deleteTask(id: number): void {
    this.taskDeleted.emit(id);
  }
}
