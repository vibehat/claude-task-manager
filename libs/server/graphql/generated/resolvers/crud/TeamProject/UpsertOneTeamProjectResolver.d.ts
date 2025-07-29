import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTeamProjectArgs } from "./args/UpsertOneTeamProjectArgs";
import { TeamProject } from "../../../models/TeamProject";
export declare class UpsertOneTeamProjectResolver {
    upsertOneTeamProject(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTeamProjectArgs): Promise<TeamProject>;
}
