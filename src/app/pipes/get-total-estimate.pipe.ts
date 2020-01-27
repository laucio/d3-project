import { Pipe, PipeTransform } from '@angular/core';
import Task from '../models/task';

@Pipe({
  name: 'getTotalEstimate',
  pure: true
})

export class GetTotalEstimatePipe implements PipeTransform {

  transform(value: any, args?: any): number {
    return this.getTotalEstimate(value);
  }

  getTotalEstimate(tasks: Task[]): number{
    var result = 0;
    tasks.forEach(t => result += t.estimate);
    return result;
  }
}