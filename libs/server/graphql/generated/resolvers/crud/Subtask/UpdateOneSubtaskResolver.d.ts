import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneSubtaskArgs } from "./args/UpdateOneSubtaskArgs";
import { Subtask } from "../../../models/Subtask";
export declare class UpdateOneSubtaskResolver {
    updateOneSubtask(ctx: any, info: GraphQLResolveInfo, args: UpdateOneSubtaskArgs): Promise<Subtask | null>;
}
