import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyLabelArgs } from "./args/DeleteManyLabelArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyLabelResolver {
    deleteManyLabel(ctx: any, info: GraphQLResolveInfo, args: DeleteManyLabelArgs): Promise<AffectedRowsOutput>;
}
