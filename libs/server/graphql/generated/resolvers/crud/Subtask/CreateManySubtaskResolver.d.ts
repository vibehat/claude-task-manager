import type { GraphQLResolveInfo } from "graphql";
import { CreateManySubtaskArgs } from "./args/CreateManySubtaskArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManySubtaskResolver {
    createManySubtask(ctx: any, info: GraphQLResolveInfo, args: CreateManySubtaskArgs): Promise<AffectedRowsOutput>;
}
