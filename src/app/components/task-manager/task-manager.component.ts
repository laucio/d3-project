import { Component, OnInit } from "@angular/core";
import { TaskService } from "../../services/task.service";
import Task from "../../models/task";
import { TaskSates } from "../../constants/task";
import { ResponseErrors } from "../../constants/error";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NewTaskModal } from "../modals/new-task-modal/new-task-modal.component";

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
  constructor(
    private taskService: TaskService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.updateTasks();
  }

  deleteTaskProcess(task: Task) {
    this.taskService.deleteTask(task).subscribe(response => {
      if (response.error == ResponseErrors.NoError) {
        var index = this.tasks.findIndex(t => t == task);
        if (index != -1) {
          this.tasks.splice(index, 1);
          this.updateTasks();
        }
      } else {
        console.log("No se pudo eliminar la tarea");
      }
    }),
      error => {
        console.log("Error en la llamada al servidor");
      };
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

  openCreateTaskModal() {
    const modalRef = this.modalService.open(NewTaskModal, {
      centered: true,
      size: "lg"
    });

    modalRef.result.then(
      newTask => {
        if (newTask != null && newTask != undefined) {
          this.taskService.createTask(newTask).subscribe(response => {
            if (response.error == ResponseErrors.NoError) {
              this.tasks.push(newTask);
              this.updateTasks();
            }
          });
        }
      },
      reason => {
        console.log("new task modal closed, without changes");
      }
    );
  }
}
