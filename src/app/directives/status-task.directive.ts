import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTaskStatus]'
})
export class StatusTaskDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @Input() set appTaskStatus(completed: boolean) {
    if (!completed) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', 'red');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '');
    }
  }
}
