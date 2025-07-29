import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTaskArgs } from "./args/FindUniqueTaskArgs";
import { Task } from "../../../models/Task";
export declare class FindUniqueTaskResolver {
    task(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTaskArgs): Promise<Task | null>;
}
