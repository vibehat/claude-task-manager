import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyTeamProjectArgs } from "./args/DeleteManyTeamProjectArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTeamProjectResolver {
    deleteManyTeamProject(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTeamProjectArgs): Promise<AffectedRowsOutput>;
}
