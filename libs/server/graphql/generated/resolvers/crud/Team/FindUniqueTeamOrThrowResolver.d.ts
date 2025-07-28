import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTeamOrThrowArgs } from "./args/FindUniqueTeamOrThrowArgs";
import { Team } from "../../../models/Team";
export declare class FindUniqueTeamOrThrowResolver {
    getTeam(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTeamOrThrowArgs): Promise<Team | null>;
}
