import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Task} from "./models/Task.model";
import {Observable} from "rxjs/Rx";
import "rxjs/add/observable/of";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

/**
 * Created by knoldus on 21/2/17.
 */

@Injectable()
export class AppService {

  constructor(private http: Http) {

  }

  public taskArray: Task[] = [];

  delete = function(index: number) {
    this.taskArray.splice(index,1);
  }

  add = function(task: Task) {
    this.taskArray.push(task);
  }

  update = function(index: number, task: Task) {
    if(this.tasks.indexOf(task) !== -1) {
      this.taskArray[index] = task;
    } else {
      this.add(task);
    }
  }

  insertDataOnServer = function (task: Task) : Observable<any> {

    console.log('Sending task to server/DB Task : '+task.title);

    let jsonHeader = new Headers({
      'Content-Type' : 'application/json'
    });

    this.taskArray.push(task);

    let taskObject = {
      "date" : task.date,
      "title" : task.title,
      "description" : task.description,
      "priority" : task.priority
    };

    console.log('Object for mongoDB created '+ JSON.stringify(taskObject));

    return this.http.post('http://localhost:9000/add', taskObject, {headers: jsonHeader})
      .map((response: any) => {
        console.log('Task is storing on server/DB');
        return this.extractData(response);
      })
      .catch((error: any) => {
        console.log('Error while storing on server/DB');
        return this.handleError(error);
      });

  };

  retrieveDataFromServer = function() : Observable<any> {
    let jsonHeader = new Headers({
      'Content-Type' : 'application/json'
    });

    return this.http.get('http://localhost:9000/get/all', {headers: jsonHeader})
      .map((response: any) => {
        return this.extractData(response);
      });
  };

  deleteDataOnServer = function(id: string) : Observable<any> {

    let jsonHeader = new Headers({
      'Content-Type' : 'application/json'
    });

    return this.http.get('http://localhost:9000/remove/'+id, {headers: jsonHeader})
      .map((response: any) => {
        return this.extractData(response);
    });
  };

  updateDataOnServer = function(task:Task){};

  extractData = function(response: any) {
    let body = response.json();
    return body;
  }

  handleError = function(error: any) {
    let errorMsg: string;

    try {
      if(JSON.parse(error._body).message) {
        this.errorMsg = JSON.parse(error._body).message;
      } else {
        this.errorMsg = "Something went wrong";
      }
    } catch(e) {
      this.errorMsg = "Something happened fishy while parsing JSON";
    }

    return Observable.throw(new Error(this.errorMsg));
  }
}
