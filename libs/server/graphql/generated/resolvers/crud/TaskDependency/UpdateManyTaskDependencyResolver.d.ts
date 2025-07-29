import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyTaskDependencyArgs } from "./args/UpdateManyTaskDependencyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTaskDependencyResolver {
    updateManyTaskDependency(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTaskDependencyArgs): Promise<AffectedRowsOutput>;
}
