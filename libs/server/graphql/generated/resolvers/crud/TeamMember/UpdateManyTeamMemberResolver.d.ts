import type { GraphQLResolveInfo } from "graphql";
import { UpdateManyTeamMemberArgs } from "./args/UpdateManyTeamMemberArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTeamMemberResolver {
    updateManyTeamMember(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTeamMemberArgs): Promise<AffectedRowsOutput>;
}
