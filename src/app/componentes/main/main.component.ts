import { NgIf, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  mostrar:boolean = true;

  mostrarOcultar(){
    this.mostrar = !this.mostrar;
  }

  mylist:string[] = ["Carlos", "Miguel", "Juan", "Pedro"];
}
