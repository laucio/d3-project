import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import Task from "../../models/task";
import { TaskService } from "../../services/task.service";
import { ResponseErrors } from "../../constants/error";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ChangeStateModal } from "../modals/change-state-modal/change-state-modal.component";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"]
})
export class TaskComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  @Input() data: Task;
  @Output() deleteTask = new EventEmitter<Task>();
  @Output() updateTasksView = new EventEmitter<boolean>();

  constructor(
    private taskSerivce: TaskService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {}

  deleteTaskClicked() {
    this.deleteTask.emit(this.data);
  }

  changeStateClicked() {
    const modalRef = this.modalService.open(ChangeStateModal, {
      centered: true,
      size: "sm"
    });
    modalRef.componentInstance.state = this.data.state;
    modalRef.result.then(
      newState => {
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
              alert(
                `An Http error occured trying to update the state ${error}`
              );
            };
        }
      },
      reason => {
        console.log("change state modal closed, without changes");
      }
    );
  }
}
