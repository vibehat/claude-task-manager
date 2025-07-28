import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTaskArgs } from "./args/CreateOneTaskArgs";
import { Task } from "../../../models/Task";
export declare class CreateOneTaskResolver {
    createOneTask(ctx: any, info: GraphQLResolveInfo, args: CreateOneTaskArgs): Promise<Task>;
}
