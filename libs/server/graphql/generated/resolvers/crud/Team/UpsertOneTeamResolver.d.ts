import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTeamArgs } from "./args/UpsertOneTeamArgs";
import { Team } from "../../../models/Team";
export declare class UpsertOneTeamResolver {
    upsertOneTeam(ctx: any, info: GraphQLResolveInfo, args: UpsertOneTeamArgs): Promise<Team>;
}
