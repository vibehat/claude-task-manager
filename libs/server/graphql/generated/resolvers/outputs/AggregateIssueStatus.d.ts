import { IssueStatusCountAggregate } from "../outputs/IssueStatusCountAggregate";
import { IssueStatusMaxAggregate } from "../outputs/IssueStatusMaxAggregate";
import { IssueStatusMinAggregate } from "../outputs/IssueStatusMinAggregate";
export declare class AggregateIssueStatus {
    _count: IssueStatusCountAggregate | null;
    _min: IssueStatusMinAggregate | null;
    _max: IssueStatusMaxAggregate | null;
}
