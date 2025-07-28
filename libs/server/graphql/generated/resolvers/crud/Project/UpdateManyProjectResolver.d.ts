import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyProjectArgs } from "./args/UpdateManyProjectArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyProjectResolver {
    updateManyProject(ctx: any, info: GraphQLResolveInfo, args: UpdateManyProjectArgs): Promise<AffectedRowsOutput>;
}
