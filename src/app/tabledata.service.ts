import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TabledataService {

  constructor(private ht:HttpClient) {
       }
       getInfo(){
        return  this.ht.get("https://hn.algolia.com/api/v1/search_by_date?tags=story");


       }
        postInfo(r)
        {
return this.ht.post(" http://localhost:3000/emp",r)
        }




​
        

}
