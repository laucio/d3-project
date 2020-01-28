import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import Task from "src/app/models/task";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";
@Component({
  selector: "app-new-task-modal",
  templateUrl: "./new-task-modal.component.html",
  styleUrls: ["./new-task-modal.component.css"]
})
export class NewTaskModal implements OnInit {
  constructor(public activeModal: NgbActiveModal, private fb: FormBuilder) {}
  newTaskForm: FormGroup;
  newTask: Task;
  posibleState: number[] = [0, 1, 2]; //replace constant array

  ngOnInit() {
    this.newTask = { id: 0, name: "", description: "", state: 0, estimate: 0 };
    this.newTaskForm = this.fb.group({
      name: new FormControl("", [Validators.required]),
      description: new FormControl("", [Validators.required]),
      state: new FormControl(""),
      estimate: new FormControl("", [
        Validators.required,
        Validators.pattern("^-?[0-9]\\d*(\\.\\d{1,2})?$")
      ])
    });
  }

  selectState(newState) {
    this.newTask.state = newState.target.value;
  }

  save() {
    this.newTask.name = this.newTaskForm.get("name").value;
    this.newTask.description = this.newTaskForm.get("description").value;
    this.newTask.state = this.newTaskForm.get("state").value;
    this.newTask.estimate = parseInt(this.newTaskForm.get("estimate").value);
    this.activeModal.close(this.newTask);
  }
}
