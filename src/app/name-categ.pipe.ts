import { Categorie } from './models/Categorie';
import { CategorieService } from './categorie/categorie.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameCateg'
})
export class NameCategPipe implements PipeTransform {

  transform(value: any, args?: any): any {
       
    return '##'+value+'##';
  }

}
