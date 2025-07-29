import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneSubtaskArgs } from "./args/DeleteOneSubtaskArgs";
import { Subtask } from "../../../models/Subtask";
export declare class DeleteOneSubtaskResolver {
    deleteOneSubtask(ctx: any, info: GraphQLResolveInfo, args: DeleteOneSubtaskArgs): Promise<Subtask | null>;
}
