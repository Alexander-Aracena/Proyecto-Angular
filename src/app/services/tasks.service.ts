import { Injectable } from '@angular/core';
import { Task } from '../models/task.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasks: Task[] = [];
  tasksCompleted: Task[] = [];
  tasksDeleted: Task[] = [];
  taskChanged = new Subject<Task[]>();
  tasksDeletedChanged = new Subject<Task[]>();

  constructor() {
    this.getTasks();
  }

  getTasks(): Task[] {
    this.getFromLocalStorage();
    return this.tasks;
  }

  getTasksCompleted(): Task[] {
    this.getFromLocalStorage();
    this.tasksCompleted = this.tasks.filter(task => task.completed);
    return this.tasksCompleted;
  }

  getTasksDeleted(): Task[] {
    return this.tasksDeleted;
  }

  addTask(task: Task): void {
    this.tasks.push(task);
    this.setLocalStorage();
    this.taskChanged.next(this.tasks.slice());
  }

  editTask(updateTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === updateTask.id);
    if (index !== -1) {
      this.tasks[index] = { ...updateTask };
      this.setLocalStorage();
      this.taskChanged.next(this.tasks.slice());
    }
  }

  deleteTask(id: number): void {
    const taskToDelete = this.tasks.find(task => task.id === id);
    if (taskToDelete) {
      this.tasksDeleted.push(taskToDelete);
      this.tasks = this.tasks.filter(task => task.id !== id);
      this.setLocalStorage();
      this.taskChanged.next(this.tasks.slice());
    }
  }

  returnTaskDeleted(task: Task): void {
    if (!this.tasks.some(t => t.id === task.id)) {
      this.tasks.push(task);
      this.tasksDeleted = this.tasksDeleted.filter(t => t.id !== task.id);
      this.taskChanged.next(this.tasks.slice());
      this.tasksDeletedChanged.next(this.tasksDeleted.slice());
      this.setLocalStorage();
    }
  }

  completeTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = !task.completed;
      this.setLocalStorage();
      this.taskChanged.next(this.tasks.slice());
    }
  }

  getFromLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      const savedTask = localStorage.getItem('tasks');
      if (savedTask) {
        this.tasks = JSON.parse(savedTask);
        this.taskChanged.next(this.tasks.slice());
      }

      const deletedTasks = localStorage.getItem('tasksDeleted');
      if (deletedTasks) {
        this.tasksDeleted = JSON.parse(deletedTasks);
        this.tasksDeletedChanged.next(this.tasksDeleted.slice());
      }
    }
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  setLocalStorage() {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
      localStorage.setItem('tasksDeleted', JSON.stringify(this.tasksDeleted));
    }
  }
}
