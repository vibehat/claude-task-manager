import type { GraphQLResolveInfo } from "graphql";
import { UpdateManySubtaskArgs } from "./args/UpdateManySubtaskArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManySubtaskResolver {
    updateManySubtask(ctx: any, info: GraphQLResolveInfo, args: UpdateManySubtaskArgs): Promise<AffectedRowsOutput>;
}
