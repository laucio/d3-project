import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import Task from '../../../models/task';
import { TaskSates } from '../../../constants/task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  posibleStates: number[] = [0,1,2]; //replace constant array
  selectedState: number;
  constructor(public dialogRef: MatDialogRef<TaskFormComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Task
  ) { }

  ngOnInit() {
    this.selectedState = this.data.state;
    this.posibleStates = this.posibleStates.filter(s => s != this.data.state);
  }

  onNoClick() {
    this.dialogRef.close(null);
  }

  save() {
    this.dialogRef.close(this.selectedState);
  }
}
