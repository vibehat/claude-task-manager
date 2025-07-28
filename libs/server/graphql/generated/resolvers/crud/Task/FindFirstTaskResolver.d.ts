import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTaskArgs } from "./args/FindFirstTaskArgs";
import { Task } from "../../../models/Task";
export declare class FindFirstTaskResolver {
    findFirstTask(ctx: any, info: GraphQLResolveInfo, args: FindFirstTaskArgs): Promise<Task | null>;
}
