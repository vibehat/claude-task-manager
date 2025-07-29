import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTaskArgs } from "./args/UpdateOneTaskArgs";
import { Task } from "../../../models/Task";
export declare class UpdateOneTaskResolver {
    updateOneTask(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTaskArgs): Promise<Task | null>;
}
