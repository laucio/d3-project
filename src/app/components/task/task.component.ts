import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import Task from '../../models/task';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() data: Task;
  @Output() deleteTask = new EventEmitter<Task>();
  constructor() { }

  ngOnInit() {

  }

  deleteTaskClicked() {
    this.deleteTask.emit(this.data);
  }

  changeStateClicked() {

  }

}
