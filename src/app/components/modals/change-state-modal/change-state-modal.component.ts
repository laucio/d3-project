import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-change-state-modal",
  templateUrl: "./change-state-modal.component.html",
  styleUrls: ["./change-state-modal.component.css"]
})
export class ChangeStateModal implements OnInit {
  @Input() state: number;
  posibleStates: number[] = [0, 1, 2]; //replace constant array
  selectedState: number;
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.selectedState = this.state;
    this.posibleStates = this.posibleStates.filter(s => s != this.state);
  }

  selectState(state: number) {
    this.selectedState = state;
  }
}
