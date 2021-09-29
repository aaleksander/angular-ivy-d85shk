import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { RicoService } from './services/ricoService';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  res: string;

  constructor(private http: RicoService) {}

  test() {
    this.http.get('https://rickandmortyapi.com/api/character/').subscribe(
      (data) => (this.res = JSON.stringify(data.results)),
      (error) => {
        this.res = JSON.stringify(error);
      }
    );
  }
}
