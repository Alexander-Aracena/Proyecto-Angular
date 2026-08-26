import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Task } from '../../models/task.interface';

@Component({
  selector: 'app-addTask',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})

export class AddComponent implements OnInit {
  isActive: boolean = false;
  titleTask: string = '';
  activeButton: boolean = true;
  taskActive!: boolean;
  tasks: Task[] = [
    {
      id: 1,
      title: 'Tarea 1',
      completed: false
    },
    {
      id: 2,
      title: 'Tarea 2',
      completed: false
    },
    {
      id: 3,
      title: 'Tarea 3',
      completed: false
    },
    {
      id: 4,
      title: 'Tarea 4',
      completed: false
    },
    {
      id: 5,
      title: 'Tarea 5',
      completed: false
    },
    {
      id: 6,
      title: 'Tarea 6',
      completed: false
    }
  ];
  numberTasks: number = this.tasks.length;

  constructor(private fb:FormBuilder) {}

  form!: FormGroup;

  ngOnInit(): void {
    this.form = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    });
  }

  sendTaskTitle(): void {
    if(this.form.valid && this.form.get('title')?.value !== '') {
      this.taskActive = false;
      console.log(this.form.value.title);
    } else {
      this.taskActive = true;
    }
  }

  sendData(form: NgForm) {
    if (form.valid) {
      console.log(this.titleTask);
    }
  }

  sendTask() {
    const sizeTitleTask = this.titleTask.split('');
    if (sizeTitleTask.length > 0) {
      this.activeButton = false;
    } else {
      this.activeButton = true;
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
