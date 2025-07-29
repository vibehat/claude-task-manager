import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyTaskArgs } from "./args/UpdateManyTaskArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTaskResolver {
    updateManyTask(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTaskArgs): Promise<AffectedRowsOutput>;
}
