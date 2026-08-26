import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-addTask',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})

export class AddComponent implements OnInit {
  @Output() taskAdded: EventEmitter<Task> = new EventEmitter<Task>();
  tasks: Task[] = [];
  numberTasks!: number;
  form!: FormGroup;

  constructor(private fb:FormBuilder) {}

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
      this.taskAdded.emit(newTask);
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
