import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titleMain = 'primerApp';


  alerta(): void{
    alert('Holaaa');
  }
}
