import { Directive, HostListener, Input } from "@angular/core";

@Directive({
  selector: '[appConfirmDelete]'
})
export class ConfirmDeleteDirective {
  @Input('appConfirmDelete') taskTitle: string = '';

  constructor(){}

  @HostListener('click', ['$event']) onClick(event: Event) {
    event.preventDefault();
    event.stopPropagation();

    const confirmed = confirm(`¿Estás seguro de eliminar la tarea ${this.taskTitle}?`);
    if(confirmed)
      alert("Eliminado");
  }
}
