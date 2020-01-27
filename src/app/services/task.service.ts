import { Injectable } from "@angular/core";
import { TASKS } from "../datamock/tasks";
import Task from "../models/task";
import Reponse from "../models/http";
import Response from "../models/http";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor() {}

  getTasks(): Task[] {
    return TASKS;
  }

  deleteTask(task: Task): Observable<Response<boolean>> {
    //HttpPost
    var response: Response<boolean> = { error: 0, mensaje: "", datos: true };
    return of(response);
  }

  createTask(task: Task): Observable<Response<Task>> {
    //HttpPost
    task.id = getRandomArbitrary(1, 500);
    var response: Response<Task> = { error: 0, mensaje: "", datos: task };
    return of(response);
  }

  updateTaskState(id: number, newState: number): Observable<Response<boolean>> {
    //HttpUpdate
    var response: Response<boolean> = { error: 0, mensaje: "", datos: true };
    return of(response);
  }
}
//move to helper
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
