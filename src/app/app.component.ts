import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { MainComponent } from './componentes/main/main.component';
import { FooterComponent } from './componentes/footer/footer.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NavbarComponent, MainComponent, FooterComponent]
})
export class AppComponent {
  title = 'mi-primer-proyecto';

  // mostrar:boolean = true;
  // lista:string[] = ["uno", "dos", "tres"];

  // cambiar(){
  //   this.mostrar = !this.mostrar;
  // }
}
