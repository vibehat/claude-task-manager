import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnTaskDependencyArgs } from "./args/CreateManyAndReturnTaskDependencyArgs";
import { CreateManyAndReturnTaskDependency } from "../../outputs/CreateManyAndReturnTaskDependency";
export declare class CreateManyAndReturnTaskDependencyResolver {
    createManyAndReturnTaskDependency(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnTaskDependencyArgs): Promise<CreateManyAndReturnTaskDependency[]>;
}
