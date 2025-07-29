import type { GraphQLResolveInfo } from "graphql";
import { FindManyTaskArgs } from "./args/FindManyTaskArgs";
import { Task } from "../../../models/Task";
export declare class FindManyTaskResolver {
    tasks(ctx: any, info: GraphQLResolveInfo, args: FindManyTaskArgs): Promise<Task[]>;
}
