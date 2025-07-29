import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyTeamMemberArgs } from "./args/DeleteManyTeamMemberArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTeamMemberResolver {
    deleteManyTeamMember(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTeamMemberArgs): Promise<AffectedRowsOutput>;
}
