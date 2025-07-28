import { IssueStatusCountAggregate } from "../outputs/IssueStatusCountAggregate";
import { IssueStatusMaxAggregate } from "../outputs/IssueStatusMaxAggregate";
import { IssueStatusMinAggregate } from "../outputs/IssueStatusMinAggregate";
export declare class IssueStatusGroupBy {
    id: string;
    name: string;
    color: string;
    iconName: string;
    createdAt: Date;
    updatedAt: Date;
    _count: IssueStatusCountAggregate | null;
    _min: IssueStatusMinAggregate | null;
    _max: IssueStatusMaxAggregate | null;
}
