import { TaskSates } from '../constants/task';

export default interface Task {
    id: number;
    name: string;
    description: string;
    estimate: number;
    state: TaskSates
}
