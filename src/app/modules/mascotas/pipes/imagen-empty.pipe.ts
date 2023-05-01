import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenEmpty',
})
export class ImagenEmptyPipe implements PipeTransform {
  transform(img: string | undefined, tipo: 'mascota'): string {
    if (img?.includes('https')) {
      return img;
    }

    return 'assets/images/no-image.jpg';
  }
}
