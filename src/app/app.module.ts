import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { DragComponent } from './drag/drag.component';
import { FormsModule }   from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DragComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
