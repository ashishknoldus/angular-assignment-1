/**
 * Created by ashish on 2/20/17.
 */

export class Task {

  public date: string;
  public title: string;
  public description: string;
  public priority: string;
  public _id: string;

  constructor(
    day: number,
    month: string,
    year: number,
    title: string,
    description: string,
    priority: string,
    id: string
  ){
    this.date = day +' '+ month +' '+ year;
    this.title = title;
    this.description = description;
    this.priority = priority;
    this._id = id;
    console.log('Task object created');

  }
}
