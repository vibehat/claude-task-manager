import { Task } from "../models/Task";
export declare class TaskDependency {
    id: number;
    taskId: number;
    task?: Task;
    dependsOnId: number;
    dependsOn?: Task;
    createdAt: Date;
}
