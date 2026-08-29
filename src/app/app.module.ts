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

@NgModule({
  declarations: [AppComponent, AddComponent, ListTaskComponent, StatusTaskDirective, ConfirmDeleteDirective],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule, HttpClientModule ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
