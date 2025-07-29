import { IssueOrderByWithRelationInput } from "../../../inputs/IssueOrderByWithRelationInput";
import { IssueWhereInput } from "../../../inputs/IssueWhereInput";
import { IssueWhereUniqueInput } from "../../../inputs/IssueWhereUniqueInput";
export declare class AggregateIssueArgs {
    where?: IssueWhereInput | undefined;
    orderBy?: IssueOrderByWithRelationInput[] | undefined;
    cursor?: IssueWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
