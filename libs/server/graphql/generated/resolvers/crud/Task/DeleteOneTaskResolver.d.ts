import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTaskArgs } from "./args/DeleteOneTaskArgs";
import { Task } from "../../../models/Task";
export declare class DeleteOneTaskResolver {
    deleteOneTask(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTaskArgs): Promise<Task | null>;
}
