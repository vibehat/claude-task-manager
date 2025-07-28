import { IssueAvgAggregate } from "../outputs/IssueAvgAggregate";
import { IssueCountAggregate } from "../outputs/IssueCountAggregate";
import { IssueMaxAggregate } from "../outputs/IssueMaxAggregate";
import { IssueMinAggregate } from "../outputs/IssueMinAggregate";
import { IssueSumAggregate } from "../outputs/IssueSumAggregate";
export declare class AggregateIssue {
    _count: IssueCountAggregate | null;
    _avg: IssueAvgAggregate | null;
    _sum: IssueSumAggregate | null;
    _min: IssueMinAggregate | null;
    _max: IssueMaxAggregate | null;
}
