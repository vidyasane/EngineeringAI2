import { Component, OnInit } from '@angular/core';
import { TabledataService } from '../tabledata.service';
import { switchMap } from 'rxjs/operators';
import { Subscription, timer } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  
  set;
  data;

  term: any = { title: '' };
   statusText:string;
   selectedName:any;
  subscription: Subscription;
  rowData: any;
  rawData;
  constructor(private ht:HttpClient,private a:TabledataService){

  }
  ngOnInit(){
  this.subscription=timer(0,10000).pipe(
    switchMap(()=> this.a.getInfo())
    ).subscribe(resp=>{console.log(resp)
    this.set=resp
    this.data=this.set.hits});
  


  }




  
    

highlightRow(e) {
this.selectedName=e.title;
  }

    




  button(row,a){
    console.log(row)
   this.rowData=row;

this.a.postInfo(row).subscribe(resp=>console.log(resp))


  }


}
