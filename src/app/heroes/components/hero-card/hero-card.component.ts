import { Component, Input } from '@angular/core';

import { Hero } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
    `.divider-bar {
      margin: 10px
    }
    h3 {
      margin: 10px 0
    }

    img {
      border-radius: 8px
    }
    `
  ]
})
export class HeroCardComponent {

  @Input() hero!: Hero

}
