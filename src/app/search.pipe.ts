import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(value: String, search: String): any {
    let regex = new RegExp(".*" + search + ".*", "ig");
    return value.match(regex);
  }

}