import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyProjectArgs } from "./args/DeleteManyProjectArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyProjectResolver {
    deleteManyProject(ctx: any, info: GraphQLResolveInfo, args: DeleteManyProjectArgs): Promise<AffectedRowsOutput>;
}
