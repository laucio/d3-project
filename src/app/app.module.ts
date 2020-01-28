import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaskComponent } from "./components/task/task.component";
import { TaskManagerComponent } from "./components/task-manager/task-manager.component";
import { TaskStatesPipe } from "./pipes/task-states.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { GetTotalEstimatePipe } from "./pipes/get-total-estimate.pipe";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ChangeStateModal } from "./components/modals/change-state-modal/change-state-modal.component";
import { NewTaskModal } from "./components/modals/new-task-modal/new-task-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskManagerComponent,
    TaskStatesPipe,
    GetTotalEstimatePipe,
    ChangeStateModal,
    NewTaskModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ChangeStateModal, NewTaskModal]
})
export class AppModule {}
