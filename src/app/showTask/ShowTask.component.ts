/**
 * Created by ashish on 2/20/17.
 */
import {Component, OnInit} from "@angular/core";
import {LocalStorage} from '../models/LocalStorage';
import {Task} from "../models/Task.model";
import {AppService} from "../app.service";

@Component({
  moduleId : module.id,
  selector : 'show-task',
  templateUrl : './showTask.component.html',
  styleUrls: ['./showTask.component.css'],
})

export class ShowTaskComponent extends OnInit{

  tasks:Task[];

  ngOnInit() {
    setInterval(() => {this.refreshTasks()}, 5000);
  }

  constructor(private appService: AppService){
    super();
    this.refreshTasks();
  }

  refreshTasks = function() {

    this.appService.retrieveDataFromServer().subscribe((data: any) => {
      this.tasks = data;
    });

  };

  deleteTask = function(event: any) {
    event.preventDefault();



  }

}
