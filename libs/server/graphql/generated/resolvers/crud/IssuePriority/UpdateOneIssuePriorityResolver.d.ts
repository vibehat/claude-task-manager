import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneIssuePriorityArgs } from "./args/UpdateOneIssuePriorityArgs";
import { IssuePriority } from "../../../models/IssuePriority";
export declare class UpdateOneIssuePriorityResolver {
    updateOneIssuePriority(ctx: any, info: GraphQLResolveInfo, args: UpdateOneIssuePriorityArgs): Promise<IssuePriority | null>;
}
