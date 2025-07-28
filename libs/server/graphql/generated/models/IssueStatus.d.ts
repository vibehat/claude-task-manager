import { Issue } from "../models/Issue";
import { IssueStatusCount } from "../resolvers/outputs/IssueStatusCount";
export declare class IssueStatus {
    id: string;
    name: string;
    color: string;
    iconName: string;
    issues?: Issue[];
    createdAt: Date;
    updatedAt: Date;
    _count?: IssueStatusCount | null;
}
