import Task from "../models/task";
import { TaskSates } from "../constants/task";

export var TASKS: Task[] = [
  {
    id: 1,
    name: "Renombrar campos",
    description: "Renombrar todos los campos de la app",
    estimate: 4,
    state: TaskSates.Planned
  },
  {
    id: 2,
    name: "Hacer user story",
    description: "Hacer user story para la app",
    estimate: 6,
    state: TaskSates.Planned
  },
  {
    id: 3,
    name: "Diseñar",
    description: "Diseñar pantallas de la app",
    estimate: 4,
    state: TaskSates.Completed
  },
  {
    id: 4,
    name: "Codear componentes",
    description: "Codear los componentes de la app",
    estimate: 4,
    state: TaskSates.InProgress
  },
  {
    id: 5,
    name: "Testear",
    description: "Testear los componentes de la app",
    estimate: 4,
    state: TaskSates.InProgress
  },
  {
    id: 6,
    name: "Pasaje a producción",
    description: "Pasar a produccion la app",
    estimate: 4,
    state: TaskSates.InProgress
  },
  {
    id: 7,
    name: "Obtener requerimientos",
    description: "Obtener los requerimientos de la app",
    estimate: 4,
    state: TaskSates.Completed
  }
];
