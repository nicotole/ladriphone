import { Component } from '@angular/core';

@Component({
  selector: 'app-root',//define el nombre del selector que se va a usar en el index.html
  templateUrl: './app.component.html',//define el archivo de template .html a usar por el componente
  styleUrls: ['./app.component.scss']//define el archivo css a usar por el componente
})
export class AppComponent {
  title = 'Ladri Phone';//define una variable disponible para todo el componente
}
