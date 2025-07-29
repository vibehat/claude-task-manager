import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueProjectArgs } from "./args/FindUniqueProjectArgs";
import { Project } from "../../../models/Project";
export declare class FindUniqueProjectResolver {
    project(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProjectArgs): Promise<Project | null>;
}
