import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from '../app/components/test/test.component';
import { TaskManagerComponent } from '../app/components/task-manager/task-manager.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'd3', component: TaskManagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }