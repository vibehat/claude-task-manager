import type { GraphQLResolveInfo } from "graphql";
import { FindManyProjectArgs } from "./args/FindManyProjectArgs";
import { Project } from "../../../models/Project";
export declare class FindManyProjectResolver {
    projects(ctx: any, info: GraphQLResolveInfo, args: FindManyProjectArgs): Promise<Project[]>;
}
