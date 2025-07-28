import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTaskArgs } from "./args/UpsertOneTaskArgs";
import { Task } from "../../../models/Task";
export declare class UpsertOneTaskResolver {
    upsertOneTask(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTaskArgs): Promise<Task>;
}
