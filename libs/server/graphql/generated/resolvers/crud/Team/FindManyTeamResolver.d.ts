import type { GraphQLResolveInfo } from "graphql";
import { FindManyTeamArgs } from "./args/FindManyTeamArgs";
import { Team } from "../../../models/Team";
export declare class FindManyTeamResolver {
    teams(ctx: any, info: GraphQLResolveInfo, args: FindManyTeamArgs): Promise<Team[]>;
}
