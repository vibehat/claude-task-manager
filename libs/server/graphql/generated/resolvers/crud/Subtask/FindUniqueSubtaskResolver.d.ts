import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSubtaskArgs } from "./args/FindUniqueSubtaskArgs";
import { Subtask } from "../../../models/Subtask";
export declare class FindUniqueSubtaskResolver {
    subtask(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSubtaskArgs): Promise<Subtask | null>;
}
