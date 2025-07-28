import type { GraphQLResolveInfo } from "graphql";
import { CreateManyTeamMemberArgs } from "./args/CreateManyTeamMemberArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTeamMemberResolver {
    createManyTeamMember(ctx: any, info: GraphQLResolveInfo, args: CreateManyTeamMemberArgs): Promise<AffectedRowsOutput>;
}
