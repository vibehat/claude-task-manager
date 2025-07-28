import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSubtaskOrThrowArgs } from "./args/FindUniqueSubtaskOrThrowArgs";
import { Subtask } from "../../../models/Subtask";
export declare class FindUniqueSubtaskOrThrowResolver {
    getSubtask(ctx: any, info: GraphQLResolveInfo, args: FindUniqueSubtaskOrThrowArgs): Promise<Subtask | null>;
}
