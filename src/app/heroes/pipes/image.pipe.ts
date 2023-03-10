import { Pipe, PipeTransform } from '@angular/core';

import { Hero } from '../interfaces/heroes.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(hero: Hero): string {

    if(!hero.id && !hero.alt_image){
      return 'assets/no-image.png'

    }else if(hero.alt_image){
      return hero.alt_image
    }else{
      return `assets/heroes/${ hero.id }.jpg`;
    }

  }

}
