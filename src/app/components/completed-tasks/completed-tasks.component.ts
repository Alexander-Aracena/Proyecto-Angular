import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrl: './completed-tasks.component.css'
})
export class CompletedTasksComponent {

  tasksCompleted: Task[] = [];

  constructor(private service: TasksService) {}

  ngOnInit(): void {
    this.tasksCompleted = this.service.getTasksCompleted();
  }

}
