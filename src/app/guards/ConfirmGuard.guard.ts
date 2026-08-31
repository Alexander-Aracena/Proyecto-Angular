import { Injectable } from "@angular/core";
import { CanDeactivate, Router } from "@angular/router";

interface CanComponentDeactivate {
  canDeactivate: () => boolean
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  constructor(private router: Router) {}

  canDeactivate(): boolean {
    const confirmDeactivate = window.confirm('¿Estás seguro de que quieres salir de esta página?');

    if (confirmDeactivate) {
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 0);
      return true;
    } else {
      return false;
    }
  }
}
