import { Injectable } from '@angular/core';
import { TASKS } from '../datamock/tasks';
import Task from '../models/task';
import Response from '../models/http'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks() :Task[] {
    return TASKS;
  }

  deleteTask(task: Task): Observable<Response<boolean>> {
    //httppost
    return new Observable<Response<boolean>>();

  }

  createTask(task: Task): Observable<Response<boolean>> {
    //httppost
    return new Observable<Response<boolean>>();
  }
}
