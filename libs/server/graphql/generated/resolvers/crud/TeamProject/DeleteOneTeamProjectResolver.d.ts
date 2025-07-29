import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTeamProjectArgs } from "./args/DeleteOneTeamProjectArgs";
import { TeamProject } from "../../../models/TeamProject";
export declare class DeleteOneTeamProjectResolver {
    deleteOneTeamProject(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTeamProjectArgs): Promise<TeamProject | null>;
}
