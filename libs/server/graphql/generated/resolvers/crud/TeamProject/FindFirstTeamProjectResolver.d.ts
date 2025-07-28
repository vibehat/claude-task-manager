import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTeamProjectArgs } from "./args/FindFirstTeamProjectArgs";
import { TeamProject } from "../../../models/TeamProject";
export declare class FindFirstTeamProjectResolver {
    findFirstTeamProject(ctx: any, info: GraphQLResolveInfo, args: FindFirstTeamProjectArgs): Promise<TeamProject | null>;
}
