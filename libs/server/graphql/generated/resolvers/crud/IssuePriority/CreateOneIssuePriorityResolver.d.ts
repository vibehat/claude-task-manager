import type { GraphQLResolveInfo } from "graphql";
import { CreateOneIssuePriorityArgs } from "./args/CreateOneIssuePriorityArgs";
import { IssuePriority } from "../../../models/IssuePriority";
export declare class CreateOneIssuePriorityResolver {
    createOneIssuePriority(ctx: any, info: GraphQLResolveInfo, args: CreateOneIssuePriorityArgs): Promise<IssuePriority>;
}
