import type { GraphQLResolveInfo } from "graphql";
import { FindFirstProjectArgs } from "./args/FindFirstProjectArgs";
import { Project } from "../../../models/Project";
export declare class FindFirstProjectResolver {
    findFirstProject(ctx: any, info: GraphQLResolveInfo, args: FindFirstProjectArgs): Promise<Project | null>;
}
