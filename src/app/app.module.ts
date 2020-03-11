import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ListaProductosComponent} from './lista-productos/lista-productos.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
