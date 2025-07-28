import { IssueLabel } from "../models/IssueLabel";
import { LabelCount } from "../resolvers/outputs/LabelCount";
export declare class Label {
    id: string;
    name: string;
    color: string;
    description?: string | null;
    issues?: IssueLabel[];
    createdAt: Date;
    updatedAt: Date;
    _count?: LabelCount | null;
}
