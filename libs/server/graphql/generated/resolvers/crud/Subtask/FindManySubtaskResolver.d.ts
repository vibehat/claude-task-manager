import type { GraphQLResolveInfo } from "graphql";
import { FindManySubtaskArgs } from "./args/FindManySubtaskArgs";
import { Subtask } from "../../../models/Subtask";
export declare class FindManySubtaskResolver {
    subtasks(ctx: any, info: GraphQLResolveInfo, args: FindManySubtaskArgs): Promise<Subtask[]>;
}
