import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTaskOrThrowArgs } from "./args/FindUniqueTaskOrThrowArgs";
import { Task } from "../../../models/Task";
export declare class FindUniqueTaskOrThrowResolver {
    getTask(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTaskOrThrowArgs): Promise<Task | null>;
}
