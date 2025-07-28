import type { GraphQLResolveInfo } from "graphql";
import { CreateOneProjectArgs } from "./args/CreateOneProjectArgs";
import { Project } from "../../../models/Project";
export declare class CreateOneProjectResolver {
    createOneProject(ctx: any, info: GraphQLResolveInfo, args: CreateOneProjectArgs): Promise<Project>;
}
