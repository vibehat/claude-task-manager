import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyLabelArgs } from "./args/UpdateManyLabelArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyLabelResolver {
    updateManyLabel(ctx: any, info: GraphQLResolveInfo, args: UpdateManyLabelArgs): Promise<AffectedRowsOutput>;
}
