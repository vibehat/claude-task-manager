import type { GraphQLResolveInfo } from "graphql";
import { AggregateTeamMemberArgs } from "./args/AggregateTeamMemberArgs";
import { AggregateTeamMember } from "../../outputs/AggregateTeamMember";
export declare class AggregateTeamMemberResolver {
    aggregateTeamMember(ctx: any, info: GraphQLResolveInfo, args: AggregateTeamMemberArgs): Promise<AggregateTeamMember>;
}
