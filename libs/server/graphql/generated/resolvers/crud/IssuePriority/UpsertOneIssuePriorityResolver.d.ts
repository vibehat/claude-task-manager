import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneIssuePriorityArgs } from "./args/UpsertOneIssuePriorityArgs";
import { IssuePriority } from "../../../models/IssuePriority";
export declare class UpsertOneIssuePriorityResolver {
    upsertOneIssuePriority(ctx: any, info: GraphQLResolveInfo, args: UpsertOneIssuePriorityArgs): Promise<IssuePriority>;
}
