import type { GraphQLResolveInfo } from "graphql";
import { Issue } from "../../../models/Issue";
import { IssuePriority } from "../../../models/IssuePriority";
import { IssuePriorityIssuesArgs } from "./args/IssuePriorityIssuesArgs";
export declare class IssuePriorityRelationsResolver {
    issues(issuePriority: IssuePriority, ctx: any, info: GraphQLResolveInfo, args: IssuePriorityIssuesArgs): Promise<Issue[]>;
}
