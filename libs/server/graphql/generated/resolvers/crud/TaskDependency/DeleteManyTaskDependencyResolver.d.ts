import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyTaskDependencyArgs } from "./args/DeleteManyTaskDependencyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTaskDependencyResolver {
    deleteManyTaskDependency(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTaskDependencyArgs): Promise<AffectedRowsOutput>;
}
