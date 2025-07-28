import type { GraphQLResolveInfo } from "graphql";
import { FindFirstProjectOrThrowArgs } from "./args/FindFirstProjectOrThrowArgs";
import { Project } from "../../../models/Project";
export declare class FindFirstProjectOrThrowResolver {
    findFirstProjectOrThrow(ctx: any, info: GraphQLResolveInfo, args: FindFirstProjectOrThrowArgs): Promise<Project | null>;
}
