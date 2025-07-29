import type { GraphQLResolveInfo } from "graphql";
import { FindFirstIssuePriorityOrThrowArgs } from "./args/FindFirstIssuePriorityOrThrowArgs";
import { IssuePriority } from "../../../models/IssuePriority";
export declare class FindFirstIssuePriorityOrThrowResolver {
    findFirstIssuePriorityOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstIssuePriorityOrThrowArgs): Promise<IssuePriority | null>;
}
