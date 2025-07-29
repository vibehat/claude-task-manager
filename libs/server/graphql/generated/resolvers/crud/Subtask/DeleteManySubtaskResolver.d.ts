import type { GraphQLResolveInfo } from "graphql";
import { DeleteManySubtaskArgs } from "./args/DeleteManySubtaskArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManySubtaskResolver {
    deleteManySubtask(ctx: any, info: GraphQLResolveInfo, args: DeleteManySubtaskArgs): Promise<AffectedRowsOutput>;
}
