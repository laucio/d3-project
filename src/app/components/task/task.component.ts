import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import Task from "../../models/task";
import { MatDialog } from "@angular/material/dialog";
import { TaskFormComponent } from "../../components/modals/task-form/task-form.component";
import { TaskService } from "../../services/task.service";
import { ResponseErrors } from "../../constants/error";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  @Input() data: Task;
  @Output() deleteTask = new EventEmitter<Task>();
  @Output() updateTasksView = new EventEmitter<boolean>();
  constructor(public dialog: MatDialog, private taskSerivce: TaskService) {}

  ngOnInit() {}

  deleteTaskClicked() {
    this.deleteTask.emit(this.data);
  }

  changeStateClicked() {
    const dialogRef = this.dialog.open(TaskFormComponent, {
      // width: '250px',
      data: this.data
    });

    dialogRef.afterClosed().subscribe(newState => {
      if (newState != null && newState != undefined) {
        this.taskSerivce
          .updateTaskState(this.data.id, newState)
          .subscribe(response => {
            if (response.error == ResponseErrors.NoError) {
              this.data.state = newState;
              this.updateTasksView.emit(true);
            } else {
              alert("An error occured trying to update the state");
            }
          }),
          error => {
            alert("An Http error occured trying to update the state");
          };
      }
    });
  }
}
