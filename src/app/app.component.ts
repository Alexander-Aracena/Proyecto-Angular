import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements DoCheck {
  value: number = 0;
  previousValue: number = 0;
  changesDetected: boolean = false;

  updateValue(): void {
    this.value++;
    setInterval(() => {
      this.changesDetected = false;
    }, 2000);
  }

  ngDoCheck(): void {
    if (this.value !== this.previousValue) {
      this.previousValue = this.value;
      this.changesDetected = true;
    }
  }
}
