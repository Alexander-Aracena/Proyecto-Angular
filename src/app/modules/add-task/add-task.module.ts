import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTaskRoutingModule } from './add-task-routing.module';
import { AddComponent } from './addTask/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddComponent
  ],
  imports: [
    CommonModule,
    AddTaskRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddTaskModule { }
