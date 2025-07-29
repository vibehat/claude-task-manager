import { Issue } from "../models/Issue";
import { Task } from "../models/Task";
import { SubtaskCount } from "../resolvers/outputs/SubtaskCount";
export declare class Subtask {
    id: string;
    title: string;
    description: string;
    details?: string | null;
    testStrategy?: string | null;
    status: string;
    parentId: number;
    parentTask?: Task;
    dependencies: string;
    issues?: Issue[];
    createdAt: Date;
    updatedAt: Date;
    _count?: SubtaskCount | null;
}
