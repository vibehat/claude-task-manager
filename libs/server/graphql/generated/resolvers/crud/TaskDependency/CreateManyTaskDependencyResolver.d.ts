import type { GraphQLResolveInfo } from "graphql";
import { CreateManyTaskDependencyArgs } from "./args/CreateManyTaskDependencyArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTaskDependencyResolver {
    createManyTaskDependency(ctx: any, info: GraphQLResolveInfo, args: CreateManyTaskDependencyArgs): Promise<AffectedRowsOutput>;
}
