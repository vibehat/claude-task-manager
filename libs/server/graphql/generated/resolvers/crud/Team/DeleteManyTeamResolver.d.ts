import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyTeamArgs } from "./args/DeleteManyTeamArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTeamResolver {
    deleteManyTeam(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTeamArgs): Promise<AffectedRowsOutput>;
}
