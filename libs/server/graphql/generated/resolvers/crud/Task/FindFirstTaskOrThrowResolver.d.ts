import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTaskOrThrowArgs } from "./args/FindFirstTaskOrThrowArgs";
import { Task } from "../../../models/Task";
export declare class FindFirstTaskOrThrowResolver {
    findFirstTaskOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstTaskOrThrowArgs): Promise<Task | null>;
}
