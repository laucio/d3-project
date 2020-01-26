import { Pipe, PipeTransform } from '@angular/core';
import { TaskSates } from '../constants/task'


@Pipe({name: 'taskStates'})
export class TaskStatesPipe implements PipeTransform {
  transform(value: number): string {
    var output;
    switch (value) {
        case TaskSates.Planned:
            output = "Planned"
            break;
        case TaskSates.InProgress:
            output = "In Progress";
            break;
        case TaskSates.Completed:
            output = "Completed";
            break;
        default:
            output = " - "
            break;
    }
    return output;
  }
}