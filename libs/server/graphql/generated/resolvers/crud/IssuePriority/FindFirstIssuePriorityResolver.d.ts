import type { GraphQLResolveInfo } from "graphql";
import { FindFirstIssuePriorityArgs } from "./args/FindFirstIssuePriorityArgs";
import { IssuePriority } from "../../../models/IssuePriority";
export declare class FindFirstIssuePriorityResolver {
    findFirstIssuePriority(ctx: any, info: GraphQLResolveInfo, args: FindFirstIssuePriorityArgs): Promise<IssuePriority | null>;
}
