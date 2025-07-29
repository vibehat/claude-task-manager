import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyTeamArgs } from "./args/UpdateManyTeamArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTeamResolver {
    updateManyTeam(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTeamArgs): Promise<AffectedRowsOutput>;
}
