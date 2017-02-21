/**
 * Created by ashish on 2/20/17.
 */
import {Component, OnInit} from "@angular/core";
import {LocalStorage} from '../models/LocalStorage';
import {Task} from "../models/Task.model";

@Component({
  selector : 'show-task',
  templateUrl : 'app/showTask/showTask.component.html',
  styleUrls: ['app/showTask/showTask.component.css'],
})

export class ShowTaskComponent extends OnInit{

  tasks:Task[];
  localStorage:LocalStorage;

  ngOnInit() {
    setInterval(() => {this.refreshTasks()}, 1000);
  }

  constructor(){
    super();
    this.localStorage =new LocalStorage();
    this.refreshTasks();
  }

  refreshTasks = function() {
    this.tasks= this.localStorage.get();
  }

}
