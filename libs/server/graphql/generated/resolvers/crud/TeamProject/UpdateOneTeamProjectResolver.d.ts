import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTeamProjectArgs } from "./args/UpdateOneTeamProjectArgs";
import { TeamProject } from "../../../models/TeamProject";
export declare class UpdateOneTeamProjectResolver {
    updateOneTeamProject(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTeamProjectArgs): Promise<TeamProject | null>;
}
