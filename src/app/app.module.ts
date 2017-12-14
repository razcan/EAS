import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AccordionModule,MenuItem,MenuModule,ButtonModule,TabViewModule, InputTextModule, CheckboxModule, 
  RadioButtonModule,CodeHighlighterModule, SelectItem, TabMenuModule, DropdownModule, Button,PanelMenuModule
 }  from 'primeng/primeng';     
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Routes } from "@angular/router";
import { HttpModule, JsonpModule } from '@angular/http';
import {CalendarModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    CommonModule,
    FormsModule,
    DropdownModule,
    TabViewModule,
    MenuModule,
    TabMenuModule,
    HttpModule,
    AccordionModule, InputTextModule, CheckboxModule, 
    RadioButtonModule,CodeHighlighterModule, TabMenuModule,CalendarModule,PanelMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
