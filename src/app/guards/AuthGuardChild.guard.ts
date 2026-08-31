import { Injectable } from "@angular/core";
import { CanActivateChild, Router } from "@angular/router";
import { TasksService } from "../services/tasks.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardChild implements CanActivateChild {
  constructor(private service: TasksService, private router: Router) {}

  canActivateChild(): boolean {
    if (this.service.authRoutesChild()) {
      return true;
    } else {
      alert('No ha sido posible acceder a estas rutas');
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 2000);
      return false;
    }
  }
}
