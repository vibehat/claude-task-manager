import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneProjectArgs } from "./args/DeleteOneProjectArgs";
import { Project } from "../../../models/Project";
export declare class DeleteOneProjectResolver {
    deleteOneProject(ctx: any, info: GraphQLResolveInfo, args: DeleteOneProjectArgs): Promise<Project | null>;
}
