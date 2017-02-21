/**
 * Created by ashish on 2/20/17.
 */

import {Component} from "@angular/core";
import {Task} from "../models/Task.model";
import {LocalStorage} from '../models/LocalStorage';

@Component({
  selector : 'create-task',
  templateUrl : 'app/createTask/createTask.component.html',
  styleUrls: ['app/createTask/createTask.component.css']
})

export class CreateTaskComponent{

  storage: LocalStorage;
  dayButtonLabel : string = 'Day';
  monthButtonLabel : string = 'Month';
  yearButtonLabel : string = 'Year';
  priorityButtonLabel : string = 'Priority';

  taskTitle: string = '';
  taskDescription: string = '';

  dayArray : number[] = [1,2,3,4,5,6,,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

  monthArray : string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  yearArray : number[] = [2017,2018,2019,2020,2021,2022,2023,2024,2025,2026,2027,];

  priorityArray : string[] = [
    'low',
    'medium',
    'high'
  ];

  dayClicked = function(event:any) {
    event.preventDefault();

    this.dayButtonLabel = event.target.innerText;

  }

  monthClicked = function(event:any) {
    event.preventDefault();

    this.monthButtonLabel = event.target.innerText;

  }

  yearClicked = function(event:any) {
    event.preventDefault();

    this.yearButtonLabel = event.target.innerText;

  }

  priorityClicked = function(event:any) {
    event.preventDefault();

    this.priorityButtonLabel = event.target.innerText;

  }

  captureTitle = function (title: string) {
    this.taskTitle = title;
  }

  captureDescription = function (description: string) {
    this.taskDescription = description;
  }

  addTask = function (event : any) {
    event.preventDefault();

    this.storage.add(''+this.taskCounter,
      new Task(
        parseInt(this.dayButtonLabel),
        this.monthButtonLabel,
        parseInt(this.yearButtonLabel),
        this.taskTitle,
        this.taskDescription,
        this.priorityButtonLabel
      )
    );

    this.taskCounter ++;
  }

  public taskCounter:number = localStorage.length;

  constructor() {
    this.storage = new LocalStorage();
  }

}
