import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaskComponent } from "./components/task/task.component";
import { TaskManagerComponent } from "./components/task-manager/task-manager.component";
import { TaskStatesPipe } from "./pipes/task-states.pipe";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TaskFormComponent } from "./components/modals/task-form/task-form.component";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material";
import { FormsModule } from "@angular/forms";
import { GetTotalEstimatePipe } from "./pipes/get-total-estimate.pipe";
import { MatSelectModule } from "@angular/material/select";
import { NewTaskFormComponent } from "./components/modals/new-task-form/new-task-form.component";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskManagerComponent,
    TaskStatesPipe,
    TaskFormComponent,
    GetTotalEstimatePipe,
    NewTaskFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TaskFormComponent, NewTaskFormComponent]
})
export class AppModule {}
