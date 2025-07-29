import type { GraphQLResolveInfo } from "graphql";
import { CreateOneTeamArgs } from "./args/CreateOneTeamArgs";
import { Team } from "../../../models/Team";
export declare class CreateOneTeamResolver {
    createOneTeam(ctx: any, info: GraphQLResolveInfo, args: CreateOneTeamArgs): Promise<Team>;
}
