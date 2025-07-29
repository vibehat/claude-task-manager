import type { GraphQLResolveInfo } from "graphql";
import { CreateManyTeamArgs } from "./args/CreateManyTeamArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTeamResolver {
    createManyTeam(ctx: any, info: GraphQLResolveInfo, args: CreateManyTeamArgs): Promise<AffectedRowsOutput>;
}
