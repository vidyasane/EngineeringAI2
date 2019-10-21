import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'search'
  })
  export class SearchPipe implements PipeTransform {
   
  transform(value:any, searchByTitle):any {
  return value.filter(it=> {
  if(!searchByTitle){
  return value;
   }
  const title=it.title.toLowerCase().startsWith(searchByTitle.toLowerCase());
  return title;
      });
    }
   
  }