import { Issue } from "../models/Issue";
import { IssuePriorityCount } from "../resolvers/outputs/IssuePriorityCount";
export declare class IssuePriority {
    id: string;
    name: string;
    iconName: string;
    order: number;
    issues?: Issue[];
    createdAt: Date;
    updatedAt: Date;
    _count?: IssuePriorityCount | null;
}
