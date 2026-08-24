import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './components/addTask/add.component';
import { ListTaskComponent } from './components/list-task/list-task.component';

@NgModule({
  declarations: [AppComponent, AddComponent, ListTaskComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
