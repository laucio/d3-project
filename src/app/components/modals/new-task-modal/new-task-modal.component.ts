import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Task from "src/app/models/task";

@Component({
  selector: "app-new-task-modal",
  templateUrl: "./new-task-modal.component.html",
  styleUrls: ["./new-task-modal.component.css"]
})
export class NewTaskModal implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}
  newTask: Task;
  posibleState: number[] = [0, 1, 2]; //replace constant array
  ngOnInit() {
    this.newTask = { id: 0, name: "", description: "", state: 0, estimate: 0 };
  }

  selectState(newState) {
    this.newTask.state = newState.target.value;
  }
}
