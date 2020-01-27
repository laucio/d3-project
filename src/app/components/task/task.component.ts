import { Component, OnInit, Input, Output, EventEmitter, Inject} from '@angular/core';
import Task from '../../models/task';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskFormComponent } from '../../components/modals/task-form/task-form.component'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  @Input() data: Task;
  @Output() deleteTask = new EventEmitter<Task>();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {

  }

  deleteTaskClicked() {
    this.deleteTask.emit(this.data);
  }

  changeStateClicked() {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      // width: '250px',
      data: this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog EDIT was closed');
      console.log(result);
    });
  }

}
