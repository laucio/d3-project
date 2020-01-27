import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Task from '../../../models/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TaskFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Task
  ) { }

  ngOnInit() {
  }
}
