import { LowerCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typesearch'
})
export class TypesearchPipe implements PipeTransform {

  transform(search: any, type: string): any
  {
    if(type=="")
       return search;

    return search.filter((x:any)=>x.Food.toUpperCase()== type.toUpperCase() )
  }

}
