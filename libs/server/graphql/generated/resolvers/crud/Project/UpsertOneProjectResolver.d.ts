import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneProjectArgs } from "./args/UpsertOneProjectArgs";
import { Project } from "../../../models/Project";
export declare class UpsertOneProjectResolver {
    upsertOneProject(ctx: any, info: GraphQLResolveInfo, args: UpsertOneProjectArgs): Promise<Project>;
}
