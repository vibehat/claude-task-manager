import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyIssueStatusArgs } from "./args/UpdateManyIssueStatusArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyIssueStatusResolver {
    updateManyIssueStatus(ctx: any, info: GraphQLResolveInfo, args: UpdateManyIssueStatusArgs): Promise<AffectedRowsOutput>;
}
