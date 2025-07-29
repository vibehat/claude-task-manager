import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTeamArgs } from "./args/FindUniqueTeamArgs";
import { Team } from "../../../models/Team";
export declare class FindUniqueTeamResolver {
    team(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTeamArgs): Promise<Team | null>;
}
