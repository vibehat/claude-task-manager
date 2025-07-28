import type { GraphQLResolveInfo } from "graphql";
import { CreateManyIssuePriorityArgs } from "./args/CreateManyIssuePriorityArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyIssuePriorityResolver {
    createManyIssuePriority(ctx: any, info: GraphQLResolveInfo, args: CreateManyIssuePriorityArgs): Promise<AffectedRowsOutput>;
}
