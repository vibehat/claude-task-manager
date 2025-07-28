import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueProjectOrThrowArgs } from "./args/FindUniqueProjectOrThrowArgs";
import { Project } from "../../../models/Project";
export declare class FindUniqueProjectOrThrowResolver {
    getProject(ctx: any, info: GraphQLResolveInfo, args: FindUniqueProjectOrThrowArgs): Promise<Project | null>;
}
