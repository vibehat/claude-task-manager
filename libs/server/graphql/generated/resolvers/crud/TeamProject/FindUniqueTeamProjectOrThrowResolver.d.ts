import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTeamProjectOrThrowArgs } from "./args/FindUniqueTeamProjectOrThrowArgs";
import { TeamProject } from "../../../models/TeamProject";
export declare class FindUniqueTeamProjectOrThrowResolver {
    getTeamProject(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTeamProjectOrThrowArgs): Promise<TeamProject | null>;
}
