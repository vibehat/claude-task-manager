import type { GraphQLResolveInfo } from "graphql";
import { CreateOneSubtaskArgs } from "./args/CreateOneSubtaskArgs";
import { Subtask } from "../../../models/Subtask";
export declare class CreateOneSubtaskResolver {
    createOneSubtask(ctx: any, info: GraphQLResolveInfo, args: CreateOneSubtaskArgs): Promise<Subtask>;
}
