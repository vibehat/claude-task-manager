import type { GraphQLResolveInfo } from "graphql";
import { AggregateTeamArgs } from "./args/AggregateTeamArgs";
import { AggregateTeam } from "../../outputs/AggregateTeam";
export declare class AggregateTeamResolver {
    aggregateTeam(ctx: any, info: GraphQLResolveInfo, args: AggregateTeamArgs): Promise<AggregateTeam>;
}
