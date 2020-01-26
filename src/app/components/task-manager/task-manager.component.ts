import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import Task from '../../models/task';
import { TaskSates } from '../../constants/task';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {

  public tasks: Task[]
  public planningTasks: Task[]
  public inProgressTasks: Task[]
  public completedTasks: Task[]

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
    this.updateTasks();
  }

  deleteTaskProgress(task: Task) {
    this.taskService.deleteTask(task).subscribe(isDeleted => {
      if (isDeleted) {
        var index = this.tasks.findIndex(t => t == task);
        if (index != -1) { this.tasks.splice(index,1); }
      }
      else {
        console.log("No se pudo eliminar la tarea")
      }
    }),
    error => {
      console.log("Error en la llamada al servidor")
    }
  }

  createTask(task: Task) {

  }
  openCreateTaskModal() {

  }
  getAmountEstimateHours(state: number) {
    var amountHours = 0;
    this.tasks.forEach(t => {
      if (t.state == state) {
        amountHours += t.estimate;
      }
    })

    return amountHours;
  }

  updateTasks() {
    this.planningTasks = this.tasks.filter(t => t.state == TaskSates.Planned);

    this.inProgressTasks = this.tasks.filter(t => t.state == TaskSates.InProgress);

    this.completedTasks = this.tasks.filter(t => t.state == TaskSates.Completed);
  }

}
