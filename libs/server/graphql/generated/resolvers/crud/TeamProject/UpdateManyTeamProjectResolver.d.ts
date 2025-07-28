import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyTeamProjectArgs } from "./args/UpdateManyTeamProjectArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTeamProjectResolver {
    updateManyTeamProject(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTeamProjectArgs): Promise<AffectedRowsOutput>;
}
