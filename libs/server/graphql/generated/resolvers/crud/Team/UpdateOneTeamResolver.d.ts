import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTeamArgs } from "./args/UpdateOneTeamArgs";
import { Team } from "../../../models/Team";
export declare class UpdateOneTeamResolver {
    updateOneTeam(ctx: any, info: GraphQLResolveInfo, args: UpdateOneTeamArgs): Promise<Team | null>;
}
