import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyIssueLabelArgs } from "./args/DeleteManyIssueLabelArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyIssueLabelResolver {
    deleteManyIssueLabel(ctx: any, info: GraphQLResolveInfo, args: DeleteManyIssueLabelArgs): Promise<AffectedRowsOutput>;
}
