import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSubtaskOrThrowArgs } from "./args/FindFirstSubtaskOrThrowArgs";
import { Subtask } from "../../../models/Subtask";
export declare class FindFirstSubtaskOrThrowResolver {
    findFirstSubtaskOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstSubtaskOrThrowArgs): Promise<Subtask | null>;
}
