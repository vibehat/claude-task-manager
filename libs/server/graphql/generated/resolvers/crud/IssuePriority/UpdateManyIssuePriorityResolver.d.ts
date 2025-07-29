import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyIssuePriorityArgs } from "./args/UpdateManyIssuePriorityArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyIssuePriorityResolver {
    updateManyIssuePriority(ctx: any, info: GraphQLResolveInfo, args: UpdateManyIssuePriorityArgs): Promise<AffectedRowsOutput>;
}
