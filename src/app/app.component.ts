import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './dao/character';
import { RicoService } from './services/ricoService';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  res: Character[];

  constructor(
    private http: RicoService,
    private primengConfig: PrimeNGConfig
  ) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  test() {
    this.http.get('https://rickandmortyapi.com/api/character/').subscribe(
      (response) => {
        console.info('start');
        this.res = [];
        for (let item of response.results) {
          let p = new Character(item.id, item.name, item.status);
          this.res.push(p);
        }
        console.info('end');
      },
      (error) => {}
    );
  }
}
