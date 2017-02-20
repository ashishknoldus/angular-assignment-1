import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CreateTaskComponent} from "./createTask/createTask.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

import {Ng2Webstorage} from 'ng2-webstorage';
import {ShowTaskComponent} from "./showTask/ShowTask.component";

@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule, Ng2Webstorage],
  declarations: [ AppComponent , CreateTaskComponent, ShowTaskComponent],
  bootstrap:    [ AppComponent, CreateTaskComponent, ShowTaskComponent ]
})
export class AppModule {  }
