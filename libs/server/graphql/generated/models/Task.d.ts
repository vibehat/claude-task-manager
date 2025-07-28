import { Issue } from "../models/Issue";
import { Subtask } from "../models/Subtask";
import { TaskDependency } from "../models/TaskDependency";
import { TaskCount } from "../resolvers/outputs/TaskCount";
export declare class Task {
    id: number;
    title: string;
    description: string;
    details?: string | null;
    testStrategy?: string | null;
    priority: string;
    status: string;
    complexity?: number | null;
    subtasks?: Subtask[];
    dependencies?: TaskDependency[];
    dependents?: TaskDependency[];
    issues?: Issue[];
    createdAt: Date;
    updatedAt: Date;
    _count?: TaskCount | null;
}
