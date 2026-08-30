import { Component } from '@angular/core';
import { Task } from '../../models/task.interface';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TasksService } from '../../services/tasks.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrl: './edit-task.component.css',
})
export class EditTaskComponent {
  tasks: Task[] = [];
  numberTasks!: number;
  form!: FormGroup;
  taskId: string | null = null;
  task: Task | undefined;

  constructor(
    private fb: FormBuilder,
    private service: TasksService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.numberTasks = this.tasks.length;
    this.form = this.fb.group({
      title: new FormControl('', [
        Validators.required
      ]),
    });

    this.taskId = this.route.snapshot.paramMap.get('id');
    if (this.taskId) {
      this.task = this.service.getTaskById(parseInt(this.taskId, 10));
      if (this.task) {
        this.form.patchValue({
          title: this.task.title
        });
      }
    }
  }

  sendTaskTitle(): void {
    if (this.form.valid && this.taskId && this.form.get('title')?.value !== '') {
      const updatedTask: Task = {
        id: parseInt(this.taskId, 10),
        title: this.form.value.title,
        completed: this.task ? this.task.completed : false,
      };
      this.service.editTask(updatedTask);
      this.router.navigate(['/tasks']);
      this.form.reset();
    }
  }

  markTaskCompleted(task: Task): void {
    task.completed = !task.completed;
  }

  delete(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.numberTasks = this.tasks.length;
  }
}
