import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneSubtaskArgs } from "./args/UpsertOneSubtaskArgs";
import { Subtask } from "../../../models/Subtask";
export declare class UpsertOneSubtaskResolver {
    upsertOneSubtask(ctx: any, info: GraphQLResolveInfo, args: UpsertOneSubtaskArgs): Promise<Subtask>;
}
