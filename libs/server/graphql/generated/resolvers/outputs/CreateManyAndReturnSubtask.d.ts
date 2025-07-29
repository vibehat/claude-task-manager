import { Task } from "../../models/Task";
export declare class CreateManyAndReturnSubtask {
    id: string;
    title: string;
    description: string;
    details: string | null;
    testStrategy: string | null;
    status: string;
    parentId: number;
    dependencies: string;
    createdAt: Date;
    updatedAt: Date;
    parentTask: Task;
}
