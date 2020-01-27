import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import Task from "../../../models/task";

@Component({
  selector: "app-new-task-form",
  templateUrl: "./new-task-form.component.html",
  styleUrls: ["./new-task-form.component.css"]
})
export class NewTaskFormComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<NewTaskFormComponent>) {}
  posibleStates: number[] = [0, 1, 2];
  newTask: Task;

  ngOnInit() {
    this.newTask = { id: 0, name: "", description: "", state: 0, estimate: 0 };
  }

  onNoClick() {
    this.dialogRef.close(null);
  }

  save() {
    this.dialogRef.close(this.newTask);
  }
}
