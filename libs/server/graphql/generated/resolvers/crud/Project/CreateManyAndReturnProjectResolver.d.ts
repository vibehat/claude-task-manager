import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnProjectArgs } from "./args/CreateManyAndReturnProjectArgs";
import { CreateManyAndReturnProject } from "../../outputs/CreateManyAndReturnProject";
export declare class CreateManyAndReturnProjectResolver {
    createManyAndReturnProject(ctx: any, info: GraphQLResolveInfo, args: CreateManyAndReturnProjectArgs): Promise<CreateManyAndReturnProject[]>;
}
