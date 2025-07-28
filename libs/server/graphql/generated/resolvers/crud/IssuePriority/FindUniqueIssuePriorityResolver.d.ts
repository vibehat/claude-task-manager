import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueIssuePriorityArgs } from "./args/FindUniqueIssuePriorityArgs";
import { IssuePriority } from "../../../models/IssuePriority";
export declare class FindUniqueIssuePriorityResolver {
    issuePriority(ctx: any, info: GraphQLResolveInfo, args: FindUniqueIssuePriorityArgs): Promise<IssuePriority | null>;
}
