import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-addTask',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})

export class AddComponent implements OnDestroy, AfterContentInit {
  ngOnDestroy(): void {
    console.log('El componente AddComponent ha sido destruido');
  }

  ngAfterContentInit(): void {
    console.log('El contenido proyectado ha sido inicializado');
  }
}
