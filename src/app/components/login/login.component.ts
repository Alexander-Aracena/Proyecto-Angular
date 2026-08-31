import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private service: TasksService, private router: Router) {}

  isLogin() {
    alert('Inicio de sesión exitoso!');
    this.service.login();
    setTimeout(() => {
      this.router.navigate(['/tasks']);
    }, 2000);
  }
}
