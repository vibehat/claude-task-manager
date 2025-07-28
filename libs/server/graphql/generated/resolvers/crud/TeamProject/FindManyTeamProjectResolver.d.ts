import type { GraphQLResolveInfo } from "graphql";
import { FindManyTeamProjectArgs } from "./args/FindManyTeamProjectArgs";
import { TeamProject } from "../../../models/TeamProject";
export declare class FindManyTeamProjectResolver {
    teamProjects(ctx: any, info: GraphQLResolveInfo, args: FindManyTeamProjectArgs): Promise<TeamProject[]>;
}
