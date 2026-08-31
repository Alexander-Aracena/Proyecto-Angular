import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTaskComponent } from './components/list-task/list-task.component';
import { AddComponent } from './components/addTask/add.component';
import { EditTaskComponent } from './components/edit-task/edit-task.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { DetailsTasksComponent } from './components/details-tasks/details-tasks.component';
import { DeletedTasksComponent } from './components/deleted-tasks/deleted-tasks.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/AuthGuard.guard';
import { AuthGuardChild } from './guards/AuthGuardChild.guard';
import { CanDeactivateGuard } from './guards/ConfirmGuard.guard';

const routes: Routes = [
  {
    path: 'tasks',
    component: ListTaskComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuardChild],
    canDeactivate: [CanDeactivateGuard],
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'create',
    component: AddComponent
  },
  {
    path: '',
    redirectTo: '/login',
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
