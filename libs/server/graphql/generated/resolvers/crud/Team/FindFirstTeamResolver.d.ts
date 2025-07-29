import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTeamArgs } from "./args/FindFirstTeamArgs";
import { Team } from "../../../models/Team";
export declare class FindFirstTeamResolver {
    findFirstTeam(ctx: any, info: GraphQLResolveInfo, args: FindFirstTeamArgs): Promise<Team | null>;
}
