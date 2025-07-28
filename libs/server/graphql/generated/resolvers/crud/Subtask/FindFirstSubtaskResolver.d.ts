import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSubtaskArgs } from "./args/FindFirstSubtaskArgs";
import { Subtask } from "../../../models/Subtask";
export declare class FindFirstSubtaskResolver {
    findFirstSubtask(ctx: any, info: GraphQLResolveInfo, args: FindFirstSubtaskArgs): Promise<Subtask | null>;
}
