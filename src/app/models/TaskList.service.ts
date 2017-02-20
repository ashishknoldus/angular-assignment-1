import {Task} from "./Task.model";
/**
 * Created by ashish on 2/20/17.
 */

export let TASKS : Task[];

export class TaskList {

  getTasks() {
    return TASKS;
  }

  addTask(task: Task) {
    TASKS.push(task);
  }

}
