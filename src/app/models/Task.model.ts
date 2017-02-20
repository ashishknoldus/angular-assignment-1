/**
 * Created by ashish on 2/20/17.
 */

export class Task {

  public day: number;
  public month: string;
  public year: number;
  public title: string;
  public description: string;
  public priority: string;

  constructor(
    day: number,
    month: string,
    year: number,
    title: string,
    description: string,
    priority: string
  ){
    this.day = day;
    this.month = month;
    this.year = year;
    this.title = title;
    this.description = description;
    this.priority = priority;
  }
}
