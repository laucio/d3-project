import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { TaskManagerComponent } from './components/task-manager/task-manager.component';
import { TaskStatesPipe } from './pipes/task-states.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskFormComponent } from './components/modals/task-form/task-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { GetTotalEstimatePipe } from './pipes/get-total-estimate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskManagerComponent,
    TaskStatesPipe,
    TaskFormComponent,
    GetTotalEstimatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ TaskFormComponent ]
})
export class AppModule { }
