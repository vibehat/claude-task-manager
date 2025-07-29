import type { GraphQLResolveInfo } from "graphql";
import { CreateManyTeamProjectArgs } from "./args/CreateManyTeamProjectArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTeamProjectResolver {
    createManyTeamProject(ctx: any, info: GraphQLResolveInfo, args: CreateManyTeamProjectArgs): Promise<AffectedRowsOutput>;
}
