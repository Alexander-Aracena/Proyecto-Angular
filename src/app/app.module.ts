import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/addTask/add.component';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusTaskDirective } from './directives/status-task.directive';
import { ConfirmDeleteDirective } from './directives/confirm-delete.directive';
import { HttpClientModule } from '@angular/common/http';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { DetailsTasksComponent } from './components/details-tasks/details-tasks.component';
import { DeletedTasksComponent } from './components/deleted-tasks/deleted-tasks.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [AppComponent, AddComponent, ListTaskComponent, StatusTaskDirective, ConfirmDeleteDirective, EditTaskComponent, CompletedTasksComponent, DetailsTasksComponent, DeletedTasksComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
