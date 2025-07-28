import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyIssueLabelArgs } from "./args/UpdateManyIssueLabelArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyIssueLabelResolver {
    updateManyIssueLabel(ctx: any, info: GraphQLResolveInfo, args: UpdateManyIssueLabelArgs): Promise<AffectedRowsOutput>;
}
