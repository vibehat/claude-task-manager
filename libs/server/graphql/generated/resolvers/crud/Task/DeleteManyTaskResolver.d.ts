import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyTaskArgs } from "./args/DeleteManyTaskArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTaskResolver {
    deleteManyTask(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTaskArgs): Promise<AffectedRowsOutput>;
}
