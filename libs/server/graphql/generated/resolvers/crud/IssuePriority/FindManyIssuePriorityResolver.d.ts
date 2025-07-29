import type { GraphQLResolveInfo } from "graphql";
import { FindManyIssuePriorityArgs } from "./args/FindManyIssuePriorityArgs";
import { IssuePriority } from "../../../models/IssuePriority";
export declare class FindManyIssuePriorityResolver {
    issuePriorities(ctx: any, info: GraphQLResolveInfo, args: FindManyIssuePriorityArgs): Promise<IssuePriority[]>;
}
