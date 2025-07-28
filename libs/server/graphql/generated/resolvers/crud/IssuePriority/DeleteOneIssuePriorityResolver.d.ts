import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneIssuePriorityArgs } from "./args/DeleteOneIssuePriorityArgs";
import { IssuePriority } from "../../../models/IssuePriority";
export declare class DeleteOneIssuePriorityResolver {
    deleteOneIssuePriority(ctx: any, info: GraphQLResolveInfo, args: DeleteOneIssuePriorityArgs): Promise<IssuePriority | null>;
}
