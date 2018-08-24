import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { TableModule } from 'primeng/table';
import { DataTableModule, ButtonModule, InputTextModule, InputMaskModule, CalendarModule } from 'primeng/primeng';
import { DropdownModule } from 'primeng/dropdown';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemCadastroComponent } from './item-cadastro/item-cadastro.component';
import { ItemService } from './item.service';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemCadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    FormsModule,

    DropdownModule,
    DataTableModule,
    ButtonModule,
    InputMaskModule,
    CalendarModule,
    InputTextareaModule,
    InputTextModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
