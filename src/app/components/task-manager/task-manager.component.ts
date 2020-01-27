import { Component, OnInit } from "@angular/core";
import { TaskService } from "../../services/task.service";
import Task from "../../models/task";
import { TaskSates } from "../../constants/task";
import { ResponseErrors } from "../../constants/error";

import { MatDialog } from "@angular/material";
import { NewTaskFormComponent } from "../modals/new-task-form/new-task-form.component";

@Component({
  selector: "app-task-manager",
  templateUrl: "./task-manager.component.html",
  styleUrls: ["./task-manager.component.css"]
})
export class TaskManagerComponent implements OnInit {
  public tasks: Task[];
  public planningTasks: Task[];
  public inProgressTasks: Task[];
  public completedTasks: Task[];

  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.updateTasks();
  }

  deleteTaskProgress(task: Task) {
    this.taskService.deleteTask(task).subscribe(isDeleted => {
      if (isDeleted) {
        var index = this.tasks.findIndex(t => t == task);
        if (index != -1) {
          this.tasks.splice(index, 1);
        }
      } else {
        console.log("No se pudo eliminar la tarea");
      }
    }),
      error => {
        console.log("Error en la llamada al servidor");
      };
  }

  createTask(task: Task) {}
  openCreateTaskModal() {
    const dialogRef = this.dialog.open(NewTaskFormComponent, {
      // width: '250px',
      data: null //Coud we avoid this?
    });

    dialogRef.afterClosed().subscribe(newTask => {
      if (newTask != null && newTask != undefined) {
        // http call que devuelva el  objeto creado
        this.taskService.createTask(newTask).subscribe(response => {
          if (response.error == ResponseErrors.NoError) {
            this.tasks.push(newTask);
            this.updateTasks();
          }
        });
      }
    });
  }

  updateTasks() {
    this.planningTasks = this.tasks.filter(t => t.state == TaskSates.Planned);

    this.inProgressTasks = this.tasks.filter(
      t => t.state == TaskSates.InProgress
    );

    this.completedTasks = this.tasks.filter(
      t => t.state == TaskSates.Completed
    );
  }
}
