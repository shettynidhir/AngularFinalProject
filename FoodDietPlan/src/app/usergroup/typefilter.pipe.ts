import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typefilter'
})
export class TypefilterPipe implements PipeTransform {

  transform(cat: any, type: string): any
  {
    if(type=="All")
       return cat;

    return cat.filter((x:any)=>x.Category == type)
  }

}
