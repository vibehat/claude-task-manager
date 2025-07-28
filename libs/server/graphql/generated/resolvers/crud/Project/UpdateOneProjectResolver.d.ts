import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneProjectArgs } from "./args/UpdateOneProjectArgs";
import { Project } from "../../../models/Project";
export declare class UpdateOneProjectResolver {
    updateOneProject(ctx: any, info: GraphQLResolveInfo, args: UpdateOneProjectArgs): Promise<Project | null>;
}
