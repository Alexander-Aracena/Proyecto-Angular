import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { AddComponent } from './components/addTask/add.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { DetailsTasksComponent } from './components/details-tasks/details-tasks.component';
import { DeletedTasksComponent } from './components/deleted-tasks/deleted-tasks.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: ListTaskComponent,
    children: [
      {
        path: 'completed',
        component: CompletedTasksComponent
      },
      {
        path: 'details/:id',
        component: DetailsTasksComponent
      },
      {
        path: 'deleted',
        component: DeletedTasksComponent
      }
    ]
  },
  {
    path: 'create',
    component: AddComponent
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
  },
  {
    path: 'edit/:id',
    component: EditTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
