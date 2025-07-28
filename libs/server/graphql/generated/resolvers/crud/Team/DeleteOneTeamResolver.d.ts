import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneTeamArgs } from "./args/DeleteOneTeamArgs";
import { Team } from "../../../models/Team";
export declare class DeleteOneTeamResolver {
    deleteOneTeam(ctx: any, info: GraphQLResolveInfo, args: DeleteOneTeamArgs): Promise<Team | null>;
}
