import { Task } from "../../models/Task";
export declare class CreateManyAndReturnTaskDependency {
    id: number;
    taskId: number;
    dependsOnId: number;
    createdAt: Date;
    task: Task;
    dependsOn: Task;
}
