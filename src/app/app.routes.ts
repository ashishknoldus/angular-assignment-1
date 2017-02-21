/**
 * Created by knoldus on 21/2/17.
 */
import {Routes} from "@angular/router";
import {ShowTaskComponent} from "./showTask/ShowTask.component";
import {CreateTaskComponent} from "./createTask/createTask.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {
    path: 'show-task',
    component: ShowTaskComponent
  }, {
    path: 'create-task',
    component: CreateTaskComponent
  }, {
    path: 'home',
    component: HomeComponent
  }
];


