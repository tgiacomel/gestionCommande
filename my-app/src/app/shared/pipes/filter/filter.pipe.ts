import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const searchedTerm = args.toLowerCase();
    return searchedTerm ? value.filter( (item) => item.name.toLowerCase().indexOf(searchedTerm) !== -1 ) : value ;
  }

}
