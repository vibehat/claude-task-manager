import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTeamProjectArgs } from "./args/FindUniqueTeamProjectArgs";
import { TeamProject } from "../../../models/TeamProject";
export declare class FindUniqueTeamProjectResolver {
    teamProject(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTeamProjectArgs): Promise<TeamProject | null>;
}
