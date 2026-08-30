import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from '../../models/task.interface';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addTask',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})

export class AddComponent implements OnInit {
  tasks: Task[] = [];
  numberTasks!: number;
  form!: FormGroup;

  constructor(private fb:FormBuilder, private service: TasksService, private router: Router) {}

  ngOnInit(): void {
    this.numberTasks = this.tasks.length;
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    });
  }

  sendTaskTitle(): void {
    if(this.form.valid && this.form.get('title')?.value !== '') {
      const newTask: Task = {
        id: Math.floor(Math.random() * 1000),
        title: this.form.value.title,
        completed: false
      };
      this.service.addTask(newTask);
      this.router.navigate(['/']);
      this.form.reset();
    }
  }

  markTaskCompleted(task: Task): void {
    task.completed = !task.completed;
  }

  delete(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.numberTasks = this.tasks.length;
  }
}
