import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyIssuePriorityArgs } from "./args/DeleteManyIssuePriorityArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyIssuePriorityResolver {
    deleteManyIssuePriority(ctx: any, info: GraphQLResolveInfo, args: DeleteManyIssuePriorityArgs): Promise<AffectedRowsOutput>;
}
