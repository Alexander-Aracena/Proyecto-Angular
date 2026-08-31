import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task.interface';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-details-tasks',
  templateUrl: './details-tasks.component.html',
  styleUrl: './details-tasks.component.css'
})
export class DetailsTasksComponent implements OnInit {
  taskId: string | null = null;
  task: Task | undefined;
  constructor(private route: ActivatedRoute, private service: TasksService) {}

  ngOnInit(): void {
    this.taskId = this.route.snapshot.paramMap.get('id');
    if (this.taskId) {
      this.task = this.service.getTaskById(parseInt(this.taskId, 10))
    }
  }
}
