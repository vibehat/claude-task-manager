import { IssueStatusOrderByWithRelationInput } from "../../../inputs/IssueStatusOrderByWithRelationInput";
import { IssueStatusWhereInput } from "../../../inputs/IssueStatusWhereInput";
import { IssueStatusWhereUniqueInput } from "../../../inputs/IssueStatusWhereUniqueInput";
export declare class FindFirstIssueStatusOrThrowArgs {
    where?: IssueStatusWhereInput | undefined;
    orderBy?: IssueStatusOrderByWithRelationInput[] | undefined;
    cursor?: IssueStatusWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "color" | "iconName" | "createdAt" | "updatedAt"> | undefined;
}
