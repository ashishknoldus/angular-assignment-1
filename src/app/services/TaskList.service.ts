/**
 * Created by ashish on 2/20/17.
 */

import {Injectable} from "@angular/core";
import {TASKS} from "../models/TaskList.service";
import {Task} from "../models/Task.model";

@Injectable()
export class TaskService {
  getTasks() { return TASKS;}
  setTask(task : Task) {TASKS.push(task);}
}
