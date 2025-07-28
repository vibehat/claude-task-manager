import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueIssuePriorityOrThrowArgs } from "./args/FindUniqueIssuePriorityOrThrowArgs";
import { IssuePriority } from "../../../models/IssuePriority";
export declare class FindUniqueIssuePriorityOrThrowResolver {
    getIssuePriority(ctx: any, info: GraphQLResolveInfo, args: FindUniqueIssuePriorityOrThrowArgs): Promise<IssuePriority | null>;
}
